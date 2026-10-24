function getResultMessage(percentage) {
  if (percentage === 100) return "Perfect score! You are a star!";
  if (percentage >= 80) return "Excellent work! Almost perfect.";
  if (percentage >= 60) return "Good job! Keep practicing.";
  if (percentage >= 40) return "Not bad, but there is room to improve.";
  return "Keep learning, you will do better next time!";
}

function Result({ score, total, onRestart }) {
  const incorrect = total - score;
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="card result-screen">
      <h1 className="title">Quiz Complete!</h1>

      <p className="final-score">
        {score} <span>/ {total}</span>
      </p>
      <p className="percentage">{percentage}%</p>

      <div className="result-stats">
        <div className="stat stat-correct">
          <span className="stat-number">{score}</span>
          <span className="stat-label">Correct</span>
        </div>
        <div className="stat stat-incorrect">
          <span className="stat-number">{incorrect}</span>
          <span className="stat-label">Incorrect</span>
        </div>
      </div>

      <p className="result-message">{getResultMessage(percentage)}</p>

      <button className="btn btn-primary" onClick={onRestart}>
        Restart Quiz
      </button>
    </div>
  );
}

export default Result;