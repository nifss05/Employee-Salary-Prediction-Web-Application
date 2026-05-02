import { useState } from 'react'
import './PredictionForm.css'

function PredictionForm({ onPredict, loading }) {
  const [formData, setFormData] = useState({
    experience: '',
    age: '',
    department: 'IT',
    education_level: 'Bachelor',
    performance_rating: 3
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'performance_rating' ? parseFloat(value) : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validation
    if (!formData.experience || !formData.age) {
      alert('Please fill in all required fields')
      return
    }

    onPredict(formData)
  }

  return (
    <form className="prediction-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="experience">Years of Experience *</label>
        <input
          type="number"
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleInputChange}
          placeholder="Enter years of experience"
          min="0"
          step="0.5"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="age">Age *</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Enter age"
          min="18"
          max="70"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="department">Department</label>
        <select
          id="department"
          name="department"
          value={formData.department}
          onChange={handleInputChange}
        >
          <option value="IT">IT</option>
          <option value="HR">HR</option>
          <option value="Finance">Finance</option>
          <option value="Operations">Operations</option>
          <option value="Sales">Sales</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="education_level">Education Level</label>
        <select
          id="education_level"
          name="education_level"
          value={formData.education_level}
          onChange={handleInputChange}
        >
          <option value="High School">High School</option>
          <option value="Bachelor">Bachelor</option>
          <option value="Master">Master</option>
          <option value="PhD">PhD</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="performance_rating">Performance Rating (1-5)</label>
        <input
          type="range"
          id="performance_rating"
          name="performance_rating"
          value={formData.performance_rating}
          onChange={handleInputChange}
          min="1"
          max="5"
          step="0.5"
          className="range-input"
        />
        <div className="range-value">{formData.performance_rating}</div>
      </div>

      <button type="submit" disabled={loading} className="submit-btn">
        {loading ? 'Predicting...' : 'Predict Salary'}
      </button>
    </form>
  )
}

export default PredictionForm
