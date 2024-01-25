import { Link } from 'react-router-dom';
import { BarChart } from '@mui/x-charts/BarChart';
import "./Admin.css";
import { useState,useEffect } from 'react';


function Home() {

     // API Fetch

     let ReqDataQ=[{
      "Id": "001",
      "Title": "About India",
      "Question": [
          "Capital Of India ?",
          "National Bird Of India ?",
          "Is India Is Country ?"
      ],
      "Options": [
          [
              "TamilNadu",
              "Delhi",
              "Mumbai",
              "Chennai"
          ],
          [
              "Crow",
              "Peacock",
              "Tiger",
              "None"
          ],
          [
              "Yes",
              "No"
          ]
      ],
      "Answer": [
          "Delhi",
          "Peacock",
          "Yes"
      ],
      "Author": "Luna",
      "createdAt": "2024-01-23T09:35:58.796Z",
      "updatedAt": "2024-01-23T09:35:58.796Z",
  }];
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
   
     console.log(QD);

   // API Fetch

   let ReqData=[{"RegNo":"404","TestId":"None","MarkGet":0}];
   const [mark, setmark] = useState(ReqData);
 
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
         setmark(resultData);
       })
       .catch(error => {
         console.error('Error fetching data:', error);
       });
   }, []);
 
   console.log(mark);

  let bst=[{"Regno":"404","Mark":0,"TestId":"You"}];
  let wst=[{"Regno":"404","Mark":0,"TestId":"You"}];
  let chartData=[100,100,100,100,100,100,100,100];

  function bstf() {
    const Max = [];
    for (const qd of QD) {
      const NowId = qd.Id;
      const NowC = mark.filter((m) => m.TestId === NowId || m.TestId === 'None');
      
      if (NowC.length > 0) {
        const NowMax = NowC.reduce((max, curr) => (curr.MarkGet > max.MarkGet ? curr : max));
        Max.push(NowMax);
      } else {
        console.warn(`No matching data found for TestId: ${NowId}`);
      }
    }
    bst = Max;
  }
  function wstf() {
    const Max = [];
    for (const qd of QD) {
      const NowId = qd.Id;
      const NowC = mark.filter((m) => m.TestId === NowId || m.TestId === 'None');
      
      if (NowC.length > 0) {
        const NowMax = NowC.reduce((max, curr) => (curr.MarkGet < max.MarkGet ? curr : max));
        Max.push(NowMax);
      } else {
        console.warn(`No matching data found for TestId: ${NowId}`);
      }
    }
    wst = Max;
  }

  function cdf(){
    const Cd=[];
    let dep=["CSBS","CSE","ECE","EEE","AIDS","IT","CIVIL","MECH"]
  }

  bstf();
  wstf();
  
  return (
    <>
      <div className='landing'>
        <div className='Header'>
          <div className='ro'>
            <p>ADMIN</p>
          </div>
          <div className='lo'>
            <Link to={'/Home'}>Home</Link>
            <Link to={'/Learn'}>Analysis</Link>
            <Link to={'/Practice'}>Learn</Link>
            <Link to={'/Info'}>Practice</Link>
          </div>
        </div>

        <div className='Body'>
          <div className='Analysis1'>
            <BarChart
              xAxis={[
                {
                  id: 'barCategories',
                  data: ['CSBS', 'CSE', 'AIDS',"ECE",'Mech','IT',"EEE","Civil"],
                  scaleType: 'band',
                  label:"Department",
                },
              ]}
              yAxis={[
                {
                  id: 'barCategories',
                  label:"Overall Performance",
                },
              ]}
              series={[
                {
                  data: chartData,
                  
                },
              ]}
              width={640}
              height={450}
            />
          </div>
          <div className='Analysis2'>
            <div className='bstbox'>
              <p className='bsttitle'>Best Performing Student</p>
              <ul>
                <li className='topbst'>
                  <p  className='marktop'>Test Title</p>
                  <p className='regtop'>Register Number</p>
                  <p>Mark</p>
                </li>
                {bst.map((data) => (
                  <li className='bsttab'>
                    <p>{data.TestId}</p>
                    <p>{data.RegNo}</p>
                    <p>{data.MarkGet}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className='bstbox'>
              <p className='bsttitle'>Student Need To Impove</p>
              <ul>
                <li className='topbst'>
                  <p  className='marktop'>Test Title</p>
                  <p className='regtop'>Register Number</p>
                  <p>Mark</p>
                </li>
                {wst.map((data) => (
                  <li className='bsttab'>
                    <p>{data.TestId}</p>
                    <p>{data.RegNo}</p>
                    <p>{data.MarkGet}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
        <div className='Foot'>
          <p>This Website Was Created By <Link>Team Exotic</Link></p>
        </div>

      </div>
    </>
  )
}

export default Home