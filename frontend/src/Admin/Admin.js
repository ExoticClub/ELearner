import { Link } from 'react-router-dom';
import { BarChart } from '@mui/x-charts/BarChart';
import "./Admin.css";
import { useState,useEffect } from 'react';
import LearnTable from "./LearnTable";
import WebTable from "./WebTable";
import FormTable from "./FormTable";
import LogTable from "./LogTable";
import information from "../infomation.json";
import informations from "../infomation.json";
import Cookies from 'js-cookie';


function Home() {

  const Url=informations.API_URL;

  let logInfo;
   let io=Cookies.get("Log");
   if(!io){
    window.location.href = '/';
  }
   logInfo=io.split("$");

  if(logInfo[0]==="404"){
    window.location.href = '/';
  }

  if(!information.Admins.includes(logInfo[0])){
    window.location.href = '/';
  }

  // + + + + + + + ++ +  + +  ++ +  ++ CRED + ++ + + + ++ + ++ +  ++ + + + + ++

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
       const apiUrl = Url+'/api/web';
     
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

    const handlePostRequestQD = async (IO) => {
   
      try {
        
        const response = await fetch(Url+'/api/web', {
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
        alert("Created Sucessfully !");
      } catch (error) {
        console.error('Error during POST request:', error);
        alert(error)
      }
    };


     // API PATCH

    const handlePatchRequestQD = async (IO,id) => {
   
      try {
        
        const response = await fetch(Url+'/api/web/'+id, {
          method: 'PATCH',
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
        alert("Updated Sucessfully !");
      } catch (error) {
        console.error('Error during PATCH request:', error);
        alert(error)
      }
    };

    // API DELETE

    const handleDeleteRequestQD = async (id) => {
   
      try {
        
        const response = await fetch(Url+'/api/web/'+id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers if needed
          },
        });
   
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
   
        const responseData = await response.json();
        // Handle the response data as needed
        console.log('Response data:', responseData);
        alert(id+" Was Deleted")
      } catch (error) {
        console.error('Error during Delete request:', error);
        alert(error);
      }
    };



  //- -- -- -- -- -- -- -- - -- LOG  - -- - - - - -- - - - -

    // API Fetch

    let ReqDataL=[{"Name":"None","RegNo":"404","Department":"CSBS","Password":"None"}];
    const [Log, setLog] = useState(ReqDataL);
  
    useEffect(() => {
      const apiUrl = Url+'/api/log';
    
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

  // API POST

  const handlePostRequestLog = async (IO) => {
   
    try {
      
      const response = await fetch(Url+'/api/log', {
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
      alert("Created Sucessfully !");
    } catch (error) {
      console.error('Error during POST request:', error);
      alert(error)
    }
  };


   // API PATCH

  const handlePatchRequestLog = async (IO,id) => {
 
    try {
      
      const response = await fetch(Url+'/api/log/'+id, {
        method: 'PATCH',
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
      alert("Updated Sucessfully !");
    } catch (error) {
      console.error('Error during PATCH request:', error);
      alert(error)
    }
  };

  // API DELETE

  const handleDeleteRequestLog = async (id) => {
 
    try {
      
      const response = await fetch(Url+'/api/log/'+id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if needed
        },
      });
 
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
 
      const responseData = await response.json();
      // Handle the response data as needed
      console.log('Response data:', responseData);
      alert(id+" Was Deleted")
    } catch (error) {
      console.error('Error during Delete request:', error);
      alert(error);
    }
  };
// - - - - --- ---- -- FORM - -- --- - - -- - - -

     // API Fetch

     let ReqDataF=[{}];
     const [form, setform] = useState(ReqDataF);
   
     useEffect(() => {
       const apiUrl = Url+'/api/forms';
     
       fetch(apiUrl)
         .then(response => {
           if (!response.ok) {
             throw new Error(`HTTP error! Status: ${response.status}`);
           }
           return response.json();
         })
         .then(resultData => {
           setform(resultData);
         })
         .catch(error => {
           console.error('Error fetching data:', error);
         });
     }, []);
   
     console.log(form);

     // API POST

    const handlePostRequestForm = async (IO) => {
   
      try {
        
        const response = await fetch(Url+'/api/forms', {
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
        alert("Created Sucessfully !");
      } catch (error) {
        console.error('Error during POST request:', error);
        alert(error)
      }
    };


     // API PATCH

    const handlePatchRequestForm = async (IO,id) => {
   
      try {
        
        const response = await fetch(Url+'/api/forms/'+id, {
          method: 'PATCH',
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
        alert("Updated Sucessfully !");
      } catch (error) {
        console.error('Error during PATCH request:', error);
        alert(error)
      }
    };

    // API DELETE

    const handleDeleteRequestForm = async (id) => {
   
      try {
        
        const response = await fetch(Url+'/api/forms/'+id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers if needed
          },
        });
   
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
   
        const responseData = await response.json();
        // Handle the response data as needed
        console.log('Response data:', responseData);
        alert(id+" Was Deleted")
      } catch (error) {
        console.error('Error during Delete request:', error);
        alert(error);
      }
    };
// - - - -- -- - - -- - - ---- MARK  -- - - - - - -- -- - -- 

   // API Fetch

   let ReqData=[{"RegNo":"404","TestId":"None","MarkGet":0}];
   const [mark, setmark] = useState(ReqData);
 
   useEffect(() => {
     const apiUrl = Url+'/api/marks';
   
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
    const apiUrl = Url+'/api/learn';
  
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
        
        const response = await fetch(Url+'/api/learn', {
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
        alert("Created Sucessfully !");
      } catch (error) {
        console.error('Error during POST request:', error);
        alert(error)
      }
    };

    // API PATCH

    const handlePatchRequestLearn = async (IO,id) => {
   
      try {
        
        const response = await fetch(Url+'/api/learn/'+id, {
          method: 'PATCH',
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
        alert("Updated Sucessfully !");
      } catch (error) {
        console.error('Error during PATCH request:', error);
        alert(error)
      }
    };

    // API DELETE

    const handleDeleteRequestLearn = async (id) => {
   
      try {
        
        const response = await fetch(Url+'/api/learn/'+id, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers if needed
          },
        });
   
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
   
        const responseData = await response.json();
        // Handle the response data as needed
        console.log('Response data:', responseData);
        alert(id+" Was Deleted")
      } catch (error) {
        console.error('Error during Delete request:', error);
        alert(error);
      }
    };

    //- -- - - -- - - - --- - 

// + + + ++ + ++ + ++ + ++ + + ++ ++ + ++ + ++ + + + ++ ++ + + ++ + + ++ + + + + + + + + ++

  let bst=[{"Regno":"404","Mark":0,"TestId":"You"}];
  let wst=[{"Regno":"404","Mark":0,"TestId":"You"}];
  

  function bstf() {
    const Max = [];
    for (const qd of QD) {
      const NowId = qd._id;
      const NowC = mark.filter((m) => m.TestId === NowId || m.TestId === 'None');
      
      if (NowC.length > 0) {
        const NowMax = NowC.reduce((max, curr) => (curr.MarkGet > max.MarkGet ? curr : max));
        for(let q of QD){
          if(NowMax.TestId==q._id){
            NowMax.Test=q.Title;
          }
        }
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
      const NowId = qd._id;
      const NowC = mark.filter((m) => m.TestId === NowId || m.TestId === 'None');
      
      if (NowC.length > 0) {
        const NowMax = NowC.reduce((max, curr) => (curr.MarkGet < max.MarkGet ? curr : max));
        for(let q of QD){
          if(NowMax.TestId==q._id){
            NowMax.Test=q.Title;
          }
        }
        Max.push(NowMax);
      } else {
        console.warn(`No matching data found for TestId: ${NowId}`);
      }
    }
    wst = Max;
  }

  
    let chartData=[100,100,100,100,100,100,100,100];
    function cdf(){
      const dep=["CSBS","CSE","ECE","EEE","AIDS","IT","CIVIL","MECH"]
      let cvc=[];
      let Final=[];
      for(let d of dep){
        let Cr7;
        let tol=0;
        let tolM=0;
        let pet=0;
        for(let l of Log){
          if(d==l.Department){
            Cr7=l.RegNo.slice(0,-3)
            tol=tol+1;
          }
        }
        
        for(let m of mark){
          if(m.RegNo.slice(0,-3)==Cr7){
            tolM=tolM+m.MarkGet
          }
        }
        console.log(d,"=",tol)
        console.log(d,"=",tolM)
        if(tol!=0){
          pet=tolM/tol;
        }else{
          pet=0;
        }
        cvc.push(pet);
      }
      let Max=cvc[0]
      for(let c of cvc){
        if(Max<c){
          Max=c
        }
      }
      for(let c of cvc){
        Final.push((c/Max)*100);
      }
      
      chartData=Final
    }
    cdf();
  
  

  bstf();
  wstf();

  const opnANA=()=>{
    document.querySelector(".ANALYSIS").style="display:flex;";
    document.querySelector(".LEARN").style="display:none;";
    document.querySelector(".WEBPRACTICE").style="display:none;";
    document.querySelector(".FORMPRACTICE").style="display:none;";
    document.querySelector(".STUDENT").style="display:none;";
  }
  const opnLEA=()=>{
    document.querySelector(".ANALYSIS").style="display:none;";
    document.querySelector(".LEARN").style="display:flex;";
    document.querySelector(".WEBPRACTICE").style="display:none;";
    document.querySelector(".FORMPRACTICE").style="display:none;";
    document.querySelector(".STUDENT").style="display:none;";
  }
  const opnWEBPRA=()=>{
    document.querySelector(".ANALYSIS").style="display:none;";
    document.querySelector(".LEARN").style="display:none";
    document.querySelector(".WEBPRACTICE").style="display:flex;";
    document.querySelector(".FORMPRACTICE").style="display:none;";
    document.querySelector(".STUDENT").style="display:none;";
  }
  const opnFORMPRA=()=>{
    document.querySelector(".ANALYSIS").style="display:none;";
    document.querySelector(".LEARN").style="display:none";
    document.querySelector(".WEBPRACTICE").style="display:none;";
    document.querySelector(".FORMPRACTICE").style="display:flex;";
    document.querySelector(".STUDENT").style="display:none;";
  }
  const opnSTU=()=>{
    document.querySelector(".ANALYSIS").style="display:none;";
    document.querySelector(".LEARN").style="display:none;";
    document.querySelector(".WEBPRACTICE").style="display:none;";
    document.querySelector(".FORMPRACTICE").style="display:none;";
    document.querySelector(".STUDENT").style="display:flex;";
  }
  
 

  //= == = = == = == == LEARN = = = ==  = = = = = =

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
  const EditLearner=()=>{
    const TitL=document.querySelector("#compTit").value;
    const Lin=document.querySelector("#compLi").value;
    const id=document.querySelector("#compid").value;
    let data={"Title":TitL,"Link":Lin};
    handlePatchRequestLearn(data,id);
    closeAll();
  }
  const DeleteLearner=()=>{
    const id=document.querySelector("#Ldelid").value;
    handleDeleteRequestLearn(id);
    closeAll();
  }
  const CLopn=()=>{
    document.querySelector(".CreateLearn").style="display:flex;";
  document.querySelector(".Gup").style="display:flex;"
}
  const ELopn=()=>{
    document.querySelector(".EditLearn").style="display:flex;";
  document.querySelector(".Gup").style="display:flex;"
}
  const DLopn=()=>{
    document.querySelector(".DeleteLearn").style="display:flex;";
  document.querySelector(".Gup").style="display:flex;"
}

  // = == = == ==  == == = = ==  == = = == = = =  = == = == = = == = = = = = = ==

  //= == = = == = == == QD = = = ==  = = = = = =

  const closeAllQ=()=>{
    document.querySelector(".CreateLearnQ").style="display:none;";
    document.querySelector(".EditLearnQ").style="display:none;";
    document.querySelector(".DeleteLearnQ").style="display:none;";
    document.querySelector(".ELP2Q").style="display:none;";
    document.querySelector(".ELP1Q").style="display:flex;";
    document.querySelector(".GupQ").style="display:none;";
  }

  const checkQDGet=()=>{
    let compid=document.querySelector("#compidQ").value;
    for(const le of QD){
      if(le._id==compid){
        document.querySelector(".ELP2Q").style="display:flex;";
        document.querySelector(".ELP1Q").style="display:none;";
        document.querySelector("#compLiQ").value=JSON.stringify(le);
      }
    }
  }

  const [n,setn]=useState(0);

  const genV=()=>{
    setn(document.querySelector(".CreNu").value)
  }

  const componentsArray = Array.from({ length: n }, (v, i) => 
  <div>
    <p>Question {i+1}</p>
    <input type='text' placeholder='Enter Question' className={'Q'+i}></input>
    <input type='text' placeholder='Enter Options Sperated By $' className={'O'+i}></input>
    <input type='number' placeholder='Enter Answer Number' className={'A'+i}></input>
  </div>);

  const CreateQD=()=>{
    const TitL=document.querySelector(".creTiQ").value;
    const AuL=document.querySelector(".creAuQ").value;
    const QL=[];
    const OL=[];
    const AL=[];
    for(let i=0;i<n;i++){
      const xQ=document.querySelector(".Q"+i).value;
      const xO=document.querySelector(".O"+i).value.split("$");
      const xAy=document.querySelector(".A"+i).value;
      let xA;
      if(xO[xAy-1]){
        xA=xO[xAy-1]
        QL.push(xQ);
        OL.push(xO);
        AL.push(xA);
      }
    }
    let data={"Title":TitL,"Author":AuL,"Question":QL,"Answer":AL,"Options":OL}
    handlePostRequestQD(data);
    closeAllQ();
  }
  const EditQD=()=>{
    const Lin=document.querySelector("#compLiQ").value;
    const id=document.querySelector("#compidQ").value;
    let data=JSON.parse(Lin);
    handlePatchRequestQD(data,id);
    closeAllQ();
  }
  const DeleteQD=()=>{
    const id=document.querySelector("#LdelidQ").value;
    handleDeleteRequestQD(id);
    closeAllQ();
  }
  const CQopn=()=>{
    document.querySelector(".CreateLearnQ").style="display:flex;";
  document.querySelector(".GupQ").style="display:flex;"
}
  const EQopn=()=>{
    document.querySelector(".EditLearnQ").style="display:flex;";
  document.querySelector(".GupQ").style="display:flex;"
}
  const DQopn=()=>{
    document.querySelector(".DeleteLearnQ").style="display:flex;";
  document.querySelector(".GupQ").style="display:flex;"
}

  // = == = == ==  == == = = ==  == = = == = = =  = == = == = = == = = = = = = ==
  
  //= == = = == = == == Form = = = ==  = = = = = =

  const closeAllF=()=>{
    document.querySelector(".CreateLearnF").style="display:none;";
    document.querySelector(".EditLearnF").style="display:none;";
    document.querySelector(".DeleteLearnF").style="display:none;";
    document.querySelector(".ELP2F").style="display:none;";
    document.querySelector(".ELP1F").style="display:flex;";
    document.querySelector(".GupF").style="display:none;";
  }

  const checkFormGet=()=>{
    let compid=document.querySelector("#compidF").value;
    for(const le of form){
      if(le._id==compid){
        document.querySelector(".ELP2F").style="display:flex;";
        document.querySelector(".ELP1F").style="display:none;";
        document.querySelector("#compTitF").value=le.Title;
        document.querySelector("#compLiF").value=le.Link;
      }
    }
  }
  const CreateForm=()=>{
    const TitL=document.querySelector(".creTiF").value;
    const Lin=document.querySelector(".creLiF").value;
    handlePostRequestForm({"Title":TitL,"Link":Lin});
    closeAllF();
  }
  const EditForm=()=>{
    const TitL=document.querySelector("#compTitF").value;
    const Lin=document.querySelector("#compLiF").value;
    const id=document.querySelector("#compidF").value;
    let data={"Title":TitL,"Link":Lin};
    handlePatchRequestForm(data,id);
    closeAllF();
  }
  const DeleteForm=()=>{
    const id=document.querySelector("#LdelidF").value;
    handleDeleteRequestForm(id);
    closeAllF();
  }
  const CFopn=()=>{
    document.querySelector(".CreateLearnF").style="display:flex;";
  document.querySelector(".GupF").style="display:flex;"
}
  const EFopn=()=>{
    document.querySelector(".EditLearnF").style="display:flex;";
  document.querySelector(".GupF").style="display:flex;"
}
  const DFopn=()=>{
    document.querySelector(".DeleteLearnF").style="display:flex;";
  document.querySelector(".GupF").style="display:flex;"
}

  // = == = == ==  == == = = ==  == = = == = = =  = == = == = = == = = = = = = ==

   //= == = = == = == == LOG = = = ==  = = = = = =

   const closeAllLog=()=>{
    document.querySelector(".SearchLog").style="display:none;";
    document.querySelector(".EditLearnLo").style="display:none;";
    document.querySelector(".DeleteLearnLo").style="display:none;";
    document.querySelector(".ELP2Lo").style="display:none;";
    document.querySelector(".ELP1Lo").style="display:flex;";
    document.querySelector(".GupLo").style="display:none;";
  }

  const checkLogGet=()=>{
    let compid=document.querySelector("#compidLo").value;
    for(const le of Log){
      if(le._id==compid){
        document.querySelector(".ELP2Lo").style="display:flex;";
        document.querySelector(".ELP1Lo").style="display:none;";
        document.querySelector("#EReg").value=le.RegNo;
        document.querySelector("#EDep").value=le.Department;
        document.querySelector("#EName").value=le.Name;
      }
    }
  }
  const SearchLog=()=>{
    const SReg=document.querySelector(".SReg").value;
    for(const l of Log){
      if(l.RegNo==SReg){
        console.log(l);
        document.querySelector(".VName").innerHTML="Name : "+l.Name;
        document.querySelector(".VDep").innerHTML="Department : "+l.Department;
        document.querySelector(".VId").innerHTML="ID : "+l._id;
      }
    }
  }
  const EditLog=()=>{
    const EReg=document.querySelector("#EReg").value;
    const EDep=document.querySelector("#EDep").value;
    const EName=document.querySelector("#EName").value;
    const EPass=document.querySelector("#EPass").value;
    const id=document.querySelector("#compidLo").value;
    let data={"Name":EName,"RegNo":EReg,"Department":EDep,"Password":EPass};
    handlePatchRequestLog(data,id);
    closeAllLog();
  }
  const DeleteLog=()=>{
    const id=document.querySelector("#LdelidLo").value;
    handleDeleteRequestLog(id);
    closeAllLog();
  }
  const SLoopn=()=>{
    document.querySelector(".SearchLog").style="display:flex;";
  document.querySelector(".GupLo").style="display:flex;"
}
  const ELoopn=()=>{
    document.querySelector(".EditLearnLo").style="display:flex;";
  document.querySelector(".GupLo").style="display:flex;"
}
  const DLoopn=()=>{
    document.querySelector(".DeleteLearnLo").style="display:flex;";
  document.querySelector(".GupLo").style="display:flex;"
}

  // = == = == ==  == == = = ==  == = = == = = =  = == = == = = == = = = = = = ==

  function LogOut(){
    Cookies.set("Log","404$Login")
    window.location.href = '/';
  }
  
  return (
    <>
      <div className='landing oh'>
        <div className='Header'>
          <div className='ro'>
            <p>ADMIN</p>
          </div>
          <div className='lo ki'>
            <button onClick={opnANA}>Analysis</button>
            <button onClick={opnLEA}>Learn</button>
            <button onClick={opnWEBPRA}>Web Practice</button>
            <button onClick={opnFORMPRA}>Form Practice</button>
            <button onClick={opnSTU}>Student</button>
            <button onClick={LogOut} className='LogoutBut' style={{backgroundColor:"lightgrey",color:"red",cursor:"pointer"}}>Logout</button>
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
                    <p>{data.Test}</p>
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
                    <p>{data.Test}</p>
                    <p>{data.RegNo}</p>
                    <p>{data.MarkGet}</p>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* LEARN */}


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
                <button onClick={EditLearner}>Edit</button>
                <button onClick={closeAll}>Cancel</button>
              </div>
            </div>
          </div>
          <div className='DeleteLearn'>
            <div className='DL'>
              <p>* Ensure That The ID Listed In The Tabel.</p>
              <input type='text' placeholder='Enter ID Of Component' id='Ldelid'></input>
              <div className='ButStack'>
                <button onClick={DeleteLearner}>Delete</button>
                <button onClick={closeAll}>Cancel</button>
              </div>
            </div>
          </div>
          <a className='Gup' onClick={closeAll}>

          </a>
        </div>

        {/* WEBPRACTICE */}

        <div className='WEBPRACTICE'>
        <div className='ButStack'>
            <button onClick={CQopn}>Create</button>
            <button onClick={EQopn}>Edit</button>
            <button onClick={DQopn}>Delete</button>
          </div>
          <WebTable/>
          <div className='CreateLearnQ'>
            <p>Create Web Test Module</p>
            <input type='text' placeholder='Title' className='creTiQ'></input>
            <input type='text' placeholder='Author' className='creAuQ'></input>
            <div className='gbg'>
              <input type='number' placeholder='No.QA' className='CreNu'></input>
              <button className='glow-button' onClick={genV}>Generate</button>
            </div>
            
            
            <div className='QA'>
              {componentsArray}
            </div>
            
            <div className='ButStack'>
              <button onClick={CreateQD}>Create</button>
              <button onClick={closeAllQ}>Cancel</button>
            </div>
          </div>
          <div className='EditLearnQ'>
            <div className='ELP1Q'>
              <p>* Ensure That The ID Listed In The Tabel.</p>
              <input type='text' placeholder='Enter ID Of Component' id='compidQ'></input>
              <div className='ButStack'>
                <button onClick={checkQDGet}>Get</button>
                <button onClick={closeAllQ}>Cancel</button>
              </div>
            </div>
            <div className='ELP2Q'>
              <p>Edit Data</p>
              <input type='text' id="compLiQ"></input>
              <div className='ButStack'>
                <button onClick={EditQD}>Edit</button>
                <button onClick={closeAllQ}>Cancel</button>
              </div>
            </div>
          </div>
          <div className='DeleteLearnQ'>
            <div className='DLQ'>
              <p>* Ensure That The ID Listed In The Tabel.</p>
              <input type='text' placeholder='Enter ID Of Component' id='LdelidQ'></input>
              <div className='ButStack'>
                <button onClick={DeleteQD}>Delete</button>
                <button onClick={closeAllQ}>Cancel</button>
              </div>
            </div>
          </div>
          <a className='GupQ' onClick={closeAllQ}>

          </a>
        </div>

        {/* FORMPRACTICE */}

        <div className='FORMPRACTICE'>
        <div className='ButStack'>
            <button onClick={CFopn}>Create</button>
            <button onClick={EFopn}>Edit</button>
            <button onClick={DFopn}>Delete</button>
          </div>
          <FormTable/>
          <div className='CreateLearnF'>
            <p>Create A Hyper Card</p>
            <input type='text' placeholder='Title' className='creTiF'></input>
            <input type='text' placeholder='Link' className='creLiF'></input>
            <div className='ButStack'>
              <button onClick={CreateForm}>Create</button>
              <button onClick={closeAllF}>Cancel</button>
            </div>
          </div>
          <div className='EditLearnF'>
            <div className='ELP1F'>
              <p>* Ensure That The ID Listed In The Tabel.</p>
              <input type='text' placeholder='Enter ID Of Component' id='compidF'></input>
              <div className='ButStack'>
                <button onClick={checkFormGet}>Get</button>
                <button onClick={closeAllF}>Cancel</button>
              </div>
            </div>
            <div className='ELP2F'>
              <p>Edit Data</p>
              <input type='text' id="compTitF"></input>
              <input type='text' id="compLiF"></input>
              <div className='ButStack'>
                <button onClick={EditForm}>Edit</button>
                <button onClick={closeAllF}>Cancel</button>
              </div>
            </div>
          </div>
          <div className='DeleteLearnF'>
            <div className='DLF'>
              <p>* Ensure That The ID Listed In The Tabel.</p>
              <input type='text' placeholder='Enter ID Of Component' id='LdelidF'></input>
              <div className='ButStack'>
                <button onClick={DeleteForm}>Delete</button>
                <button onClick={closeAllF}>Cancel</button>
              </div>
            </div>
          </div>
          <a className='GupF' onClick={closeAllF}>

          </a>
        </div>

        {/* STUDENT */}

        <div className='STUDENT'>

          <div className='ButStack'>
            <button onClick={SLoopn}>Search</button>
            <button onClick={ELoopn}>Edit</button>
            <button onClick={DLoopn}>Delete</button>
          </div>

          <LogTable/>

          <div className='SearchLog'>
            <p>*Ensure That He/She Login Already</p>
            <input type='text' placeholder='RegNo' className='SReg'></input>
            <div className='rsl'>
              <p className='VName'>Name : </p>
              <p className='VDep'>Department : </p>
              <p className='VId'>ID : </p>
            </div>
            <div className='ButStack'>
              <button onClick={SearchLog}>Search</button>
              <button onClick={closeAllLog}>Close</button>
            </div>
          </div>

          <div className='EditLearnLo'>
            <div className='ELP1Lo'>
              <p>* Ensure That The ID Listed In The Tabel.</p>
              <input type='text' placeholder='Enter ID Of Component' id='compidLo'></input>
              <div className='ButStack'>
                <button onClick={checkLogGet}>Get</button>
                <button onClick={closeAllLog}>Cancel</button>
              </div>
            </div>
            <div className='ELP2Lo'>
              <p>Edit Data</p>
              <input type='text' id="EReg"></input>
              <input type='text' id="EName"></input>
              <input type='text' id="EDep"></input>
              <input type='text' id="EPass" placeholder='New Password, If You Want To Change !'></input>
              <div className='ButStack'>
                <button onClick={EditLog}>Edit</button>
                <button onClick={closeAllLog}>Cancel</button>
              </div>
            </div>
          </div>
          <div className='DeleteLearnLo'>
            <div className='DLLo'>
              <p>* Ensure That The ID Listed In The Tabel.</p>
              <input type='text' placeholder='Enter ID Of Component' id='LdelidLo'></input>
              <div className='ButStack'>
                <button onClick={DeleteLog}>Delete</button>
                <button onClick={closeAllLog}>Cancel</button>
              </div>
            </div>
          </div>
          <a className='GupLo' onClick={closeAllLog}>

          </a>

        </div>

        <div className='Foot'>
          <p>This Website Was Created By <Link>Team Exotic</Link></p>
        </div>

      </div>
      <div className='notAdmin'>
        <p>Admin Pannel Is Not Available For Mobile Environment...</p>
      </div>
    </>
  )
}

export default Home