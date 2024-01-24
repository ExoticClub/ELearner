import { Link } from 'react-router-dom';
import LandingImg from "../assets/Landing.png";
import "../style/Home.css";
import "../style/Components.css";
import { useGlobal } from '../components/GlobalContext';

function Home() {
  const {globalVariable} = useGlobal();
  console.log(globalVariable);
  
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
          <div className='LL'>
            <p className='Head'>Language Isn't Barrier In Communication</p>
            <p className='Para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, molestias magni nostrum exercitationem quia accusantium minus libero voluptate iure</p>
            <div className='buttons'>
              <Link to={"/learn"} className='glow-button' id='home-buts'>Learn</Link>
              <Link to={"/practice"} className='glow-button'>Practice</Link>
            </div>
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

export default Home