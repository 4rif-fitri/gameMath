import Container from "../molecules/Container.jsx";
import DotNavigation from "../layout/DotNavigation.jsx";
import BoxMelintang from "../molecules/BoxMelintang.jsx";
import GridEmpat from "../molecules/GridEmpat.jsx";
import BoxChoice from "../atom/BoxChoice.jsx";
import {useRef, useState} from "react";
import AlertBetul from "../atom/AlertBetul.jsx";
import AlertSalah from "../atom/AlertSalah.jsx";
import BoxMove from "../atom/BoxMove.jsx";

export default function PageTwo() {
    const [droppedAnswer, setDroppedAnswer] = useState("");
    const [isDragging, setIsDragging] = useState(false);
    const [draggedText, setDraggedText] = useState("");
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [statusJawapan, setStatusJawapan] = useState("");

    const dropZone = useRef(null);

    const isAnswered = droppedAnswer !== "";

    const handleDropAnswer = (answer) => {
        if (isAnswered) return;

        setDroppedAnswer(answer); // Nilai ini masuk ke BoxMelintang
        setIsDragging(false); // Sorok BoxMove selepas drop

        if (answer === "5") {
            setStatusJawapan("betul");
        } else {
            setStatusJawapan("salah");
        }
    };

    const handleDragGlobal = (e) => {
        if (e.clientX === 0 && e.clientY === 0) return;
        setPosition({
            x: e.clientX - 20,
            y: e.clientY - 20
        });
    };

    const handleReset = () => {
        setDroppedAnswer("");
        setStatusJawapan("");
        dropZone.current.classList.remove("!bg-yellow-200");
        dropZone.current.classList.remove("!bg-gray-500");

    };

    return (
        <Container>
            {isDragging && (
                <BoxMove text={draggedText} position={position} />
            )}

            <DotNavigation />

            <div>
                <h1 className="text-white font-bold text-3xl">Berapa Biji Biskut?</h1>

                {/* Hantar droppedAnswer ke BoxMelintang */}
                <BoxMelintang
                    droppedAnswer={droppedAnswer}
                    onDropAnswer={handleDropAnswer}
                    onDropZone={dropZone}
                />

                <h1 className="text-white font-bold text-2xl mt-4">Seret jawapan yang betul:</h1>

                <GridEmpat>
                    <BoxChoice text="3" setIsDragging={setIsDragging} setDraggedText={setDraggedText} onDragGlobal={handleDragGlobal} disabled={isAnswered} />
                    <BoxChoice text="4" setIsDragging={setIsDragging} setDraggedText={setDraggedText} onDragGlobal={handleDragGlobal} disabled={isAnswered} />
                    <BoxChoice text="5" setIsDragging={setIsDragging} setDraggedText={setDraggedText} onDragGlobal={handleDragGlobal} disabled={isAnswered} />
                    <BoxChoice text="6" setIsDragging={setIsDragging} setDraggedText={setDraggedText} onDragGlobal={handleDragGlobal} disabled={isAnswered} />
                </GridEmpat>
            </div>

            {/* Paparan Alert mengikut jawapan */}
            {statusJawapan === "betul" && <AlertBetul text="Tahniah! Jawapan betul." onReset={handleReset} />}
            {statusJawapan === "salah" && <AlertSalah text="Alamak! Cuba lagi." onReset={handleReset} />}
        </Container>
    )
}