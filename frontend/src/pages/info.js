import "../style/Home.css";
import { Link } from 'react-router-dom';
import LandingImg from "../assets/dev.png";

function Info(){
    return (
        <>
          <div className='landing'>
            <div className='Header'>
              <div className='ro'>
                <p>ENGLISH</p>
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
                <p>Name Of The Project : EngLab</p>
                <p>Version : 1.0</p>
                <p>{"Developed By : Exotic (CSBS)"}</p>
                <p>Developer : Luffy</p>
                <p>Technology : MERN</p>
                <p>Server : Node JS</p>
                <p>Backend : Express JS</p>
                <p>Frontend : React JS</p>
                <p>Database : Mongo DB</p>
            </div>
              <div className='RR'>
                <img src={LandingImg}/>
              </div>
              
            </div>
            <div className='Foot'>
              <p>This Website Was Created By <Link>Team Exotic</Link></p>
            </div>
    
          </div>
        </>
      )
}

export default Info;