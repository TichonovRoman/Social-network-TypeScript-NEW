import preloader from "../../../img/Hourglass.gif";
import React from "react";


const Preloader = () => {
    return (
        <img style={{position: "absolute", top: "20%", left: "50%"}} alt={"Preloader"} src={preloader}/>
    )
}
export default Preloader