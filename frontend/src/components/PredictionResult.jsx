import './PredictionResult.css'

function PredictionResult({ prediction }) {
  // USD to INR conversion rate (approximately 1 USD = 20 INR)
  const USD_TO_INR = 20;

  const formatSalary = (salary) => {
    const salaryInRupees = salary * USD_TO_INR;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(salaryInRupees)
  }

  return (
    <div className="prediction-result">
      <h2>Prediction Result</h2>
      <div className="result-box">
        <div className="result-label">Predicted Salary</div>
        <div className="result-value">{formatSalary(prediction.predicted_salary)}</div>
        {prediction.confidence && (
          <div className="confidence">
            Confidence: {(prediction.confidence * 100).toFixed(2)}%
          </div>
        )}
      </div>
      {prediction.additional_info && (
        <div className="additional-info">
          <h3>Additional Information</h3>
          <ul>
            {Object.entries(prediction.additional_info).map(([key, value]) => (
              <li key={key}>
                <strong>{key.replace(/_/g, ' ')}:</strong> {value}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default PredictionResult
