export default function AlertSalah ({text}) {
    return (
        <div className="w-full flex flex-col h-30 rounded-md bg-red-200 border-4 border-red-700 p-2">
            <h1 className="font-bold text-2xl text-start">{text}</h1>
            <div className="text-start font-bold text-2xl">
                🍪🍪🍪🍪🍪 = 5
            </div>
            <div className="flex justify-between">
                <div></div>
                <button className="bg-white w-max py-1 px-5 rounded-md border-2 border-black font-bold">Reset</button>
            </div>
        </div>
    )
}