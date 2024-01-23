import '../style/Practice.css';
import "../style/WebPractice.css"
import { useState } from 'react';
import React, { useEffect } from 'react';
import "../style/PracticeModule.css";

function PracticeModule({ TId, logInfo }) {
    let datas=[
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

      let QDatas={
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
      }

  const [mark, setMark] = useState(0);
  const [QData, setQData] = useState(QDatas);
  const [selectedOption, setSelectedOption] = useState('');
  const [questionIndex, setQuestionIndex] = useState(QDatas.question[TId].length - 1);

  useEffect(() => {
    // Additional logic if needed when component mounts
  }, []);

  const handleOptionChange = (e) => {
    e.target.style.color = 'red';
    setSelectedOption(e.target.value);
  };

  const optionVerification = () => {
    if (selectedOption !== '') {
      if (selectedOption === QData.answer[TId][questionIndex]) {
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

  return (
    <div className='iio'>
      <div className='dbody'>
        <form className='test-cont'>
          <p className='tttoo'>{QData.title[TId]}</p>
          <div className='qa'>
            <p className='q'>{QData.question[TId][questionIndex]}</p>
            <div className='a'>
              {QData.options[TId][questionIndex].map((option) => (
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
        <p className='uii'>{QData.title[TId]}</p>
        <p>Mark: {mark}</p>
        <button type='submit' id='butt'>
          Go Back
        </button>
      </form>
    </div>
  );
}

export default PracticeModule