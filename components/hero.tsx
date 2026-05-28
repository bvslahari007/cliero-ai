export default function Hero({title}: any) {
    return(
    <div className="h-screen gap-2 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold"> {title} </h1>
        <p className="text-lg text-gray-600">Your AI Study Companion</p>
        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out">
            GET STARTED!
        </button>


    </div>)
}