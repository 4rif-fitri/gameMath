export default function AlertBetul ({text,onReset}) {
    return (
        <div className="w-full flex flex-col h-30 rounded-md bg-green-200 border-4 border-green-700 p-2">
            <h1 className="font-bold text-2xl text-start">{text}</h1>
            <div className="text-start font-bold text-2xl">
                🍪🍪🍪🍪🍪 = 5
            </div>
            <div className="flex justify-between">
                <div></div>
                <button
                    onClick={onReset}
                    className="bg-white w-max py-1 px-5 rounded-md border-2 border-black font-bold"
                >
                    Reset
                </button>
            </div>
        </div>
    )
}