export default function BoxChoice ({ text, setIsDragging, setDraggedText, onDragGlobal, disabled }) {
    const handleDragStart = (e) => {
        if (disabled) {
            e.preventDefault();
            return;
        }

        e.dataTransfer.setData("text/plain", text);

        setIsDragging(true);
        setDraggedText(text);

        const img = new Image();
        img.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        e.dataTransfer.setDragImage(img, 0, 0);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
    };

    return (
        <h1
            draggable="true"
            onDragStart={handleDragStart}
            onDrag={onDragGlobal} // <-- TAMBAH INI: Jejak kursor semasa seretan aktif
            onDragEnd={handleDragEnd}
            className="w-full flex justify-center items-center font-bold text-2xl rounded-md aspect-square bg-gray-100 cursor-grab active:cursor-grabbing">
            {text}
        </h1>
    )
}