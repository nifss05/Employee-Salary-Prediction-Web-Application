# Employee Salary Prediction - React + Vite Architecture

This project has been converted from Streamlit to a modern **React + Vite** frontend with a **Flask** backend.

## Project Structure

```
Employe-Salary-Prediction-Using-ML/
├── frontend/                    # React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── PredictionForm.jsx
│   │   │   ├── PredictionForm.css
│   │   │   ├── PredictionResult.jsx
│   │   │   └── PredictionResult.css
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── package.json
│   ├── .gitignore
│   └── README.md
├── backend/                     # Flask API backend
│   ├── app.py                   # Flask application
│   ├── requirements.txt         # Python dependencies
│   └── README.md
├── salary_predictor.pkl         # Trained ML model
├── images/                      # Project images
└── README.md
```

## Quick Start

### Prerequisites
- **Node.js** 16+ and **npm** (for frontend)
- **Python** 3.8+ and **pip** (for backend)

### Step 1: Install Backend Dependencies

```bash
cd backend
pip install -r requirements.txt
```

### Step 2: Start the Backend Server

```bash
cd backend
python app.py
```

The API will be available at `http://localhost:5000`

### Step 3: Install Frontend Dependencies

In a new terminal:

```bash
cd frontend
npm install
```

### Step 4: Start the Frontend Development Server

```bash
npm run dev
```

The React app will be available at `http://localhost:5173`

## Architecture

```
┌─────────────────────────────────────┐
│      React + Vite Frontend          │
│      (http://localhost:5173)        │
│                                     │
│  - PredictionForm (user input)      │
│  - PredictionResult (display)       │
│  - Dark theme UI                    │
└──────────────────┬──────────────────┘
                   │ API Requests
                   │ (axios)
                   ▼
┌─────────────────────────────────────┐
│      Flask Backend API              │
│      (http://localhost:5000)        │
│                                     │
│  - POST /predict                    │
│  - Data validation                  │
│  - Model inference                  │
└──────────────────┬──────────────────┘
                   │
                   ▼
    ┌──────────────────────────┐
    │  ML Model (.pkl)         │
    │  salary_predictor.pkl    │
    └──────────────────────────┘
```

## API Endpoints

### POST /predict
Predict salary based on employee details

**Request:**
```json
{
  "experience": 5.5,
  "age": 30,
  "department": "IT",
  "education_level": "Bachelor",
  "performance_rating": 4
}
```

**Response:**
```json
{
  "predicted_salary": 85000,
  "confidence": 0.85,
  "additional_info": {
    "experience_years": 5.5,
    "age": 30,
    "department": "IT",
    "education_level": "Bachelor",
    "performance_rating": 4
  }
}
```

### GET /health
Check API health status

### GET /
Get API documentation

## Frontend Features

- ✅ Modern React 18 with Hooks
- ✅ Vite for fast bundling and HMR
- ✅ Dark theme UI (matches original Streamlit design)
- ✅ Form validation
- ✅ Real-time predictions
- ✅ Responsive design
- ✅ Error handling
- ✅ Loading states

## Development Tips

### Hot Module Replacement (HMR)
Both frontend and backend support hot reloading:
- Frontend: Vite provides instant HMR for React components
- Backend: Flask runs in debug mode and auto-reloads on changes

### Debugging
- Frontend: Open Chrome DevTools (F12)
- Backend: Check terminal output for Flask debug messages

### Environment Variables
To change API endpoint, modify the Vite proxy configuration in `frontend/vite.config.js`.

## Customization

### Adding New Departments/Education Levels
Update the mappings in `backend/app.py`:
```python
DEPARTMENT_MAPPING = {...}
EDUCATION_MAPPING = {...}
```

And update the select options in `frontend/src/components/PredictionForm.jsx`.

### Styling
All styling uses CSS-in-JS with separate `.css` files for each component. Modify colors in:
- `frontend/src/App.css` - Main app styles
- `frontend/src/components/*.css` - Component styles

## Migration from Streamlit

The original Streamlit app (`app.py`) has been converted to a modern web architecture:

| Streamlit | React + Vite | Flask Backend |
|-----------|-------------|---------------|
| UI Components | React Components | |
| CSS Styling | CSS Modules | |
| Form Input | Form State Management | |
| Model Inference | | Model Loading & Prediction |
| Page Rendering | SPA Rendering | API Endpoints |

## Troubleshooting

### Port Already in Use
- Frontend (5173): `npm run dev` will prompt for a new port
- Backend (5000): Kill the process using `lsof -i :5000` (Mac/Linux) or use Task Manager (Windows)

### CORS Errors
Flask-CORS is enabled in `backend/app.py`. If you still get CORS errors:
1. Ensure backend is running on port 5000
2. Check the API URL in Vite config

### Model Not Loading
Ensure `salary_predictor.pkl` is in the project root directory and accessible from the backend.

---

**Happy coding! 🚀**
