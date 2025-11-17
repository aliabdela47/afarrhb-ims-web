# AfarRHB Inventory Management System

A modern, enterprise-grade inventory management system built with React 18, TypeScript, Vite, Tailwind CSS, and Firebase.

## Phase 0: Bootstrap Complete ✅

This is the initial bootstrap phase of the AfarRHB IMS project with the following technology stack:

### Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Backend**: Firebase Web SDK (modular v9+)
- **Linting**: ESLint with TypeScript support

## Getting Started

### Prerequisites

- Node.js 18.x or 20.x
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/aliabdela47/afarrhb-ims-web.git
cd afarrhb-ims-web
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Edit `.env.local` and add your Firebase configuration.

4. Start the development server:
```bash
npm run dev
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests (placeholder)

## Project Structure

```
afarrhb-ims-web/
├── .github/
│   └── workflows/
│       └── ci.yml          # GitHub Actions CI pipeline
├── docs/                   # Documentation
├── public/                 # Static assets
├── src/
│   ├── App.tsx            # Main App component
│   ├── main.tsx           # Application entry point
│   ├── firebase.ts        # Firebase configuration
│   └── index.css          # Global styles with Tailwind
├── .eslintrc.cjs          # ESLint configuration
├── .gitignore             # Git ignore rules
├── index.html             # HTML entry point
├── package.json           # Project dependencies
├── postcss.config.cjs     # PostCSS configuration
├── tailwind.config.cjs    # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── tsconfig.node.json     # TypeScript config for Node
└── vite.config.ts         # Vite configuration
```

## Firebase Setup

To connect this application to Firebase:

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
2. Enable Authentication, Firestore, and Storage
3. Copy your Firebase configuration
4. Update the `.env.local` file with your credentials

## CI/CD

The project includes a GitHub Actions workflow that:
- Runs on Node.js 18.x and 20.x
- Installs dependencies
- Runs the linter
- Builds the project
- Runs tests

## Next Steps

Phase 1 will include:
- Firebase authentication integration
- Routing setup
- Basic layout components
- Initial entity management

## License

Private - AfarRHB Organization

## Technical Specification

For detailed technical specifications, see [docs/AfarRHB IMS - Technical Specification.md](docs/AfarRHB%20IMS%20-%20Technical%20Specification.md)
