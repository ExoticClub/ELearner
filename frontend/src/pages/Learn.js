import '../style/Learn.css';


function Video() {

    let VData={
        "Title": [
          "Ding",
          "Naga"
        ],
        "Link": [
          "https://www.youtube.com/embed/C_nLt9l74ZY?si=Drt-SxASD73It5jY",
          "https://www.youtube.com/embed/C_nLt9l74ZY?si=Drt-SxASD73It5jY"
        ],
        "Id": [
          "002",
          "004"
        ]
      };

  let VidD=VData.Title;


  function HandleVideo(Tit,li,id){
    document.querySelector("#VVd").src=li+"?autoplay=1&mute=0";
    document.querySelector(".main-vid-title").innerHTML=Tit;
    
    for(let i=0;i<VidD.length;i++){
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
            <a href='/Home'>Home</a>
            <a href='/Learn'>Learn</a>
            <a href='/Practice'>Practice</a>
            <a href='/Info'>Info</a>
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
    src={"https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=0"}>
      </iframe>
      <h3 className="main-vid-title">Opne</h3>
    </div>

    <div className="video-list-container">

    {VidD.map((data,id) => (
              <a className="list active" id={"kk"+id} onClick={()=>HandleVideo(data,VData.Link[id],id)}>
                <h3 className="list-title" >{data}</h3>
              </a>
            ))}

    </div>

    </div>
    


  </>
  )
}

export default Video