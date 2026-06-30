import Linker from "../components/atom/Linker.jsx";
import LinkerBack from "../components/atom/LinkerBack.jsx";
import { LinkerContainer } from "../components/molecules/LinkerContainer.jsx";

export default function Student () {
    return (
      <LinkerContainer text="Modul Pelengkap 10">
        <Linker text="Pembelajaran" link="student/lesson" />
        <Linker text="Latihan" link="latihan" />
        <Linker text="Quiz" link="quiz" />
        <Linker text="Leaderboard" link="leaderboard" />
        <LinkerBack text="Back" link="/" />
      </LinkerContainer>
    );
}