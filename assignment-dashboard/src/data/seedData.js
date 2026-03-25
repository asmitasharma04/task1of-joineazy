export const seedData = {
  users: [
    { id: 's1', name: 'Asmita Sharma', role: 'student' },
    { id: 's2', name: 'Riya Gupta', role: 'student' },
    { id: 's3', name: 'Karan Mehta', role: 'student' },
    { id: 'a1', name: 'Prof. Madam', role: 'admin' }
  ],
  assignments: [
    {
      id: 'as1',
      title: 'Frontend Dashboard Review',
      description: 'Build the first version of the assignment dashboard UI.',
      dueDate: '2026-03-29',
      driveLink: 'https://drive.google.com/',
      createdBy: 'a1',
      createdAt: '2026-03-25T10:00:00.000Z',
      submissions: {
        s1: false,
        s2: true,
        s3: false
      }
    },
    {
      id: 'as2',
      title: 'Tailwind Components Task',
      description: 'Create reusable cards, badges, and modal components.',
      dueDate: '2026-04-01',
      driveLink: 'https://drive.google.com/',
      createdBy: 'a1',
      createdAt: '2026-03-25T11:00:00.000Z',
      submissions: {
        s1: true,
        s2: true,
        s3: false
      }
       }
  ]
};