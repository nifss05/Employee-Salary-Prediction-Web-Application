import { useState } from 'react'
import axios from 'axios'
import PredictionForm from './components/PredictionForm'
import PredictionResult from './components/PredictionResult'
import './App.css'

function App() {
  const [prediction, setPrediction] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handlePredict = async (formData) => {
    setLoading(true)
    setError(null)
    try {
      const response = await axios.post('/api/predict', formData)
      setPrediction(response.data)
    } catch (err) {
      setError(err.response?.data?.error || 'Error making prediction. Please try again.')
      setPrediction(null)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="app-container">
      <div className="content">
        <div className="header-section">
          <h1 className="header">Employee Salary Predictor</h1>
          <p className="subheader">Using Machine Learning</p>
        </div>

        <div className="info-box">
          <p>
            Enter the employee details below to predict their salary based on our trained machine learning model.
            The prediction is based on years of experience, age, and other relevant factors.
          </p>
        </div>

        <PredictionForm onPredict={handlePredict} loading={loading} />

        {error && <div className="error-box">{error}</div>}

        {prediction && <PredictionResult prediction={prediction} />}

        {loading && <div className="loading">Making prediction...</div>}
      </div>
    </div>
  )
}

export default App
