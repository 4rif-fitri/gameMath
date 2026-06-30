import {Link} from "react-router";

export default function ButtonNext({ text, link }) {
  return (
    <Link to={link}
      disabled
      className="
		disabled:bg-gray-200
		disabled:border-gray-600
		bg-green-300 px-4 py-3 flex justify-between items-center
		rounded text-black font-bold shadow
		border-2 border-green-600
		m-6
		hover:bg-green-100 transition-colors
		hover:translate-x-2 transition-transform duration-300"
    >
      <h2 className="font-bold disabled:text-gray-600">{text}</h2>
      <span className="group-hover:translate-x-2 transition-transform duration-300">
        ➡️
      </span>
    </Link>
  );
}
