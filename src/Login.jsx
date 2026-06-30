import Linker from "./components/Linker.jsx";
import { LinkerContainer } from "./components/LinkerContainer.jsx";

export default function Login () {
    return (
        <LinkerContainer text="Login As">
            <Linker text="Student" link="student" />
            <Linker text="Teacher" link="teacher" />
        </LinkerContainer>
    )
}