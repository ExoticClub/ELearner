import '../style/Practice.css';
import "../style/WebPractice.css"
import { useState } from 'react';
import React, { useEffect } from 'react';
import "../style/PracticeModule.css";

function PracticeModule({ TId, logInfo }) {
  console.log(TId)
   // API Fetch

   let ReqData=[{"Id":"404","Title":"No Data","Question":["No Data"],"Options":[["none"]],"Answer":["none"],"Author":"None","updatedAt":"404T565"},{"Id":"404","Title":"No Data","Question":["No Data"],"Options":[["none"]],"Answer":["none"],"Author":"None","updatedAt":"404T565"},{"Id":"404","Title":"No Data","Question":["No Data"],"Options":[["none"]],"Answer":["none"],"Author":"None","updatedAt":"404T565"}]

   const [WebData, setWebData] = useState(ReqData);
   const [QData, setQData] = useState(WebData[0]);
   const [questionIndex, setQuestionIndex] = useState(0);
 
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
         setWebData(resultData);
         setQData(resultData[TId]);
         setQuestionIndex(resultData[TId].Question.length-1)
       })
       .catch(error => {
         console.error('Error fetching data:', error);
       });
   }, []);
 
   console.log(WebData);

   console.log(QData);

   // API POST
   const [mark, setMark] = useState(0);

   const handlePostRequest = async (IO) => {
    
    try {
      
      const response = await fetch('http://localhost:9999/api/marks', {
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

  // _________
 
  const [selectedOption, setSelectedOption] = useState('');
  
  console.log(questionIndex);

  const handleOptionChange = (e) => {
    e.target.style.color = 'red';
    setSelectedOption(e.target.value);
  };

  const optionVerification = () => {
    if (selectedOption !== '') {
      if (selectedOption === QData.Answer[questionIndex]) {
        setMark(mark + 1);
      }
    }

    if (questionIndex !== 0) {
      if (selectedOption !== '') {
        setQuestionIndex(questionIndex - 1);
      }
    } else {
      document.querySelector('#butt').disabled = true;
      document.querySelector('.mark').style.display = 'flex';
      document.querySelector('.test-cont').style.display = 'none';
    }
  };
  const [Step,setStep]=useState(0);
  function SubmitHand(){
    if(Step==0){
    handlePostRequest({"RegNo":logInfo[0],"TestId":QData.Id,"MarkGet":mark});
    document.querySelector(".JJoy").innerHTML="Go Back";
    document.querySelector(".marktsb").style="display:flex;";
    setStep(1);
  }
    else if(Step==1){
      console.log("OP");
    }

  }

  return (
    <div className='iio'>
      <div className='dbody'>
        <form className='test-cont'>
          <p className='tttoo'>{QData.Title}</p>
          <div className='qa'>
            <p className='q'>{QData.Question[questionIndex]}</p>
            <div className='a'>
              {QData.Options[questionIndex].map((option) => (
                <label key={option} className='opt'>
                  <input
                    type='radio'
                    value={option}
                    checked={selectedOption === option}
                    onChange={handleOptionChange}
                    className='rad'
                  />
                  <span style={{ color: selectedOption === option ? 'blue' : 'black' }}>{option}</span>
                </label>
              ))}
            </div>
            <button onClick={optionVerification} type='button' id='butt'>
              Next
            </button>
          </div>
        </form>
      </div>
      <form className='mark'>
        <p className='uii'>{QData.Title}</p>
        <p className='marktsb'>Mark: {mark}</p>
        <button type='button' id='butt' className="JJoy" onClick={SubmitHand}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default PracticeModule