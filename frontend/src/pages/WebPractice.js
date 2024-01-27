import '../style/Practice.css';
import "../style/WebPractice.css";
import React, { useState,useEffect } from 'react';
import PracticeModule from './PracticeModule';
import { useGlobal } from '../components/GlobalContext';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import information from "../infomation.json";


function WebPractice() {

  const URL = information.API_URL;

  let logInfo;
  const { globalVariable } = useGlobal();
   let io=globalVariable;
   logInfo=io.split("$");

  if(logInfo[0]==="404"){
    window.location.href = '/';
  }


  // API Fetch

  let ReqData=[{"Id":"404","Title":"No Data","Question":["No Data"],"Options":[["none"]],"Answer":["none"],"Author":"None","updatedAt":"404T565"},{"Id":"404","Title":"No Data","Question":["No Data"],"Options":[["none"]],"Answer":["none"],"Author":"None","updatedAt":"404T565"},{"Id":"404","Title":"No Data","Question":["No Data"],"Options":[["none"]],"Answer":["none"],"Author":"None","updatedAt":"404T565"}]

  const [WebData, setWebData] = useState(ReqData);

  useEffect(() => {
    const apiUrl = URL+'/api/web';
  
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

  // API Fetch

  let ReqDataM=[{"RegNo":"000","TestId":"000","MarkGet":0}];
  const [MarkData, setMarkData] = useState(ReqDataM);

  useEffect(() => {
    const apiUrl = URL+'/api/marks';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(resultMData => {
        setMarkData(resultMData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);



  function rept(n){
    var reg=logInfo[0]
    var id=n._id;
    var rlt=true;
    for(var i=0;i<MarkData.length;i++){
      if(MarkData[i].RegNo==reg && MarkData[i].TestId==id){
        rlt=false;
      }
    }
    return rlt
  }

  function opnMore(){
    document.querySelector(".MoreWeb2").style="display:flex;";
    document.querySelector(".backer").style="display:flex;";
    document.querySelector(".bn").style="display:none;";
  }

  const LatestData=WebData.slice(-3);

  const container = document.querySelector(".testMod");

  function chgTest(x){

    if(rept(x)){
      ReactDOM.render(<PracticeModule TId={WebData.indexOf(x)} logInfo={logInfo} className='TTT'/>, container);
      document.querySelector(".bn").style="display:none;";
      document.querySelector(".MoreWeb2").style="display:none;";
      document.querySelector(".testMod").style="display:flex;";
    }
    else{
      document.querySelector(".bn").style="display:none;";
      document.querySelector(".MoreWeb2").style="display:none;";
      document.querySelector(".no").style="display:flex;";
    }
  }
    return (
    <>
        <div className='HeaderTest'>
            <div className='Header hb'>
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
         </div>
        <div className='tt bn'>
            <div className='tttt'>
                <div className="ag-format-container">
                  <div className="ag-courses_box">
                    <div className="ag-courses_item">
                      <a onClick={()=>chgTest(LatestData[2])} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title opo jhy">
                          {LatestData[2].Title||"No Data Found !"}
                        </div>

                        <div className="ag-courses-item_date-box lio jhy">
                          Start:
                          <span className="ag-courses-item_date">
                            {LatestData[2].updatedAt.split("T")[0]||"No Data Found !"}
                          </span>
                        </div>
                        <div className="ag-courses-item_date-box jhy">
                          Author:
                          <span className="ag-courses-item_date">
                            {LatestData[2].Author||"No Data Found !"}
                          </span>
                        </div>
                      </a>
                    </div>

                    <div className="ag-courses_item ">
                      <a onClick={()=>chgTest(LatestData[1])} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title opo jhy">
                          {LatestData[1].Title||"No Data Found !"}
                        </div>

                        <div className="ag-courses-item_date-box lio jhy">
                          Start:
                          <span className="ag-courses-item_date">
                          {LatestData[1].updatedAt.split("T")[0]||"No Data Found !"}
                          </span>
                        </div>
                        <div className="ag-courses-item_date-box jhy">
                          Author:
                          <span className="ag-courses-item_date">
                            {LatestData[1].Author||"No Data Found !"}
                          </span>
                        </div>
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a onClick={()=>chgTest(LatestData[0])} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title opo jhy">
                          {LatestData[0].Title||"No Data Found !"}
                        </div>

                        <div className="ag-courses-item_date-box lio jhy">
                          Start:
                          <span className="ag-courses-item_date">
                          {LatestData[0].updatedAt.split("T")[0]||"No Data Found !"}
                          </span>
                        </div>
                        <div className="ag-courses-item_date-box jhy">
                          Author:
                          <span className="ag-courses-item_date">
                            {LatestData[0].Author||"No Data Found !"}
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
              <div className="col col-1 trt" >Title</div>
              <div className="col col-2 trt">Question</div>
              <div className="col col-3 trt">Date</div>
              <div className="col col-4 trt">Author</div>
            </li>
            {WebData.map((data) => (
              <a onClick={()=>chgTest(data)} className='bitu'>
              <li className="table-row">
                <div className="col col-1 trt" >{data.Title}</div>
                <div className="col col-1 trt" >{data.Question.length}</div>
                <div className="col col-3 trt" >{data.updatedAt.split("T")[0]}</div>
                <div className="col col-4 trt" >{data.Author}</div>
              </li>
              </a>
            ))}
          </ul>
        </div>
        </div>
        <div className='testMod'>
          
        </div>
        <div className='no'>
          <p>You Already Completed</p>
          <Link to={'/practice'} className='glow-button'>Go Back</Link>
        </div>

        <div>
          <p className='namer'>{logInfo[1]}</p>
        </div>
        <div>
          <Link to={"/practice/"} className='backer'>{"X Close"}</Link>
        </div>
        
    </>
  )
}

export default WebPractice