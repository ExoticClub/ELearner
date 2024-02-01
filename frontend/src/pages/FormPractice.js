import React, { useState,useEffect } from 'react';
import "../style/WebPractice.css";
import "../style/Practice.css";
import { Link } from 'react-router-dom';
import information from "../infomation.json";
import study from "../assets/study.jpg";
import ReactLoading from "react-loading";
import Cookies from 'js-cookie';


function FormPractice(){

  const URL=information.API_URL;  
  // API FETCH 

  let logInfo;
   let io=Cookies.get("Log");
   logInfo=io.split("$");

  if(logInfo[0]==="404"){
    window.location.href = '/';
  }

  const [FormData, setFormData] = useState([{"Title":"No Data","Link":"/404","Id":404,"updatedAt":"404T500"},{"Title":"No Data Found","Link":"/404","Id":404,"updatedAt":"404T500"},{"Title":"No Data Found","Link":"/404","Id":404,"updatedAt":"404T500"}]);

  useEffect(()=>{
    if(FormData[0].Title=="No Data"){
      document.querySelector(".loading").style="display:flex;";
    }
    if(FormData[0].Title!="No Data"){
      document.querySelector(".loading").style="display:none;";
    }
  },[FormData])
  useEffect(() => {
    const apiUrl = URL+'/api/forms';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(resultData => {
        setFormData(resultData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [URL]);


  function opnMore(){
    document.querySelector(".MoreWeb1").style="display:flex;";
    document.querySelector(".backer").style="display:flex;";
    document.querySelector(".bh").style="display:none;";
    document.querySelector(".mixc").style="display:none;";
  }

  const Latest=FormData.slice(-3);

    

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
        <div className='tt bh'>
            <div className='tttt'>
                <div className="ag-format-container">
                  <div className="ag-courses_box">
                    <div className="ag-courses_item">
                      <Link to={Latest[2].Link||"/404"} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title opo jhy">
                          {Latest[2].Title||"No Data Found"}
                        </div>

                        <div className="ag-courses-item_date-box jhy">
                          Start:
                          <span className="ag-courses-item_date">
                            {Latest[2].updatedAt.split("T")[0]||"No Data Found"}
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="ag-courses_item">
                      <Link to={Latest[1].Link||"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title opo jhy">
                          {Latest[1].Title||"No Data Found"}
                        </div>

                        <div className="ag-courses-item_date-box jhy">
                          Start:
                          <span className="ag-courses-item_date">
                          {Latest[1].updatedAt.split("T")[0]||"No Data Found"}
                          </span>
                        </div>
                      </Link>
                    </div>

                    <div className="ag-courses_item">
                      <Link to={Latest[0].Link||"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title opo jhy">
                          {Latest[0].Title||"No Data Found"}
                        </div>

                        <div className="ag-courses-item_date-box jhy">
                          Start:
                          <span className="ag-courses-item_date">
                          {Latest[0].updatedAt.split("T")[0]||"No Data Found"}
                          </span>
                        </div>
                      </Link>
                    </div>

                  </div>
                </div>

                <button className='butWeb' onClick={opnMore}>More</button>
            </div>
        </div>
        <div className='MoreWeb MoreWeb1'>
        <div className="containerMore">
          <ul className="responsive-table">
            <li className="table-header">
              <div className="col col-1 trt">Title</div>
              <div className="col col-2 trt">Date</div>
            </li>
            {FormData.map((data,id) => (
              <Link to={data.Link}>
              <li className="table-row">
                <div className="col col-1 trt" >{data.Title}</div>
                <div className="col col-2 trt" >{data.updatedAt.split("T")[0]}</div>
              </li>
              </Link>
            ))}
          </ul>
        </div>
        </div>
        <div>
        <Link to={"/practice/"} className='backer'>{"X Close"}</Link>
        </div>
        <div className='mixc'>
         <img src={study}></img>
         <Link className='btx4' to={Latest[2].Link}>
            {Latest[2].Title||"Loading..."}
         </Link>
         <Link className='btx5' to={Latest[2].Link}>
            {Latest[1].Title||"Loading..."}
         </Link>
         <button className='btx6' onClick={opnMore}>More</button>
      </div>
      <div className='loading'>
         <ReactLoading type="bubbles" color="#0000FF"
                height={100} width={100} />
                <p>Loading Please Wait...</p>
      </div>
    </>
  )
}

export default FormPractice