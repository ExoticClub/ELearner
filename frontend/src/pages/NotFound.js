import React from 'react';
import ReactPlayer from 'react-player';
import Eject from "../assets/AUE.mp4";

function NotFound(){

    function Dem(){
        window.location.href="/"
    }

    setTimeout(Dem,7000)


    return(
        <>
            <ReactPlayer
                url={Eject}
                playing
                loop
                muted
                width="100%"
                height="100%"
            />
            
        </>
    )
};

export default NotFound;