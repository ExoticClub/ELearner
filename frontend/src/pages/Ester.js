import React from 'react';
import Eject from "../assets/AUI.mp4";

function Ester(){

    function Dem(){
        window.location.href="/"
    }

    setTimeout(Dem,5000)


    return(
        <>
        <div className='Esterb'>
            <video autoPlay loop>
                <source src={Eject} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
        </>
    )
};

export default Ester;