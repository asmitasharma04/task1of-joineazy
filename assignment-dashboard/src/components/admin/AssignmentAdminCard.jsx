    import ProgressBar from '../common/ProgressBar';
   import StudentSubmissionRow from './StudentSubmissionRow';
import { calculateProgress, formatDate } from '../../utils/helpers';

const AssignmentAdminCard = ({ assignment, students }) => {
  const progress = calculateProgress(
    assignment,
    students.map((student) => student.id)
  );

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-slate-900">{assignment.title}</h3>
            <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
              Due {formatDate(assignment.dueDate)}
   </span>
          </div>
          <p className="mt-2 text-sm text-slate-600">{assignment.description}</p>
          <a
            href={assignment.driveLink}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-medium text-indigo-600 hover:underline"
          >
            Open Drive Submission Link
          </a>
        </div>
        <div className="w-full max-w-sm">
          <ProgressBar value={progress} />
        </div>
      </div>
<div className="mt-5 grid gap-3">
        {students.map((student) => (
          <StudentSubmissionRow
            key={student.id}
            studentName={student.name}
            submitted={Boolean(assignment.submissions[student.id])}
          />
        ))}
      </div>
    </div>
  );
};

export default AssignmentAdminCard;