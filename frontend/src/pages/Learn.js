import '../style/Learn.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Video() {

  // API Fetch

  let ReqData=[{"Title":"None","Link":"404"}];
  const [Learn, setLearn] = useState(ReqData);

  useEffect(() => {
    const apiUrl = 'http://localhost:9999/api/learn';
  
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
  }, []);

  console.log(Learn);



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
        <div className='Foot'>
          <p>This Website Was Created By <a>Team Exotic</a></p>
        </div>
      </div>

    <div className="containerVid">

    <div className="main-video-container">
      <iframe className='VidPlay' id="VVd"
      allowFullScreen={true}
    src={Learn[0].Link}>
      </iframe>
      <h3 className="main-vid-title">{Learn[0].Title}</h3>
    </div>

    <div className="video-list-container">

    {Learn.map((data,id) => (
              <a className="list active" id={"kk"+id} onClick={()=>HandleVideo(data.Title,data.Link,id)}>
                <h3 className="list-title" >{data.Title}</h3>
              </a>
            ))}

    </div>

    </div>
    


  </>
  )
}

export default Video