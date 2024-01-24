import React, { useState,useEffect } from 'react';
import "../style/WebPractice.css";
import "../style/Practice.css";
import { Link } from 'react-router-dom';

function FormPractice(){

  // API FETCH 

  const [FormData, setFormData] = useState([{"Title":"No Data Found","Link":"/404","Id":404,"updatedAt":"404T500"},{"Title":"No Data Found","Link":"/404","Id":404,"updatedAt":"404T500"},{"Title":"No Data Found","Link":"/404","Id":404,"updatedAt":"404T500"}]);

  useEffect(() => {
    const apiUrl = 'http://localhost:9999/api/forms';
  
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
  }, []);

  console.log(FormData);

  function opnMore(){
    document.querySelector(".MoreWeb1").style="display:flex;";
    document.querySelector(".backer").style="display:flex;";
    document.querySelector(".bh").style="display:none;";
  }

  const Latest=FormData.slice(-3);
  console.log(Latest);

    

  return (
    
    <>
      <div className='HeaderWeb'>
            <div className='loWeb'>
               <a>Practice On Google Form</a>
            </div>
         </div>
        <div className='tt bh'>
            <div className='tttt'>
                <div className="ag-format-container">
                  <div className="ag-courses_box">
                    <div className="ag-courses_item">
                      <Link to={Latest[2].Link||"/404"} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {Latest[2].Title||"No Data Found"}
                        </div>

                        <div className="ag-courses-item_date-box">
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

                        <div className="ag-courses-item_title">
                          {Latest[1].Title||"No Data Found"}
                        </div>

                        <div className="ag-courses-item_date-box">
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

                        <div className="ag-courses-item_title">
                          {Latest[0].Title||"No Data Found"}
                        </div>

                        <div className="ag-courses-item_date-box">
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
              <div className="col col-1">ID</div>
              <div className="col col-2">Title</div>
              <div className="col col-3">Date</div>
            </li>
            {FormData.map((data,id) => (
              <Link to={data.Link}>
              <li className="table-row">
                <div className="col col-1" >{data.Id}</div>
                <div className="col col-2" >{data.Title}</div>
                <div className="col col-3" >{data.updatedAt.split("T")[0]}</div>
              </li>
              </Link>
            ))}
          </ul>
        </div>
        </div>
        <div>
        <Link to={"/practice/"} className='backer'>{"X Close"}</Link>
        </div>
      
    </>
  )
}

export default FormPractice