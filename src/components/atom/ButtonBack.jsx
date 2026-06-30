import {useNavigate} from "react-router";

export default function LinkerBack ({text}) {
    let navigate = useNavigate();

    return (
        <button onClick={() => navigate(-1)}
              className="bg-red-300 px-4 py-3 flex justify-between items-center
                              rounded text-black font-bold shadow
                              border-2 border-red-600
                              hover:bg-red-100 transition-colors
                              hover:translate-x-2 transition-transform duration-300">
            <h2 className="text-black font-bold ">{text}</h2>
            <span className="group-hover:translate-x-2 transition-transform duration-300">
                ➡️
            </span>
        </button>
    );
}