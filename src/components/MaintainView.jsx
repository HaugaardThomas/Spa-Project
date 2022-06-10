import React, {useState, useEffect} from "react";
import MaintainDesk from "./MaintainDesk";
import MaintainMobile from "./MaintainMobile";


const windowDims = () => ({
    height:window.innerHeight,
    width:window.innerWidth
})

const MaintainView = ({items}) => {
    const color =
    "linear-gradient(180deg, rgba(191,221,239,1) 0%, rgba(191,221,239,1) 100%)";
  useEffect(() => {
    document.body.style.backgroundImage = color;
  });
    const [dimensions, setDimensions] = useState(windowDims());

    useEffect (() => {

    const handleResize = () => {
        setDimensions(windowDims())
        console.log(windowDims)
    }   
window.addEventListener('resize', handleResize);

return () => {
    window.removeEventListener('resize', handleResize)
}

    },[]);

    const breakpoint = 1000;

    return dimensions.width < breakpoint ? <MaintainMobile items={items} /> : <MaintainDesk items={items} />  //Hvis siden er mindre end breakpoint. Breakpoint = 620. Så går den til MobileView, hvis den ikke er mindre end 620/breakpoint så bruger den DesktopView (class).

};

export default MaintainView;