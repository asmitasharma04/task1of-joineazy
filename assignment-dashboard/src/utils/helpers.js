export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

export const calculateProgress = (assignment, studentIds) => {
  const submittedCount = studentIds.filter((id) => assignment.submissions[id]).length;
  const total = studentIds.length || 1;
  return Math.round((submittedCount / total) * 100);
};

export const generateId = (prefix) => `${prefix}-${Date.now()}`;