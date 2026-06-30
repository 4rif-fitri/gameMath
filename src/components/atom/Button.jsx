export default function Button({ text, setClickedNumbers, setLastNumber, clickedNumbers }) {
  function handleClick() {
    setLastNumber(text);

    if (!clickedNumbers.includes(text)) {
      setClickedNumbers([...clickedNumbers, text]);
    }
  }

  const hasBeenClicked = clickedNumbers.includes(text);

  return (
    <button
      onClick={handleClick}
      className={`border-2 border-white rounded-2xl aspect-square
      text-white font-bold text-2xl cursor-pointer transition-all duration-200
      ${hasBeenClicked ? "bg-green-500 hover:bg-green-600" : "hover:bg-blue-600"}`}
    >
      {text}
    </button>
  );
}
