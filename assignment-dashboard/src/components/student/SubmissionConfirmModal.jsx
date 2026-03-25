const SubmissionConfirmModal = ({ isOpen, step, onClose, onNext, onConfirm, assignmentTitle }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">
      <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl">
        <h3 className="text-xl font-bold text-slate-900">Confirm Submission</h3>
        <p className="mt-2 text-sm text-slate-600">
          Assignment: <span className="font-semibold">{assignmentTitle}</span>
        </p>

        {step === 1 ? (
          <p className="mt-4 text-slate-700">Have you submitted this assignment using the provided Drive link?</p>
        ) : (
          <p className="mt-4 text-slate-700">
            Final confirmation: once marked as submitted, the status will change for your dashboard.
          </p>
          )}

        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
          >
            Cancel
          </button>

          {step === 1 ? (
            <button
              onClick={onNext}
              className="rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm"
            >
              Yes, I have submitted
            </button>
          ) : (
            <button
              onClick={onConfirm}
              className="rounded-2xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm"
            >
              Final Confirm
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubmissionConfirmModal;