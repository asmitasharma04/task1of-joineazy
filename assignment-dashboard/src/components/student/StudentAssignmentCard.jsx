import { formatDate } from '../../utils/helpers';

const StudentAssignmentCard = ({ assignment, isSubmitted, onOpenConfirm }) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-semibold text-slate-900">{assignment.title}</h3>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${
                isSubmitted ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'
              }`}
            >
              {isSubmitted ? 'Submitted' : 'Pending'}
            </span>
          </div>
          <p className="mt-2 text-sm text-slate-600">{assignment.description}</p>
          <p className="mt-3 text-sm text-slate-500">Due: {formatDate(assignment.dueDate)}</p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row md:flex-col">
          <a
            href={assignment.driveLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-slate-300 px-4 py-2 text-center text-sm font-medium text-slate-700"
          >
            Open Drive Link
          </a>
          <button
            disabled={isSubmitted}
            onClick={onOpenConfirm}
             className={`rounded-2xl px-4 py-2 text-sm font-medium text-white ${
              isSubmitted ? 'cursor-not-allowed bg-slate-300' : 'bg-indigo-600'
            }`}
          >
            {isSubmitted ? 'Already Submitted' : 'Mark as Submitted'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentAssignmentCard;