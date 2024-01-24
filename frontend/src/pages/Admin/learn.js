
import React, { useState,useEffect } from 'react';
import "./admin.css";




function LEARN() {

  // API Fetch

  let ReqData=[{"Title":"None","_id":"404","updatedAt":"404T04","Link":"None"}];
  const [learn, setlearn] = useState(ReqData);

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
        setlearn(resultData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(learn);

    // API POST

  const handlePostRequest = async (IO) => {
   
    try {
      
      const response = await fetch('http://localhost:9999/api/learn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
        body: JSON.stringify(IO),
      });
 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
 
      const responseData = await response.json();
      // Handle the response data as needed
      console.log('Response data:', responseData);
    } catch (error) {
      console.error('Error during POST request:', error);
    }
  };

    function CreateModule(){
      let TitleQ=document.querySelector(".Titmod").value;
      let AuthorQ=document.querySelector(".AuMod").value;
      let xData={"Title":TitleQ,"Link":AuthorQ}
      console.log(xData);
      handlePostRequest(xData);
      document.querySelector(".Titmod").value="";
      document.querySelector(".AuMod").value="";
      cloCM();
    }

    function DeleteModule(){
        cloCM();
        document.querySelector(".delid").value="";
    }

    function opnCreate(){
      document.querySelector(".CreateMenu").style="display:flex;";
      document.querySelector(".close").style="display:flex;";
    }
    function opnDelete(){
      document.querySelector(".DeleteTestMod").style="display:flex;";
      document.querySelector(".close").style="display:flex;";
    }
    function cloCM(){
      document.querySelector(".CreateMenu").style="display:none;";
      document.querySelector(".DeleteTestMod").style="display:none";
      document.querySelector(".close").style="display:none;";
    }

    
    return (
    <>
        <div className='pppo'>
          <div className='oppp'>
            <div className='buut'>
            <a className='CreateTest' onClick={opnCreate}>Create</a>
            <a className='DeleteTest' onClick={opnDelete}>Delete</a>
            </div>
          <div className="containerMore cmr"> 
          <ul className="responsive-table rtt">
            <li className="table-header thr">
              <div className="col col-1">Id</div>
              <div className="col col-2">Date</div>
              <div className="col col-3">Module Name</div>
            </li>
            {learn.map((data,id) => (
              <a>
              <li className="table-row">
                <div className="col col-1" >{data._id}</div>
                <div className="col col-2" >{data.updatedAt.split("T")[0]}</div>
                <div className="col col-3" >{data.Title}</div>
              </li>
              </a>
            ))}
          </ul>
        </div>
        </div>
        </div>
        <a className='close' onClick={cloCM}>

        </a>
        <div className='CreateMenu'>
          <div className='CMenu'>
          <p className='tuoo'>Module Name : <input placeholder='Module Name' className='Titmod'></input></p>
          <p>Link : <input placeholder='Link' className='AuMod'></input></p>
          </div>
          
          <div className='TestBut'>
            <button className='ButAdTest' onClick={CreateModule}>Submit</button>
            <button className='ButAdTest' onClick={cloCM}>Cancel</button>
          </div>
        </div>
        <div className='DeleteTestMod'>
          <h3>Delete Test</h3>
          <div>
            <p>Enter Test Id : <input type='number' placeholder='000' className='delid'></input></p>
          </div>
          <button onClick={DeleteModule}>Delete</button>
        </div>
    </>
  )
}

export default LEARN;