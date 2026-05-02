# Backend API

This is the Flask backend API for the Employee Salary Prediction application.

## Setup

1. Install dependencies:
```bash
pip install -r requirements.txt
```

2. Run the API server:
```bash
python app.py
```

The API will be available at `http://localhost:5000`

## Endpoints

### POST /predict
Makes a salary prediction based on employee details.

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
Health check endpoint to verify API is running.

### GET /
API documentation and available endpoints.

## CORS Configuration

CORS is enabled to allow requests from the frontend running on `localhost:5173` (React Vite dev server).
