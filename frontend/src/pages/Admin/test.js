
import React, { useState,useEffect } from 'react';
import "./admin.css";




function TEST() {

  // API Fetch

  let ReqData=[{"Title":"None","_id":"404","updatedAt":"404T04","Author":"None"}];
  const [QD, setQD] = useState(ReqData);

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
        setQD(resultData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(QD);

    // API POST

  const handlePostRequest = async (IO) => {
   
    try {
      
      const response = await fetch('http://localhost:9999/api/web', {
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

  let details=[];
    const [n,setn]=useState(0);

    for(let i=0;i<QD.length;i++){
      var x=[QD[i].Title,QD[i].updatedAt,QD[i].Author]
      details.push(x);
    }

    function CreateModule(){
      
      let Question=[];
      let Options=[];
      let Answer=[];
      for(let i=0;i<n;i++){
        let r=document.querySelector("#Question"+i).value;
        Question.push(r);
        let s=document.querySelector("#Option"+i).value;
        let l=s.split("$");
        Options.push(l);
        let h=document.querySelector("#Answer"+i).value;
        Answer.push(h);
      }
      let TitleQ=document.querySelector(".Titmod").value;
      let AuthorQ=document.querySelector(".AuMod").value;
      let IdQ=document.querySelector(".IdMod").value;
      let xData={"Id":IdQ,"Title":TitleQ,"Question":Question,"Options":Options,"Answer":Answer,"Author":AuthorQ}
      console.log(xData);
      handlePostRequest(xData);
 
      document.querySelector(".Titmod").value="";
      document.querySelector(".DatMod").value="";
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
    function generator(){
      let no=document.querySelector(".n").value;
      setn(no);
      console.log(no);
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
              <div className="col col-4">Author</div>
            </li>
            {QD.map((data,id) => (
              <a>
              <li className="table-row">
                <div className="col col-1" >{data._id}</div>
                <div className="col col-2" >{data.updatedAt.split("T")[0]}</div>
                <div className="col col-3" >{data.Title}</div>
                <div className="col col-4" >{data.Author}</div>
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
          <p>Author Name : <input placeholder='Author Name' className='AuMod'></input></p>
          <p>Test ID : <input placeholder='Test ID' className='IdMod'></input></p>
          <p>Enter Number Of Questions : <input placeholder='Number Of Questions' className='n'></input></p>
          
          <button onClick={generator}>Generate</button>
          </div>
            {Array.from({ length: n }, (_, i) => (
              <div className='mods'>
                <input placeholder={"Question "+(i+1)} id={"Question"+i}></input>
                <input placeholder='Options' id={"Option"+i}></input>
                <input placeholder='Answer' id={"Answer"+i}></input>
              </div>
              ))}
          
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

export default TEST;