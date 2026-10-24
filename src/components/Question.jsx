import Option from "./Option.jsx";

function Question({ questionText, options, selectedAnswer, onSelectAnswer }) {
  return (
    <div className="question">
      <h2 className="question-text">{questionText}</h2>

      <div className="options">
        {options.map((optionText, index) => (
          <Option
            key={index}
            text={optionText}
            isSelected={selectedAnswer === index}
            onSelect={() => onSelectAnswer(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Question;