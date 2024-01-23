import '../style/Practice.css';
import "../style/WebPractice.css";
import React, { useState,useEffect } from 'react';


function WebTest(logInfo) {

    let QData={
        "id": [
          "001",
          "002",
          "003",
          "004"
        ],
        "title": [
          "About Sun",
          "About Air",
          "About You",
          "Economy"
        ],
        "question": [
          [
            "What is shape of sun ?",
            "what is color of sun ?",
            "where is sun ?"
          ],
          [
            "Q1",
            "Q2",
            "Q3"
          ],
          [
            "Q1",
            "Q2",
            "Q3"
          ],
          [
            "What Is Price Of Puffs ?",
            "What Is Price Of Cone IceCream ?",
            "Do You Like India ?"
          ]
        ],
        "options": [
          [
            [
              "Square",
              "Reactangle",
              "Triangle",
              "Sphere"
            ],
            [
              "Blue",
              "Red"
            ],
            [
              "Solar System",
              "Chennai",
              "america",
              "Madurai"
            ]
          ],
          [
            [
              "O1",
              "O2",
              "O3"
            ],
            [
              "O1",
              "O2",
              "O3"
            ],
            [
              "O1",
              "O2",
              "O3"
            ]
          ],
          [
            [
              "O1",
              "O2",
              "O3"
            ],
            [
              "O1",
              "O2",
              "O3"
            ],
            [
              "O1",
              "O2",
              "O3"
            ]
          ],
          [
            [
              "Rs15",
              "Rs20",
              "Rs10",
              "Free"
            ],
            [
              "Rs20",
              "Rs35",
              "Rs30",
              "Free"
            ],
            [
              "Yes",
              "No"
            ]
          ]
        ],
        "answer": [
          [
            "Sphere",
            "Red",
            "Solar System"
          ],
          [
            "O1",
            "O2",
            "O3"
          ],
          [
            "O1",
            "O2",
            "O3"
          ],
          [
            "Rs15",
            "Rs35",
            "Yes"
          ]
        ],
        "Date": [
          "08/06/2024",
          "01/01/2024",
          "26/12/2024",
          "01/01/2024"
        ],
        "Author": [
          "Luffy",
          "Luna",
          "Zoro",
          "Williamson"
        ]
      };

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

  let details=QData.title;

  function rept(n){
    var reg=logInfo.logInfo[0]
    var id=QData.title.indexOf(n)
    var rlt=true;
    for(var i=0;i<Marks.length;i++){
      if(Marks[i][0]==reg && Marks[i][1]==id){
        rlt=false;
      }
    }
    console.log(id)
    return rlt
  }

  function opnMore(){
    document.querySelector(".MoreWeb2").style="display:flex;";
    document.querySelector(".bn").style="display:none;";
  }

  const Latest=QData.title.slice(-3);
  const LateDate=QData.Date.slice(-3);
  
  const [TId, setTId] = useState(0);

  function chgTest(x){
    //document.querySelector("Temp").test="{x}";
    if(rept(x)){
    setTId(QData.title.indexOf(x));
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
                      <a onClick={()=>chgTest(Latest[2])} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {Latest[2]||"No Data Found !"}
                        </div>

                        <div className="ag-courses-item_date-box">
                          Start:
                          <span className="ag-courses-item_date">
                            {LateDate[2]||"No Data Found !"}
                          </span>
                        </div>
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a onClick={()=>chgTest(Latest[1])} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {Latest[1]||"No Data Found !"}
                        </div>

                        <div className="ag-courses-item_date-box">
                          Start:
                          <span className="ag-courses-item_date">
                          {LateDate[1]||"No Data Found !"}
                          </span>
                        </div>
                      </a>
                    </div>

                    <div className="ag-courses_item">
                      <a onClick={()=>chgTest(Latest[0])} className="ag-courses-item_link">
                        <div className="ag-courses-item_bg"></div>

                        <div className="ag-courses-item_title">
                          {Latest[0]||"No Data Found !"}
                        </div>

                        <div className="ag-courses-item_date-box">
                          Start:
                          <span className="ag-courses-item_date">
                          {LateDate[0]||"No Data Found !"}
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
            {details.map((data,id) => (
              <a onClick={()=>chgTest(QData.title[id])}>
              <li className="table-row">
                <div className="col col-1" >{QData.id[id]}</div>
                <div className="col col-2" >{data}</div>
                <div className="col col-3" >{QData.Date[id]}</div>
                <div className="col col-4" >{QData.Author[id]}</div>
              </li>
              </a>
            ))}
          </ul>
        </div>
        </div>
        <div className='testMod'>
          {/* <Temp TId={TId} logInfo={logInfo.logInfo} className='TTT'/> */}
        </div>
        <div className='no'>
          <p>You Already Completed</p>
        </div>
        
    </>
  )
}

export default WebTest