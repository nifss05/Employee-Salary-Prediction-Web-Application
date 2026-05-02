# Employee Salary Prediction - React + Vite Frontend

This is a modern React frontend with Vite bundler for the Employee Salary Prediction ML application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

## Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── PredictionForm.jsx       # Form component for user input
│   │   ├── PredictionForm.css
│   │   ├── PredictionResult.jsx     # Component to display results
│   │   └── PredictionResult.css
│   ├── App.jsx                      # Main app component
│   ├── App.css
│   ├── main.jsx                     # React entry point
│   └── index.css                    # Global styles
├── index.html
├── vite.config.js                   # Vite configuration
├── package.json
└── .gitignore
```

## API Integration

The frontend communicates with the Flask backend API running on `http://localhost:5000`. The proxy is configured in `vite.config.js` to forward `/api` requests to the backend.

## Features

- Modern React 18 with Hooks
- Fast build and hot reload with Vite
- Beautiful dark theme UI
- Form validation
- Real-time predictions
- Responsive design
