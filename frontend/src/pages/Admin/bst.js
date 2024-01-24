import React, { useState,useEffect } from 'react';
import './admin.css';

function BST() {

    // API Fetch

  let ReqData=[];
  const [Mark, setMark] = useState(ReqData);

  useEffect(() => {
    const apiUrl = 'http://localhost:9999/api/marks';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(resultData => {
        setMark(resultData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(Mark);

  // API Fetch

  let ReqDataQ=[{}];
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

  let Max=[];
  const Luna=async()=>{
    let TestId=[];
  

  for(let i=0;i<QD.length;i++){
    let now=await Mark[i];
    for(let j=0;j<TestId.length;j++){
      console.log("iiii",now.TestId)
      if(now.TestId != TestId[j]){
        TestId.push(now.TestId)
      }
    }
    
  }
  console.log(TestId)

  for(let i=0;i<TestId.length;i++){
    let nowId=[];
    for(let j=0;j<Mark.length;j++){
        if(TestId[i]==Mark[j].TestId){
            nowId.push(Mark[j]);
        }
    }
    let best=nowId[0];

    for(let j=1;j<nowId.length;j++){
        if(nowId[j].MarkGet>best.MarkGet){
            best=nowId[j];
        }
    }
    console.log("Best",best)

    Max.push(best);
  }
  }

  Luna();
  console.log(Max);


    return (
    <>
      <div className='bbt'>
        
          <div className='bstbox'>
          <p className='bsttitle'>Best Performing Student</p>
          <ul>
            <li className='topbst'>
              <p  className='marktop'>Test Title</p>
              <p className='regtop'>Register Number</p>
              <p>Mark</p>
            </li>
            {Max.map((data) => (
              <li className='bsttab'>
                <p>{data.RegNo}</p>
                <p>{data.TestId}</p>
                <p>{data.MarkGet}</p>
              </li>
            ))}
          </ul>
          </div>
      </div>
        
    </>
  )
}

export default BST;