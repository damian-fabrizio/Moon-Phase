const apiKey = import.meta.env.VITE_API_KEY;
console.log('API Key:', import.meta.env.VITE_API_KEY);



import { useEffect } from "react";
import waxgib from "../assets/8-phases/waxinggibbous1.png";
import firstq from "../assets/8-phases/firstquarter1.png";
import full from "../assets/8-phases/fullmoon1.png";
import newmoon from "../assets/8-phases/new-moon1.png";
import thirdq from "../assets/8-phases/thirdquarter.png";
import wancre from "../assets/8-phases/waningcrescent1.png";
import wangib from "../assets/8-phases/waning-gibbous1.png";
import waxcre from "../assets/8-phases/waxing-crescent1.png";

// UNCOMMENT STRICTMODE TAG IN MAIN.JSX BEFORE PUSHING TO GITHUB


const url = "https://moon-phase.p.rapidapi.com/advanced";

const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': apiKey,
		'x-rapidapi-host': 'moon-phase.p.rapidapi.com'
	}
};


const getMoonPhase = async () => {
    // try catch block to make sure data loads in 
    try{
        const response = await fetch(url, options);
        if(!response.ok){
        throw new Error("Failed to fetch data");
        }
        const result = await response.json();
        console.log("Advanced Data: ", result);

        document.querySelector('#phaseTitle').innerHTML = result.moon.phase_name;

        const dateString = result.datestamp;
        const date = new Date(dateString);
        const formattedDate = date.toLocaleDateString('en-US', {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })

        const phaseImage = document.querySelector('#moonImage');
        if(result.moon.phase_name == "New Moon"){
            phaseImage.src = newmoon;
        }
        if(result.moon.phase_name == "Waxing Crescent"){
            phaseImage.src = waxcre;
        }
        if(result.moon.phase_name == "First Quarter"){
            phaseImage.src = firstq;
        }
        if(result.moon.phase_name == "Waxing Gibbous"){
            phaseImage.src = waxgib;
        }
        if(result.moon.phase_name == "Full Moon"){
            phaseImage.src = full;
        }
        if(result.moon.phase_name == "Waning Gibbous"){
            phaseImage.src = wangib;
        }
        if(result.moon.phase_name == "Third Quarter"){
            phaseImage.src = thirdq;
        }
        if(result.moon.phase_name == "Waning Crescent"){
            phaseImage.src = wancre;
        }

        document.querySelector('#currentDate').innerHTML = formattedDate;
        document.querySelector('#illumination').innerHTML = result.moon.illumination;

        const unFormattedDistance = result.moon.moon_distance;
        const formattedDistance = unFormattedDistance.toLocaleString('en-US', {
            maximumFractionDigits: 0
        })

        document.querySelector('#distance').innerHTML = formattedDistance+" mi";
        document.querySelector('#age').innerHTML = result.moon.age_days+" Days";

        // formatting the moonrise time
        const unformattedMoonrise = result.moon.moonrise;
        const [moonriseHours, moonriseMinutes] = unformattedMoonrise.split(':');
        const moonriseHoursInt = parseInt(moonriseHours, 10);
        const moonriseSuffix = moonriseHoursInt >=12 ? "PM" : "AM";
        const formattedMoonriseHours = moonriseHoursInt % 12 || 12;
        const formattedMoonrise = formattedMoonriseHours+":"+moonriseMinutes+moonriseSuffix;

        document.querySelector('#moonrise').innerHTML = formattedMoonrise;

        // formatting the moonset time
        const unformattedMoonset = result.moon.moonset;
        const [moonsetHours, moonsetMinutes] = unformattedMoonset.split(':');
        const moonsetHoursInt = parseInt(moonsetHours, 10);
        const moonsetSuffix = moonsetHoursInt >=12 ? "PM" : "AM";
        const formattedMoonsetHours = moonsetHoursInt % 12 || 12;
        const formattedMoonset = formattedMoonsetHours+":"+moonsetMinutes+moonsetSuffix;


        document.querySelector('#moonset').innerHTML = formattedMoonset;
        document.querySelector('#lastFull').innerHTML = result.moon_phases.full_moon.last.days_ago+" Days Ago";
        document.querySelector('#nextFull').innerHTML = "In "+result.moon_phases.full_moon.next.days_ahead+" Days";
        document.querySelector('#lastNew').innerHTML = result.moon_phases.new_moon.last.days_ago+" Days Ago";
        document.querySelector('#nextNew').innerHTML = "In "+result.moon_phases.new_moon.next.days_ahead+" Days";
      
    }catch(error){
        console.error("API call failed:", error);
    }

}

// useEffect hook to call getMoonPhase function
const Moon = () => {

    useEffect(()=>{
        console.log("making api call...")
        getMoonPhase();

    }, []); //empty array makes sure effect only ones once after initial render
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-bgnight7">
        {/* image container */}
        <div className="w-screen p-10 border-0 flex justify-center items-center gap-6 border-0">
            <div className="border-b border-gray-700 w-1/4"></div>
            <h3 className="text-lg font-scope ">The Moon Tonight</h3>
            <div className="border-b border-gray-700 w-1/4"></div>
        </div>
        <div className="flex justify-center items-center w-screen h-screen pb-8 border-0">
            <img id="moonImage" src={waxcre} alt="waxcre" className="h-24 w-24 sm:h-40 sm:w-40 md:h-48 md:w-48 lg:h-72 lg:w-72 xl:h-80 xl:w-80 mix-blend-lighten opacity-85 border-0"/>
            <div className="flex flex-col text-left p-4 gap-0 border-0">
            <h3 id="phaseTitle" className="text-2xl md:text-3xl lg:text-5xl font-scope border-0">Loading...</h3>
            <p id="currentDate" className="text-sm md:text-lg lg:text-xl pt-2 font-scope border-0">Loading...</p>
            </div>
        </div>
    </div>

        
  )
}

export default Moon

