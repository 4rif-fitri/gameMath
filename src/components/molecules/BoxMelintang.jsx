export default function BoxMelintang({ droppedAnswer, onDropAnswer }) {
    const handleDragOver = (e) => {
        // Wajib ada untuk membenarkan drop
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        // Ambil data teks yang dihantar oleh BoxChoice
        const data = e.dataTransfer.getData("text/plain");
        onDropAnswer(data);
    };

    return (
        <div className="flex justify-between border border-white rounded-md w-100 mx-auto p-2 p-4">
            <h1 className="text-4xl text-start">🍪🍪🍪🍪🍪</h1>
            <div
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                className="flex flex-col w-30 h-25 rounded-md bg-yellow-100  border border-black
                border-gray-200"
            >

            </div>
        </div>
    )
}