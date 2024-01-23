import '../style/Practice.css';
import "../style/WebPractice.css";
import React, { useState,useEffect } from 'react';
import PracticeModule from './PracticeModule';
import { useGlobal } from '../components/GlobalContext';


function WebPractice() {

  let logInfo;
  const { globalVariable, setGlobalVariable } = useGlobal();
   let io=globalVariable;
   logInfo=io.split("$");

      let Marks=[
        [
          "953622244024",
          "001",
          3
        ],
        [
          "953622244024",
          "001",
          3
        ],
        [
          "404",
          "001",
          3
        ],
        [
          "404",
          "006",
          3
        ],
        [
          "404",
          "004",
          3
        ],
        [],
        [
          "404",
          "003",
          3
        ],
        [
          "404",
          "003",
          3
        ],
        [
          "404",
          "003",
          3
        ]
      ];


  // API Fetch

  let ReqData=[{"Id":"404","Title":"No Data","Question":["No Data"],"Options":[["none"]],"Answer":["none"],"Author":"None","updatedAt":"404T565"},{"Id":"404","Title":"No Data","Question":["No Data"],"Options":[["none"]],"Answer":["none"],"Author":"None","updatedAt":"404T565"},{"Id":"404","Title":"No Data","Question":["No Data"],"Options":[["none"]],"Answer":["none"],"Author":"None","updatedAt":"404T565"}]

  const [WebData, setWebData] = useState(ReqData);

  useEffect(() => {
    const apiUrl = 'http://localhost:9999/api/web';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(resultData => {
        setWebData(resultData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(WebData);


  function rept(n){
    var reg=logInfo[0]
    var id=n.Id;
    var rlt=true;
    for(var i=0;i<Marks.length;i++){
      if(Marks[i][0]==reg && Marks[i][1]==id){
        rlt=true;// fttfttfft
      }
    }
    console.log(id)
    return rlt
  }

  function opnMore(){
    document.querySelector(".MoreWeb2").style="display:flex;";
    document.querySelector(".bn").style="display:none;";
  }

  const LatestData=WebData.slice(-3);
  
  const [TId, setTId] = useState({"Id":"404","Title":"No Data","Question":["No Data"],"Options":[["none","none"]],"Answer":["none"],"Author":"None","updatedAt":"404T565"});

  function chgTest(x){
    //document.querySelector("Temp").test="{x}";
    if(rept(x)){
    setTId(x);
    document.querySelector(".bn").style="display:none;";
    document.querySelector(".MoreWeb2").style="display:none;";
    document.querySelector(".testMod").style="display:flex;";}
    else{
      document.querySelector(".bn").style="display:none;";
      document.querySelector(".MoreWeb2").style="display:none;";
      document.querySelector(".no").style="display:flex;";
    }
  }
    return (
    <>
        <div className='HeaderWeb'>
            <div className='loWeb'>
               <a>Practice On Web Modules</a>
            </div>
         </div>
        <div className='tt bn'>
            <div className='tttt'>
                <div className="ag-format-container">
                  <div className="ag-courses_box">
                    <div className="ag-courses_item">
                      <a onClick={()=>chgTest(LatestData[2])} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {LatestData[2].Title||"No Data Found !"}
                        </div>

                        <div className="ag-courses-item_date-box">
                          Start:
                          <span className="ag-courses-item_date">
                            {LatestData[2].updatedAt.split("T")[0]||"No Data Found !"}
                          </span>
                        </div>
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a onClick={()=>chgTest(LatestData[1])} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {LatestData[1].Title||"No Data Found !"}
                        </div>

                        <div className="ag-courses-item_date-box">
                          Start:
                          <span className="ag-courses-item_date">
                          {LatestData[1].updatedAt.split("T")[0]||"No Data Found !"}
                          </span>
                        </div>
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a onClick={()=>chgTest(LatestData[0])} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {LatestData[0].Title||"No Data Found !"}
                        </div>

                        <div className="ag-courses-item_date-box">
                          Start:
                          <span className="ag-courses-item_date">
                          {LatestData[0].updatedAt.split("T")[0]||"No Data Found !"}
                          </span>
                        </div>
                      </a>
                    </div>

                  </div>
                </div>

                <button className='butWeb' onClick={opnMore}>More</button>
            </div>
        </div>
        <div className='MoreWeb MoreWeb2'>
        <div className="containerMore">
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1">ID</div>
              <div className="col col-2">Title</div>
              <div className="col col-3">Date</div>
              <div className="col col-4">Author</div>
            </li>
            {WebData.map((data) => (
              <a onClick={()=>chgTest(data.Title)}>
              <li className="table-row">
                <div className="col col-1" >{data.Id}</div>
                <div className="col col-2" >{data.Title}</div>
                <div className="col col-3" >{data.updatedAt.split("T")[0]}</div>
                <div className="col col-4" >{data.Author}</div>
              </li>
              </a>
            ))}
          </ul>
        </div>
        </div>
        <div className='testMod'>
          <PracticeModule TId={TId} logInfo={logInfo.logInfo} className='TTT'/>
        </div>
        <div className='no'>
          <p>You Already Completed</p>
        </div>
        
    </>
  )
}

export default WebPractice