export default function Feedback ({ feedback, totalFeedback }) {
 const positivePercentage = Math.round((feedback.good / totalFeedback) * 100);
  return (
    <div>
      <h2>Feedback</h2>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  )
}