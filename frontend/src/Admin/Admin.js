import { Link } from 'react-router-dom';
import { BarChart } from '@mui/x-charts/BarChart';
import "./Admin.css";
import { useState,useEffect } from 'react';
import LearnTable from "./LearnTable";


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

    let ReqDataL=[{"Name":"None","RegNo":"404","Department":"CSBS","Password":"None"}];
    const [Log, setLog] = useState(ReqDataL);
  
    useEffect(() => {
      const apiUrl = 'http://localhost:9999/api/log';
    
      fetch(apiUrl)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
        .then(resultData => {
          setLog(resultData);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
  
    console.log(Log);

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
    let CD=[];
    let dep=["CSBS","CSE","ECE","EEE","AIDS","IT","CIVIL","MECH"]
    for(const d of dep){
      let nowT=0;
      for(const m of mark){
        let nowR=m.RegNo;
        for(const l of Log){
          if(nowR===l.RegNo){
            if(d===l.Department){
              nowT=nowT+m.MarkGet
            }
          }
        }
      }
      Cd.push(nowT)
    }
    console.log(Cd);
    let Max=Cd[0];
    for(const c of Cd){
      if(c>Max){
        Max=c
      }
    }
    for(const e of Cd){
      CD.push((e/Max)*100)
    }
    chartData=CD;
  }

  bstf();
  wstf();
  cdf();

  const opnANA=()=>{
    document.querySelector(".ANALYSIS").style="display:flex;";
    document.querySelector(".LEARN").style="display:none;";
    document.querySelector(".PRACTICE").style="display:none;";
    document.querySelector(".STUDENT").style="display:none;";
  }
  const opnLEA=()=>{
    document.querySelector(".ANALYSIS").style="display:none;";
    document.querySelector(".LEARN").style="display:flex;";
    document.querySelector(".PRACTICE").style="display:none;";
    document.querySelector(".STUDENT").style="display:none;";
  }
  const opnPRA=()=>{
    document.querySelector(".ANALYSIS").style="display:none;";
    document.querySelector(".LEARN").style="display:none";
    document.querySelector(".PRACTICE").style="display:flex;";
    document.querySelector(".STUDENT").style="display:none;";
  }
  const opnSTU=()=>{
    document.querySelector(".ANALYSIS").style="display:none;";
    document.querySelector(".LEARN").style="display:none;";
    document.querySelector(".PRACTICE").style="display:none;";
    document.querySelector(".STUDENT").style="display:flex;";
  }
  
  return (
    <>
      <div className='landing'>
        <div className='Header'>
          <div className='ro'>
            <p>ADMIN</p>
          </div>
          <div className='lo ki'>
            <button onClick={opnANA}>Analysis</button>
            <button onClick={opnLEA}>Learn</button>
            <button onClick={opnPRA}>Practice</button>
            <button onClick={opnSTU}>Student</button>
          </div>
        </div>

        <div className='ANALYSIS'>
          <div className='Analysis1'>
            <BarChart
              xAxis={[
                {
                  id: 'barCategories',
                  data: ["CSBS","CSE","ECE","EEE","AIDS","IT","CIVIL","MECH"],
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
        <div className='LEARN'>
          <div>
            <button>Create</button>
            <button>Edit</button>
            <button>Delete</button>
          </div>
          <LearnTable/>
        </div>
        <div className='PRACTICE'>

        </div>
        <div className='STUDENT'>

        </div>

        <div className='Foot'>
          <p>This Website Was Created By <Link>Team Exotic</Link></p>
        </div>

      </div>
    </>
  )
}

export default Home