import "../style/Home.css";
import { Link } from 'react-router-dom';
import LandingImg from "../assets/dev.png";
import information from "../infomation.json";
import ELearner from "../assets/ELearner.apk";
import ReactLoading from "react-loading";
import { useEffect } from 'react';

function Info(){
  useEffect(()=>{
    document.querySelector(".loading").style="display:flex;";
    const delayedFunction = () => {
      // Your function logic goes here
      document.querySelector(".loading").style="display:none;";
    };

    const timeoutId = setTimeout(delayedFunction, 2000);

    // Cleanup the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
 },[])

    return (
        <>
          <div className='landing'>
            <div className='Header'>
              <div className='ro'>
                <p>{information.ProjectName}</p>
              </div>
              <div className='lo'>
                <Link to={'/Home'}>Home</Link>
                <Link to={'/Learn'}>Learn</Link>
                <Link to={'/Practice'}>Practice</Link>
                <Link to={'/Info'}>Info</Link>
              </div>
            </div>
    
            <div className='Body'>
            <div className='LL Nop'>
                <p>Name Of The Project : {information.ProjectName}</p>
                <p>Version : {information.Version}</p>
                <p>{"Developed By : "+information.DevelopedBy}</p>
                <p>Developer : {information.Developer}</p>
                <p>Technology : {information.Technology}</p>
                <p>Server : {information.Server}</p>
                <p>Backend : {information.Backend}</p>
                <p>Frontend : {information.Frontend}</p>
                <p>Database : {information.Database}</p>
                <a className="glow-button apk" href={ELearner} download="ELearner" target="_blank" rel="noreferrer">Download Apk</a>
            </div>
              <div className='RR'>
                <img src={LandingImg} alt="Development"/>
              </div>
              
            </div>
            <div className='Foot'>
              <p>This Website Was Created By <Link>Team Exotic</Link></p>
            </div>
    
          </div>

          <div className='loading'>
         <ReactLoading type="bubbles" color="#0000FF"
                height={100} width={100} />
                <p>Loading Please Wait...</p>
        </div>
        </>
      )
}

export default Info;