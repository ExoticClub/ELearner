import { Link } from 'react-router-dom';
import { BarChart } from '@mui/x-charts/BarChart';
import "./Admin.css";
import { useState,useEffect } from 'react';
import LearnTable from "./LearnTable";


function Home() {

  // - - - - --- ---- -- QD - -- --- - - -- - - -

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


  //- -- -- -- -- -- -- -- - -- LOG  - -- - - - - -- - - - -

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

// - - - -- -- - - -- - - ---- MARK  -- - - - - - -- -- - -- 

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

  //  - -- -  - - -- -- - LEARN  - - - - - - -- -  - - -  

  // API Fetch

  let ReqDataLe=[{"RegNo":"404","TestId":"None","MarkGet":0}];
  const [learn, setlearn] = useState(ReqDataLe);

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

    const handlePostRequestLearn = async (IO) => {
   
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

    //- -- - - -- - - - --- - 

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
  
  const closeAll=()=>{
    document.querySelector(".CreateLearn").style="display:none;";
    document.querySelector(".EditLearn").style="display:none;";
    document.querySelector(".DeleteLearn").style="display:none;";
    document.querySelector(".ELP2").style="display:none;";
    document.querySelector(".ELP1").style="display:flex;";
    document.querySelector(".Gup").style="display:none;";
  }
  const checkLearnGet=()=>{
    let compid=document.querySelector("#compid").value;
    for(const le of learn){
      if(le._id==compid){
        document.querySelector(".ELP2").style="display:flex;";
        document.querySelector(".ELP1").style="display:none;";
        document.querySelector("#compTit").value=le.Title;
        document.querySelector("#compLi").value=le.Link;
      }
    }
  }
  const CreateLearner=()=>{
    const TitL=document.querySelector(".creTi").value;
    const Lin=document.querySelector(".creLi").value;
    handlePostRequestLearn({"Title":TitL,"Link":Lin});
    closeAll();
  }
  const CLopn=()=>{document.querySelector(".CreateLearn").style="display:flex;";
  document.querySelector(".Gup").style="display:flex;"}
  const ELopn=()=>{document.querySelector(".EditLearn").style="display:flex;";
  document.querySelector(".Gup").style="display:flex;"}
  const DLopn=()=>{document.querySelector(".DeleteLearn").style="display:flex;";
  document.querySelector(".Gup").style="display:flex;"}
  
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
          <div className='ButStack'>
            <button onClick={CLopn}>Create</button>
            <button onClick={ELopn}>Edit</button>
            <button onClick={DLopn}>Delete</button>
          </div>
          <LearnTable/>
          <div className='CreateLearn'>
            <p>*Ensure That The Link Get From Embeded Code.</p>
            <input type='text' placeholder='Title' className='creTi'></input>
            <input type='text' placeholder='Link' className='creLi'></input>
            <div className='ButStack'>
              <button onClick={CreateLearner}>Create</button>
              <button onClick={closeAll}>Cancel</button>
            </div>
          </div>
          <div className='EditLearn'>
            <div className='ELP1'>
              <p>* Ensure That The ID Listed In The Tabel.</p>
              <input type='text' placeholder='Enter ID Of Component' id='compid'></input>
              <div className='ButStack'>
                <button onClick={checkLearnGet}>Get</button>
                <button onClick={closeAll}>Cancel</button>
              </div>
            </div>
            <div className='ELP2'>
              <p>Edit Data</p>
              <input type='text' id="compTit"></input>
              <input type='text' id="compLi"></input>
              <div className='ButStack'>
                <button>Edit</button>
                <button onClick={closeAll}>Cancel</button>
              </div>
            </div>
          </div>
          <div className='DeleteLearn'>
            <div className='DL'>
              <p>* Ensure That The ID Listed In The Tabel.</p>
              <input type='text' placeholder='Enter ID Of Component' id='compid'></input>
              <div className='ButStack'>
                <button onClick={checkLearnGet}>Delete</button>
                <button onClick={closeAll}>Cancel</button>
              </div>
            </div>
          </div>
          <a className='Gup' onClick={closeAll}>

          </a>
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