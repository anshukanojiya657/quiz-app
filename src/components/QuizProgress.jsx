function QuizProgress({ current, total }) {
  const percentage = (current / total) * 100;

  return (
    <div className="progress">
      <p className="progress-label">
        Question {current} / {total}
      </p>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
}

export default QuizProgress;