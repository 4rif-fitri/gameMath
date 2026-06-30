export default function BoxChoice ({text}) {
    const handleDragStart = (e) => {
        e.dataTransfer.setData("text/plain", text);
    };

    return (
        <h1
            draggable="true"
            onDragStart={handleDragStart}
            className="w-full flex justify-center items-center font-bold text-2xl rounded-md aspect-square bg-gray-100">
            {text}
        </h1>
    )
}