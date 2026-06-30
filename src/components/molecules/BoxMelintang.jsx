export default function BoxMelintang({ droppedAnswer, onDropAnswer, onDropZone }) {
    const handleDragOver = (e) => {
        // Wajib ada untuk membenarkan drop
        e.preventDefault();
        e.target.classList.add("!bg-gray-500");
    };

    function handleDragLeave(e) {
        e.preventDefault();
        e.target.classList.remove("!bg-gray-500");

    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.target.classList.add("!bg-yellow-200");
        const data = e.dataTransfer.getData("text/plain");
        onDropAnswer(data);
    };

    return (
        <div className="flex justify-between  border border-white rounded-md w-100 mx-auto p-2 p-4">
            <h1 className="text-4xl text-start">🍪🍪🍪🍪🍪</h1>

            {/* Dropzone (Kotak Kuning) */}
            <div
                ref={onDropZone}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onDragLeave={handleDragLeave}
                className="flex flex-col w-30 h-25 bg-gray-200 rounded-md  border border-black border-gray-200 justify-center items-center text-2xl font-bold text-black"
            >
                {droppedAnswer ? droppedAnswer : ""}
            </div>
        </div>
    )
}