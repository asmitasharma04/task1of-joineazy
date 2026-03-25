# Assignment & Review Dashboard

## Overview
A responsive role-based dashboard for student assignment management.

## Features
- Student dashboard (view & submit assignments)
- Admin dashboard (create & track assignments)
- Double confirmation submission flow
- Progress bars for tracking
- Role switcher for demo
- localStorage persistence

## Tech Stack
- React.js
- Tailwind CSS
- localStorage

## Run Locally
npm install
npm run dev

## Architecture
- components/common
- components/student
- components/admin
- utils (helpers, storage)
- data (mock data)

## Design Decisions
- Used localStorage instead of backend
- Component-based structure
- Modal-based submission confirmation
- Responsive card-based UI
