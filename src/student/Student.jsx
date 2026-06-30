import Linker from "../components/Linker";
import LinkerBack from "../components/LinkerBack";
import { LinkerContainer } from "../components/LinkerContainer";

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