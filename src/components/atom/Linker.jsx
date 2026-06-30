import {Link} from "react-router";

export default function Linker ({text,link}) {
    return (
        <Link
            to={`/${link}`}
            className="bg-white px-4 py-3 flex justify-between items-center
                        rounded text-black font-bold shadow
                        hover:bg-gray-100 transition-colors
                        hover:translate-x-2 transition-transform duration-300"
            style={{ width: '17rem' }}
        >
            <h2 className="text-black font-bold ">{text}</h2>
            <span className="group-hover:translate-x-2 transition-transform duration-300">➡️</span>
        </Link>
    )
}