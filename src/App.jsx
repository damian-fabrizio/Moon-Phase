import Moon from "./components/Moon"
import Stats from "./components/Stats";
import './index.css';
import './style.css';

const App = () => {
  return (
    // hide overflow in all directions, height is the screen height
    <div className="overflow-x-hidden h-full w-full text-neutral-300 antialiased">
      {/* parent of background, fixes background in place no matter what,
      inset-0 means top bottom l, r are set to 0, everything that is placed inside will be in front of the background, height and width are full size of screen  */}
     
      <div className="fixed inset-0 -z[-10] overflow-hidden">
        <div id="starsContainer">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div> 
        </div>

      </div>
      

      {/* main container of everything. height is full, items are in flexbox */}
      <div className="container">
      <Moon />
      <Stats />
      </div>
        
      
    </div>
    
  )
}

export default App
