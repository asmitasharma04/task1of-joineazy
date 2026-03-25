const RoleSwitcher = ({ selectedRole, setSelectedRole, selectedUserId, setSelectedUserId, users }) => {
  const filteredUsers = users.filter((user) => user.role === selectedRole);

  return (
    <div className="mb-6 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">Role Switcher</h2>
          <p className="text-sm text-slate-600">Switch between student and admin views for the demo.</p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Role</label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 px-3 py-2 outline-none transition focus:border-indigo-500"
            >
              <option value="student">Student</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">User</label>
            <select
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
              className="w-full rounded-2xl border border-slate-300 px-3 py-2 outline-none transition focus:border-indigo-500"
            >
              {filteredUsers.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
                ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleSwitcher;