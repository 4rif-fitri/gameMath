import Linker from "../components/Linker";
import LinkerBack from "../components/LinkerBack";
import { LinkerContainer } from "../components/LinkerContainer";

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
