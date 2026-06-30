import {Outlet} from "react-router";
import ButtonBack from "./components/atom/LinkerBack.jsx";

export default function Layout() {
    return (
        <>
            <header
                className=
                    "w-full bg-gradient-to-r from-blue-900 bg-blue-100
                    sticky top-0 items-center"
                    style={{height: "4rem"}}>
                {/*<ButtonBack text="Back" />*/}
            </header>
            <main className="bg-gray-900 w-full flex-1 flex flex-col" >
                <Outlet />
            </main>
            <footer>

            </footer>
        </>
    )
}