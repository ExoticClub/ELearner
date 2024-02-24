import { Link } from 'react-router-dom';
import LandingImg from "../assets/Landing.png";
import "../style/Home.css";
import "../style/Components.css";
import Cookies from 'js-cookie';

function Home() {


  
  let logInfo;
  let io=Cookies.get("Log");

  if(!io){
    window.location.href = '/';
  }

  logInfo=io.split("$");

  if(logInfo[0]==="404"){
    window.location.href = '/';
  }

  function LogOut(){
    Cookies.set("Log","404$Login")
    window.location.href = '/';
  }

  function opnTE(){
    document.querySelector(".TEb").style="display:flex;";
    document.querySelector(".TEcls").style="display:flex;";
  }

  function clsTE(){
    document.querySelector(".TEb").style="display:none;";
    document.querySelector(".TEcls").style="display:none;";
  }
  
  return (
    <>
      <div className='landing'>
        <div className='Header'>
          <div className='ro'>
            <p>E Learner</p>
          </div>
          <div className='lo'>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/Learn'}>Learn</Link>
            <Link to={'/Practice'}>Practice</Link>
            <Link to={'/Info'}>Info</Link>
            <button onClick={LogOut} className='LogoutBut' style={{backgroundColor:"lightgrey",color:"red",cursor:"pointer"}}>Logout</button>
          </div>
        </div>

        <div className='Body'>
          <div className='LL'>
            <p className='Head'>Language Isn't Barrier In Communication</p>
            <p className='Para'>
            Welcome to ELearner - your go-to destination for interactive English quizzes! Immerse yourself in engaging content, from grammar challenges to literary trivia. Join our community and elevate your English skills with fun and flexible learning
            </p>
            <div className='buttons'>
              <Link to={"/learn"} className='glow-button' id='home-buts'>Learn</Link>
              <Link to={"/practice"} className='glow-button'>Practice</Link>
            </div>
          </div>
          <div className='RR'>
            <img src={LandingImg} alt='Landing Page Illustation'/>
          </div>
        </div>
        <div className='Foot'>
          <p>Developed By <button className='TEbut' onClick={opnTE}>Team Exotic</button></p>
        </div>

      </div>
      <div className='iuot'>
        <p>{logInfo[1]}</p>
      </div>
      <div className='TEcls'>
        <a onClick={clsTE}></a>
      </div>
      <div className='TEb'>
        <div>
          <div className='TEl'>
            <p className='rit'>Ramco Institute Of Technology</p>
            <p>Computer Science And Business Systems</p>
            <p className='TEd'>Team Exotic</p>
          </div>
          <div className='TEm'>
            <div className='TEm1'>
              <div>
                <p>Kishor T</p>
                <p>CSBS</p>
              </div>
              <div>
                <p>Arumugam B</p>
                <p>CSBS</p>
              </div>
              <div>
                <p>Gopikaran R</p>
                <p>CSBS</p>
              </div>
            </div>
            <div className='TEm2'>
              <div>
                <p>Rumana Nachiyar</p>
                <p>CSBS</p>
              </div>
              <div>
                <p>Sri Janani</p>
                <p>CSBS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
