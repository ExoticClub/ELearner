import { Link } from 'react-router-dom';
import LandingImg from "../assets/Landing.png";
import "../style/Home.css";
import "../style/Components.css";

function Home() {

  return (
    <>
      <div className='landing'>
        <div className='Header'>
          <div className='ro'>
            <p>ENGLISH</p>
          </div>
          <div className='lo'>
            <a href='/Home'>Home</a>
            <a href='/Learn'>Learn</a>
            <a href='/Practice'>Practice</a>
            <a href='/Info'>Info</a>
          </div>
        </div>

        <div className='Body'>
          <div className='LL'>
            <p className='Head'>Language Isn't Barrier In Communication</p>
            <p className='Para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, molestias magni nostrum exercitationem quia accusantium minus libero voluptate iure</p>
            <div className='buttons'>
              <a href="/learn" className='glow-button' id='home-buts'>Learn</a>
              <a href="/practice" className='glow-button'>Practice</a>
            </div>
          </div>
          <div className='RR'>
            <img src={LandingImg}/>
          </div>
        </div>
        <div className='Foot'>
          <p>This Website Was Created By <a>Team Exotic</a></p>
        </div>

      </div>
    </>
  )
}

export default Home