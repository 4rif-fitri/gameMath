import Linker from "../components/atom/Linker.jsx";
import LinkerBack from "../components/atom/LinkerBack.jsx";
import { LinkerContainer } from "../components/molecules/LinkerContainer.jsx";

export default function LesseonManu() {
  return (
    <LinkerContainer text="Topik Pembelajaran">
      <Linker text="Kenali 1 hingga 10" link="student/lesson/1" />
      <Linker text="Asas Penambahan" link="student/lesson/2" />
      <Linker text="Kominasi nombor 10" link="student/lesson/3" />
      <Linker text="Genapkan ke Puluh" link="student/lesson/4" />
      <Linker text="Teknik Pinjam" link="student/lesson/5" />
      <Linker text="Majic Box" link="student/lesson/6" />
      <LinkerBack text="Back" link="student" />
    </LinkerContainer>
  );
}
