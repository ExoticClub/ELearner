import React, { useState } from 'react';
import Card1 from "../assets/landscape-1.png";
import Card2 from "../assets/landscape-2.png";
import { useGlobal } from '../components/GlobalContext';
import "../style/Practice.css";
import { Link } from 'react-router-dom';




function Practice() {
   const { globalVariable ,setGlobalVariable} = useGlobal();
   let io=globalVariable;
   let ios=io.split("$");

   let logInfo;
   let ioe=globalVariable;
   logInfo=ioe.split("$");

  if(logInfo[0]==="404"){
    window.location.href = '/';
  }

     
    return (
    <>
      <p className='namer'>{ios[1]}</p>
      <div className='TestHome'>

         <div className='HeaderTest'>
            <div className='loTest'>
               <a>Practice</a>
            </div>
         </div>
        <div className="containerTest">
         
         <div className="card__containerTest">
            <Link to={'/practice/webpractice'}>
            <button className="card__article">
               <img src={Card1} alt="image" className="card__img"/>

               <div className="card__data">
                  <span className="card__description">Let Get Pratice On</span>
                  <h2 className="card__title">Web Module</h2>
               </div>
            </button>
            </Link>

            <Link to={'/practice/formpractice'}>
            <button className="card__article" >
               <img src={Card2} alt="image" className="card__img"/>

               <div className="card__data">
                  <span className="card__description">Let Get Pratice On</span>
                  <h2 className="card__title">Google Forms</h2>
               </div>
            </button>
            </Link>

            
         </div>
      </div>
      </div>
        
    </>
  )
}

export default Practice