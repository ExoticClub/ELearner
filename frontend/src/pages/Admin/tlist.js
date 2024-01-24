import React, { useState,useEffect } from 'react';
import './admin.css';

function TLIST() {

    // API Fetch

  let ReqDataQ=[{"Title":"None"}];
  const [QD, setQD] = useState(ReqDataQ);

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

    return (
    <>
        <div className='lstbx'>
        <p className='listtitle'>Test Published</p>
        <ul>
          {QD.map((data) => (
            <li className='lsttab'>
              <p>{data.Title}</p>
            </li>
          ))}
        </ul>
            
        </div>
    </>
  )
}

export default TLIST;