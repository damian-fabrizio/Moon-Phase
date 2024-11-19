import { useEffect } from "react"

const Stats = () => {
  return (
    
    <div className="h-screen w-screen flex flex-col justify-center items-center border-0 bg-bgnight7">
        <div className="w-screen p-6 border-0 flex justify-center items-center gap-6 border-0">
            <div className="border-b border-gray-700 w-1/4 hidden sm:block"></div>
            <h3 className="text-sm sm:text-md md:text-lg lg:text-xl font-scope">Quick Stats</h3>
            <div className="border-b border-gray-700 w-1/4 hidden sm:block"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-6 md:p-20 h-full w-full font-scope">
            <div className="flex flex-col items-center text-center gap-2 border-0">
                <p className="text-sm">Illumination</p>
                <span id="illumination" className="text-2xl sm:text-3xl md:text-4xl">Loading...</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 border-0">
                <p className="text-sm">Distance From Earth</p>
                <span id="distance" className="text-2xl sm:text-3xl md:text-4xl">Loading...</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 border-0">
                <p className="text-sm">Age</p>
                <span id="age" className="text-2xl sm:text-3xl md:text-4xl">Loading...</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 border-0">
                <p className="text-sm">Moonrise</p>
                <span  id="moonrise" className="text-2xl sm:text-3xl md:text-4xl">Loading...</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 border-0">
                <p className="text-sm">Moonset</p>
                <span id="moonset" className="text-2xl sm:text-3xl md:text-4xl">Loading...</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 border-0">
                <p className="text-sm">Last Full Moon</p>
                <span id="lastFull" className="text-2xl sm:text-3xl md:text-4xl">Loading...</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 border-0">
                <p className="text-sm">Next Full Moon</p>
                <span id="nextFull" className="text-2xl sm:text-3xl md:text-4xl">Loading...</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 border-0">
                <p className="text-sm">Last New Moon</p>
                <span id="lastNew" className="text-2xl sm:text-3xl md:text-4xl">Loading...</span>
            </div>
            <div className="flex flex-col items-center text-center gap-2 border-0">
                <p className="text-sm">Next New Moon</p>
                <span id="nextNew" className="text-2xl sm:text-3xl md:text-4xl">Loading...</span>
            </div>

        </div>
    </div>

  )
}

export default Stats