# Team Task Manager

A modern full-stack task management application built with React and Vite. This platform helps teams plan, assign, track, and manage tasks with role-based access for Admins and Members.

## Live Demo

https://team-task-manager-nine.vercel.app

## Overview

Team Task Manager is designed for collaborative productivity workflows.

It includes:

- Role-based authentication (Admin and Member)
- Task creation, assignment, status tracking, and updates
- User management for admins
- Dashboard analytics and charts
- Attachment and profile image support
- Progress tracking with todo checklists
- Export/report endpoints integration

## Tech Stack

- Frontend: React 19, Vite, React Router
- Styling: Tailwind CSS
- HTTP Client: Axios
- UI Utilities: React Icons, React Hot Toast
- Charts: Recharts
- Date Handling: Moment.js
- Linting: ESLint

## Project Structure

```
src/
	components/      # Reusable UI components (cards, charts, inputs, layouts)
	context/         # Global user/auth context
	hooks/           # Custom React hooks
	pages/           # App pages (Admin, Auth, User)
	routes/          # Route protection and routing helpers
	utils/           # API paths, axios instance, helpers, upload utilities
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or any compatible package manager

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` - Start local development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint checks

## Test Credentials

Use the following accounts for testing:

### Admin Credentials

- Email: admin2@gmail.com
- Password: 12345

### Member Credentials

- Email: test43@gmail.com
- Password: 12345

## API / Backend

The frontend is currently configured to use this backend base URL:

`https://taskflow-backend-apgt.onrender.com`

If needed, update API settings in `src/utils/apiPaths.js`.

## Author

Made by M Umar Alam
