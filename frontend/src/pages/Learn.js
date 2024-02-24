import '../style/Learn.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import information from "../infomation.json";
import ReactLoading from "react-loading";
import Cookies from 'js-cookie';

function Video() {

  const URL=information.API_URL;

  let logInfo;
   let io=Cookies.get("Log");
   if(!io){
    window.location.href = '/';
  }
   logInfo=io.split("$");

  if(logInfo[0]==="404"){
    window.location.href = '/';
  }

  // API Fetch

  let ReqData=[{"Title":"No Data","Link":"404"}];
  const [Learn, setLearn] = useState(ReqData);

  useEffect(()=>{
    if(Learn[0].Title=="No Data"){
      document.querySelector(".loading").style="display:flex;";
    }
    if(Learn[0].Title!="No Data"){
      document.querySelector(".loading").style="display:none;";
    }
  },[Learn])

  useEffect(() => {
    const apiUrl = URL+'/api/learn';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(resultData => {
        setLearn(resultData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [URL]);




  function HandleVideo(Tit,li,id){
    document.querySelector("#VVd").src=li+"?autoplay=1&mute=0";
    document.querySelector(".main-vid-title").innerHTML=Tit;
    
    for(let i=0;i<Learn.length;i++){
      document.querySelector("#kk"+i).style="background-color:grey;";
      document.querySelector("#kk"+i+" h3").style="color:white;";
    }
    document.querySelector("#kk"+id).style="background-color:white;";
    document.querySelector("#kk"+id+" h3").style="color:black;";
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

      <div className='landing uiuio'>
        <div className='Header'>
          <div className='ro'>
            <p>{information.ProjectName}</p>
          </div>
          <div className='lo'>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/Learn'}>Learn</Link>
            <Link to={'/Practice'}>Practice</Link>
            <Link to={'/Info'}>Info</Link>
            <button onClick={LogOut} className='LogoutBut' style={{backgroundColor:"lightgrey",color:"red",cursor:"pointer"}}>Logout</button>
          </div>
        </div>
        <div className='Foot'>
          <p>Developed By <button className='TEbut' onClick={opnTE}>Team Exotic</button></p>
        </div>
      </div>

    <div className="containerVid">

    <div className="main-video-container">
      <iframe className='VidPlay' id="VVd"
      allowFullScreen={true}
    src={Learn[0].Link}
    title={Learn[0].Title}>
      </iframe>
      <h3 className="main-vid-title">{Learn[0].Title}</h3>
    </div>

    <div className="video-list-container">

    {Learn.map((data,id) => (
              <button className="list active iui" id={"kk"+id} onClick={()=>HandleVideo(data.Title,data.Link,id)}>
                <h3 className="list-title" >{data.Title}</h3>
              </button>
            ))}

    </div>

    </div>
    
    <div className='loading'>
         <ReactLoading type="bubbles" color="#0000FF"
                height={100} width={100} />
                <p>Loading Please Wait...</p>
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

export default Video