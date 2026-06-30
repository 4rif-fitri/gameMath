export default function BoxMove ({ text, position }) {
    return (
        <h1
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)' // Memastikan pusat kotak berada tepat pada kursor tetikus
            }}
            className="fixed w-25 flex justify-center items-center font-bold text-2xl rounded-md aspect-square bg-gray-100 border-2 border-dashed border-blue-500 shadow-lg pointer-events-none z-50">
            {text}
        </h1>
    )
}