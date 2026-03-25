const StudentSubmissionRow = ({ studentName, submitted }) => {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-slate-50 px-4 py-3">
      <p className="text-sm font-medium text-slate-700">{studentName}</p>
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          submitted ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
        }`}
      >
        {submitted ? 'Submitted' : 'Not Submitted'}
      </span>
    </div>
  );
};

export default StudentSubmissionRow;