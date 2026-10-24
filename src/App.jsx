import { useState } from "react";
import questions from "./data/questions.js";
import StartScreen from "./components/StartScreen.jsx";
import QuizProgress from "./components/QuizProgress.jsx";
import Question from "./components/Question.jsx";
import Result from "./components/Result.jsx";

function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function App() {

  const [stage, setStage] = useState("start"); 
  const [quizQuestions, setQuizQuestions] = useState(questions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);

  const currentQuestion = quizQuestions[currentIndex];
  const isLastQuestion = currentIndex === quizQuestions.length - 1;

  function handleStart() {
    setQuizQuestions(shuffleArray(questions)); // new order every time
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setScore(0);
    setStage("quiz");
  }

  function handleSelectAnswer(index) {
    setSelectedAnswer(index);
  }

  function handleNext() {
    if (selectedAnswer === currentQuestion.answer) {
      setScore(score + 1);
    }

    if (isLastQuestion) {
      setStage("result");
    } else {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
    }
  }

  function handleRestart() {
    setStage("start");
  }

  return (
    <main className="app">
      {stage === "start" && (
        <StartScreen
          totalQuestions={questions.length}
          onStart={handleStart}
        />
      )}

      {stage === "quiz" && (
        <div className="card quiz-screen">
          <QuizProgress
            current={currentIndex + 1}
            total={quizQuestions.length}
          />
          <Question
            questionText={currentQuestion.question}
            options={currentQuestion.options}
            selectedAnswer={selectedAnswer}
            onSelectAnswer={handleSelectAnswer}
          />
          <button
            className="btn btn-primary"
            onClick={handleNext}
            disabled={selectedAnswer === null}
          >
            {isLastQuestion ? "See Results" : "Next Question"}
          </button>
        </div>
      )}

      {stage === "result" && (
        <Result
          score={score}
          total={quizQuestions.length}
          onRestart={handleRestart}
        />
      )}
    </main>
  );
}

export default App;