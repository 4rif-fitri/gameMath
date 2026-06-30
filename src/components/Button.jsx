export default function Button({text,setNo}){
	function handleClick(e){
        setNo(e.target.textContent)
    }

    return (
    <button
      onClick={handleClick}
      className="border-2 border-white rounded-2xl aspect-square
		 text-white font-bold text-2xl hover:bg-blue-600 cursor-pointer"
    >
      {text}
    </button>
  );
}