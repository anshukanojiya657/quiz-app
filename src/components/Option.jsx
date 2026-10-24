function Option({ text, isSelected, onSelect }) {
  return (
    <button
      className={isSelected ? "option option-selected" : "option"}
      onClick={onSelect}
    >
      {text}
    </button>
  );
}

export default Option;