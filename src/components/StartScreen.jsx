function StartScreen({ totalQuestions, onStart }) {
  return (
    <div className="card start-screen">
      <h1 className="title">Web Dev Quiz</h1>
      <p className="description">
        Test your knowledge of React, JavaScript, HTML and CSS. Pick one answer
        for each question and see how well you score!
      </p>
      <p className="question-count">{totalQuestions} questions</p>
      <button className="btn btn-primary" onClick={onStart}>
        Start Quiz
      </button>
    </div>
  );
}

export default StartScreen;