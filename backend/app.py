from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# Load the trained model
model_path = os.path.join(os.path.dirname(__file__), '..', 'salary_predictor.pkl')
model_data = None
try:
    model_data = joblib.load(model_path)
    print(f"Model loaded successfully. Type: {type(model_data)}")
    if isinstance(model_data, dict):
        print(f"Model components: {list(model_data.keys())}")
except Exception as e:
    print(f"Error loading model: {e}")
    model_data = None

# Mapping for categorical variables
DEPARTMENT_MAPPING = {
    'IT': 0,
    'HR': 1,
    'Finance': 2,
    'Operations': 3,
    'Sales': 4,
    'Marketing': 5
}

EDUCATION_MAPPING = {
    'High School': 0,
    'Bachelor': 1,
    'Master': 2,
    'PhD': 3
}


@app.route('/predict', methods=['POST'])
def predict():
    """
    Endpoint to predict salary based on employee details
    Expected JSON format:
    {
        "experience": float,
        "age": int,
        "department": str,
        "education_level": str,
        "performance_rating": float
    }
    """
    try:
        data = request.get_json()

        # Validate required fields
        if not data:
            return jsonify({'error': 'No data provided'}), 400

        required_fields = ['experience', 'age']
        for field in required_fields:
            if field not in data:
                return jsonify({'error': f'Missing required field: {field}'}), 400

        # Extract and validate data
        experience = float(data.get('experience', 0))
        age = int(data.get('age', 0))
        department = data.get('department', 'IT')
        education_level = data.get('education_level', 'Bachelor')
        performance_rating = float(data.get('performance_rating', 3))

        # Validate ranges
        if experience < 0:
            return jsonify({'error': 'Experience cannot be negative'}), 400
        if age < 18 or age > 70:
            return jsonify({'error': 'Age must be between 18 and 70'}), 400
        if performance_rating < 1 or performance_rating > 5:
            return jsonify({'error': 'Performance rating must be between 1 and 5'}), 400

        if model_data is None:
            return jsonify({'error': 'Model not loaded'}), 500

        # Extract model components
        model = model_data['model']
        scaler = model_data.get('scaler')
        label_encoders = model_data.get('label_encoders', {})

        # Prepare features for prediction
        # Create feature array: [experience, age, department, education_level, performance_rating]
        features = np.array([[
            experience,
            age,
            DEPARTMENT_MAPPING.get(department, 0),
            EDUCATION_MAPPING.get(education_level, 1),
            performance_rating
        ]])

        # Scale features if scaler is available
        if scaler is not None:
            features = scaler.transform(features)

        # Make prediction
        predicted_salary = model.predict(features)[0]

        # Ensure prediction is a Python float for JSON serialization
        predicted_salary = float(predicted_salary)
        
        # Convert to INR (1 USD = 20 INR approximately)
        USD_TO_INR = 20
        salary_in_rupees = predicted_salary * USD_TO_INR

        return jsonify({
            'predicted_salary': predicted_salary,
            'salary_in_rupees': salary_in_rupees,
            'confidence': 0.85,  # Placeholder confidence score
            'additional_info': {
                'experience_years': experience,
                'age': age,
                'department': department,
                'education_level': education_level,
                'performance_rating': performance_rating
            }
        }), 200

    except ValueError as e:
        return jsonify({'error': f'Invalid data format: {str(e)}'}), 400
    except Exception as e:
        return jsonify({'error': f'Error during prediction: {str(e)}'}), 500


@app.route('/health', methods=['GET'])
def health():
    """Health check endpoint"""
    return jsonify({
        'status': 'healthy',
        'model_loaded': model_data is not None
    }), 200


@app.route('/', methods=['GET'])
def index():
    """API documentation"""
    return jsonify({
        'name': 'Employee Salary Predictor API',
        'version': '1.0.0',
        'endpoints': {
            'POST /predict': 'Make a salary prediction',
            'GET /health': 'Health check',
            'GET /': 'API documentation'
        }
    }), 200


if __name__ == '__main__':
    app.run(debug=True, port=5000)
