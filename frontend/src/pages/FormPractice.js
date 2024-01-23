import React, { useState,useEffect } from 'react';
import "../style/WebPractice.css";
import "../style/Practice.css";

function FormPractice() {
    let FData={
        "Title": [
          "Test1",
          "Test2"
        ],
        "Link": [
          "https://www.youtube.com/embed/C_nLt9l74ZY?si=Drt-SxASD73It5jY",
          "https://www.youtube.com/embed/C_nLt9l74ZY?si=Drt-SxASD73It5jY"
        ],
        "Id": [
          "001",
          "002"
        ],
        "Date":[
            "08/03/2024",
            "02/01/2024"
        ]
      };
  let details=FData.Title;

  function opnMore(){
    document.querySelector(".MoreWeb1").style="display:flex;";
    document.querySelector(".bh").style="display:none;";
  }

  const Latest=FData.Title.slice(-3);
  const LateDate=FData.Date.slice(-3);
  const LateLink=FData.Link.slice(-3);

    

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
                      <a href={LateLink[2]||"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {Latest[2]||"No Data Found"}
                        </div>

                        <div className="ag-courses-item_date-box">
                          Start:
                          <span className="ag-courses-item_date">
                            {LateDate[2]||"No Data Found"}
                          </span>
                        </div>
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a href={LateLink[1]||"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {Latest[1]||"No Data Found"}
                        </div>

                        <div className="ag-courses-item_date-box">
                          Start:
                          <span className="ag-courses-item_date">
                          {LateDate[1]||"No Data Found"}
                          </span>
                        </div>
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a href={LateLink[0]||"https://www.youtube.com/watch?v=dQw4w9WgXcQ"} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {Latest[0]||"No Data Found"}
                        </div>

                        <div className="ag-courses-item_date-box">
                          Start:
                          <span className="ag-courses-item_date">
                          {LateDate[0]||"No Data Found"}
                          </span>
                        </div>
                      </a>
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
            {details.map((data,id) => (
              <a href={FData.Link[id]}>
              <li className="table-row">
                <div className="col col-1" >{FData.Id[id]}</div>
                <div className="col col-2" >{data}</div>
                <div className="col col-3" >{FData.Date[id]}</div>
              </li>
              </a>
            ))}
          </ul>
        </div>
        </div>
      
    </>
  )
}

export default FormPractice