import Hero from "./Componets/Hero_Component/hero";
import Navbar from "./Componets/NavBar_Component/Navbar";
import Offers from "./Componets/Offers/Offers";
import Plan from "./Componets/Plan/Plan";
import Rooms from "./Componets/Rooms/Rooms";
import Image_Slider from "./Componets/Image_Slider/Image_Slider";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Offers/>
      <Plan/>
      <Rooms/>
      <Image_Slider/>
    </div>
  )
 }

export default App;
