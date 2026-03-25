import { useState } from 'react';

const initialForm = {
  title: '',
  description: '',
  dueDate: '',
  driveLink: ''
};

const CreateAssignmentModal = ({ isOpen, onClose, onCreate }) => {
  const [form, setForm] = useState(initialForm);

  if (!isOpen) return null;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate(form);
    setForm(initialForm);
    onClose();
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4">
      <div className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl">
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Create Assignment</h3>
            <p className="text-sm text-slate-600">Admins can create assignments and attach a Drive link.</p>
          </div>
          <button onClick={onClose} className="text-slate-500">✕</button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Assignment title"
            className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Assignment description"
            className="min-h-28 rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
            required
          />
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              type="date"
              name="dueDate"
              value={form.dueDate}
              onChange={handleChange}
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
              required
            />
            <input
              type="url"
              name="driveLink"
              value={form.driveLink}
              onChange={handleChange}
              placeholder="https://drive.google.com/..."
              className="rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700"
            >
              Cancel
            </button>
            <button type="submit" className="rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white">
              Create Assignment
            </button>
          </div>
        </form>
      </div>
      </div>
  );
};

export default CreateAssignmentModal;
