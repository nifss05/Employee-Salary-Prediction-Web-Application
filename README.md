#  Employee Salary Prediction Web Application

A Machine Learning-powered web app that accurately predicts employee salaries based on experience, age, department, education level, and performance rating. Built with **React + Vite** frontend and **Flask** backend, running on your local machine.

---

## Features

- ✅ Predict salary using ML model
- ✅ Modern React UI with Vite bundler
- ✅ Real-time salary predictions in Indian Rupees (₹)
- ✅ Form validation and error handling
- ✅ Responsive dark theme design
- ✅ Flask REST API backend
- ✅ Fast hot module reload during development

---

## Tech Stack

| Component   | Technology                    |
|-------------|-------------------------------|
| Frontend    | React 18, Vite, Axios, CSS3   |
| Backend     | Flask, Flask-CORS             |
| ML Model    | scikit-learn (Linear Regression) |
| Data Prep   | Pandas, NumPy, StandardScaler |

---

## Quick Start

### Prerequisites
- **Node.js** 16+ and **npm**
- **Python** 3.8+ and **pip**

### Setup Instructions

#### 1. Clone the Repository
```bash
git clone https://github.com/SM-Nifal/Employe-Salary-Prediction-Using-ML.git
cd Employe-Salary-Prediction-Using-ML
```

#### 2. Install Backend Dependencies

```bash
cd backend
pip install -r requirements.txt
```

#### 3. Start the Backend Server

```bash
python app.py
```

The API will be running at `http://localhost:5000`

#### 4. In a New Terminal, Install Frontend Dependencies

```bash
cd frontend
npm install
```

#### 5. Start the Frontend Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or `http://localhost:5174` if 5173 is in use)

---

## Input Features

- **Years of Experience** - How long the employee has worked (0-50 years)
- **Age** - Employee age (18-70 years)
- **Department** - IT, HR, Finance, Operations, Sales, Marketing
- **Education Level** - High School, Bachelor, Master, PhD
- **Performance Rating** - Score from 1-5

---

## Model Information

- **Algorithm**: Linear Regression (with StandardScaler preprocessing)
- **Input Features**: 5 (experience, age, department, education, performance)
- **Output**: Predicted annual salary in US Dollars (converted to Indian Rupees)
- **Preprocessing**: StandardScaler normalization, LabelEncoder for categories

---

## Currency

Salaries are displayed in **Indian Rupees (₹)** with exchange rate of **1 USD = 20 INR**

---

## Project Structure

```
├── frontend/          # React + Vite frontend
│   ├── src/          # React components and styles
│   └── package.json  
├── backend/          # Flask REST API
│   ├── app.py        # Main API application
│   └── requirements.txt
├── salary_predictor.pkl  # Trained ML model
└── SETUP_GUIDE.md    # Detailed setup guide
```

---

## Troubleshooting

**Port Already in Use?**
- Frontend will automatically use port 5174 if 5173 is busy
- Backend: Stop the process using Task Manager or kill command

**Model Not Loading?**
- Ensure `salary_predictor.pkl` exists in the root directory
- Check backend terminal for error messages

**CORS Errors?**
- Ensure backend is running on `http://localhost:5000`
- Frontend proxy is configured in `frontend/vite.config.js`

---

## License

This project is for educational purposes. Created by SM Nifal.

Dataset source: [Kaggle - Salary Prediction for Beginners](https://www.kaggle.com/datasets/rkiattisak/salaly-prediction-for-beginer)