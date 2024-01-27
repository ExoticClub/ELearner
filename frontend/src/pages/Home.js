import { Link } from 'react-router-dom';
import LandingImg from "../assets/Landing.png";
import "../style/Home.css";
import "../style/Components.css";
import { useGlobal } from '../components/GlobalContext';

function Home() {
  
  let logInfo;
  const { globalVariable } = useGlobal();
   let io=globalVariable;
   logInfo=io.split("$");

  if(logInfo[0]==="404"){
    window.location.href = '/';
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
          </div>
        </div>

        <div className='Body'>
          <div className='LL'>
            <p className='Head'>Language Isn't Barrier In Communication</p>
            <p className='Para'>English is the language of our international communication in all areas, such as politics, science, media or art and it is often the language of entertainment as well as socialising. Having a good command of English helps us to have more opportunities in life, first of all, our career.</p>
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
          <p>This Website Was Created By <Link to={'/Info'}>Team Exotic</Link></p>
        </div>

      </div>
      <div className='iuot'>
        <p>{logInfo[1]}</p>
      </div>
    </>
  )
}

export default Home