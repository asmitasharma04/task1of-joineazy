import { useMemo, useState } from 'react';
import StatCard from '../common/StatCard';
import EmptyState from '../common/EmptyState';
import AssignmentAdminCard from './AssignmentAdminCard';
import CreateAssignmentModal from './CreateAssignmentModal';

const AdminDashboard = ({ user, assignments, students, onCreateAssignment }) => {
  const [openCreateModal, setOpenCreateModal] = useState(false);

  const stats = useMemo(() => {
    const totalAssignments = assignments.length;
    const totalStudents = students.length;
    const totalSubmissions = assignments.reduce((acc, assignment) => {
      return acc + students.filter((student) => assignment.submissions[student.id]).length;
    }, 0);
    return {
      totalAssignments,
      totalStudents,
      totalSubmissions
    };
  }, [assignments, students]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Welcome, {user.name}</h2>
          <p className="text-sm text-slate-600">Create and manage assignments for your students.</p>
        </div>
        <button
          onClick={() => setOpenCreateModal(true)}
          className="rounded-2xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm"
        >+ New Assignment
        </button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Assignments Created" value={stats.totalAssignments} hint="Tasks created by you" />
        <StatCard label="Students" value={stats.totalStudents} hint="Students visible in your assignments" />
        <StatCard label="Total Submissions" value={stats.totalSubmissions} hint="Across all assignments" />
      </div>

      {assignments.length === 0 ? (
        <EmptyState title="No assignments created" subtitle="Start by creating your first assignment." />
      ) : (
        <div className="grid gap-4">
          {assignments.map((assignment) => (
            <AssignmentAdminCard key={assignment.id} assignment={assignment} students={students} />
          ))}
          </div>
      )}

      <CreateAssignmentModal
        isOpen={openCreateModal}
        onClose={() => setOpenCreateModal(false)}
        onCreate={onCreateAssignment}
      />
    </div>
  );
};

export default AdminDashboard;
