import { useMemo, useState } from 'react';
import StatCard from '../common/StatCard';
import EmptyState from '../common/EmptyState';
import StudentAssignmentCard from './StudentAssignmentCard';
import SubmissionConfirmModal from './SubmissionConfirmModal';

const StudentDashboard = ({ user, assignments, onConfirmSubmission }) => {
  const [selectedAssignment, setSelectedAssignment] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [step, setStep] = useState(1);

  const stats = useMemo(() => {
    const total = assignments.length;
    const completed = assignments.filter((assignment) => assignment.submissions[user.id]).length;
    const pending = total - completed;
    return { total, completed, pending };
  }, [assignments, user.id]);
  const openModal = (assignment) => {
    setSelectedAssignment(assignment);
    setModalOpen(true);
    setStep(1);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedAssignment(null);
    setStep(1);
  };

  const handleConfirm = () => {
    if (selectedAssignment) {
      onConfirmSubmission(selectedAssignment.id, user.id);
    }
    closeModal();
  };
   return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-slate-900">Welcome, {user.name}</h2>
        <p className="text-sm text-slate-600">Track your assignments and confirm submissions.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total Assignments" value={stats.total} hint="All tasks assigned to you" />
        <StatCard label="Completed" value={stats.completed} hint="Marked as submitted" />
        <StatCard label="Pending" value={stats.pending} hint="Still awaiting submission" />
      </div>

      {assignments.length === 0 ? (
        <EmptyState title="No assignments yet" subtitle="Your professor has not assigned any work yet." />
      ) : (
        <div className="grid gap-4"> {assignments.map((assignment) => (
            <StudentAssignmentCard
              key={assignment.id}
              assignment={assignment}
              isSubmitted={Boolean(assignment.submissions[user.id])}
              onOpenConfirm={() => openModal(assignment)}
            />
          ))}
        </div>
      )}

      <SubmissionConfirmModal
        isOpen={modalOpen}
        step={step}
        onClose={closeModal}
        onNext={() => setStep(2)}
        onConfirm={handleConfirm} assignmentTitle={selectedAssignment?.title}
      />
    </div>
  );
};

export default StudentDashboard;