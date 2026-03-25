const Header = () => {
  return (
    <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-sm font-medium text-indigo-600">Joineazy Internship Task</p>
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Assignment & Review Dashboard</h1>
        <p className="mt-1 text-sm text-slate-600">
          Responsive role-based dashboard for students and professors.
        </p>
      </div>
      <div className="rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm backdrop-blur">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">Frontend Only</p>
        <p className="text-sm text-slate-700">React + Tailwind + localStorage</p>
      </div>
    </div>
  );
};

export default Header;