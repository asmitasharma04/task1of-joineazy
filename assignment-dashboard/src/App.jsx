import { useEffect, useMemo, useState } from 'react';
import Header from './components/common/Header';
import RoleSwitcher from './components/common/RoleSwitcher';
import StudentDashboard from './components/student/StudentDashboard';
import AdminDashboard from './components/admin/AdminDashboard';
import { getAppData, resetAppData, saveAppData } from './utils/storage';
import { generateId } from './utils/helpers';
import { ROLES } from './utils/constants';

function App() {
  const [data, setData] = useState(getAppData());
  const [selectedRole, setSelectedRole] = useState(ROLES.STUDENT);
  const [selectedUserId, setSelectedUserId] = useState('s1');

  useEffect(() => {
    saveAppData(data);
  }, [data]);
  useEffect(() => {
    const matchingUsers = data.users.filter((user) => user.role === selectedRole);
    if (!matchingUsers.some((user) => user.id === selectedUserId)) {
      setSelectedUserId(matchingUsers[0]?.id || '');
    }
  }, [selectedRole, selectedUserId, data.users]);

  const selectedUser = useMemo(
    () => data.users.find((user) => user.id === selectedUserId),
    [data.users, selectedUserId]
  );

  const students = useMemo(
    () => data.users.filter((user) => user.role === ROLES.STUDENT),
    [data.users]
  );

  const visibleAssignments = useMemo(() => {
    if (!selectedUser) return [];

    if (selectedUser.role === ROLES.ADMIN) {
      return data.assignments.filter((assignment) => assignment.createdBy === selectedUser.id);
    }

    return data.assignments.filter((assignment) => Object.keys(assignment.submissions).includes(selectedUser.id));
  }, [data.assignments, selectedUser]);

  const handleConfirmSubmission = (assignmentId, studentId) => {
    setData((prev) => ({
      ...prev,
      assignments: prev.assignments.map((assignment) =>
        assignment.id === assignmentId
          ? {
              ...assignment,
              submissions: {
                 ...assignment.submissions,
                [studentId]: true
              }
            }
          : assignment
      )
    }));
  };

  const handleCreateAssignment = (form) => {
    if (!selectedUser) return;

    const submissions = students.reduce((acc, student) => {
      acc[student.id] = false;
      return acc;
    }, {});

    const newAssignment = {
      id: generateId('assignment'),
      title: form.title,
      description: form.description,
      dueDate: form.dueDate,
      driveLink: form.driveLink,
      createdBy: selectedUser.id,
      createdAt: new Date().toISOString(),
      submissions
    };

    setData((prev) => ({
      ...prev,
      assignments: [newAssignment, ...prev.assignments]
    }));
  };

  const handleReset = () => {
    const reset = resetAppData();
    setData(reset);
    setSelectedRole(ROLES.STUDENT);
    setSelectedUserId('s1');
  };

  return (
    <div className="min-h-screen px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Header />

        <div className="mb-4 flex justify-end">
          <button
            onClick={handleReset}
            className="rounded-2xl border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
          >
            Reset Demo Data
          </button>
        </div>
        <RoleSwitcher
          selectedRole={selectedRole}
          setSelectedRole={setSelectedRole}
          selectedUserId={selectedUserId}
          setSelectedUserId={setSelectedUserId}
          users={data.users}
        />

        {selectedUser?.role === ROLES.STUDENT ? (
          <StudentDashboard
            user={selectedUser}
            assignments={visibleAssignments}
            onConfirmSubmission={handleConfirmSubmission}
          />
        ) : (
          <AdminDashboard
            user={selectedUser}
            assignments={visibleAssignments}
            students={students}
            onCreateAssignment={handleCreateAssignment}
          />
        )}
      </div>
    </div>
  );
}

export default App;