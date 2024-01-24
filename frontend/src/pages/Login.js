import '../style/Login.css';
import React, { useState, useEffect } from 'react';
import { useGlobal } from '../components/GlobalContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const LogData={
        "Reg": [
          "953622244024",
          "404",
          "999",
          "953622244008",
          "001",
          "8686",
          "123",
          "89",
          "1",
          "000"
        ],
        "Pass": [
          "Io",
          "123",
          "000",
          "000",
          "123",
          "123",
          "123",
          "123",
          "123",
          "000"
        ],
        "Name": [
          "Kishor",
          "Admin",
          "LUFFY",
          "Ram",
          "hari",
          "op",
          "Kishor",
          "mR",
          "test2",
          "Ace"
        ],
        "Class": [
          "CSBS",
          "OFFICIAL",
          "NONE",
          "NONE",
          "NONE",
          "ECE",
          "CSBS",
          "MECH",
          "NONE",
          "CSBS"
        ]
      };

  const navigate = useNavigate();

  const { globalVariable,setGlobalVariable } = useGlobal();
  const {Logs,setLogs}=useState("OP");
  const [SClass, setSClass] = useState("None");
  const [Reg, setReg] = useState('');
  const [Password, setPassword] = useState('');
  const [infoData, setInfo] = useState('');

  const handleClassChange = (e) => {
    setSClass(e.target.value);
  };

  const SignUp = () => {
    const SReg = document.getElementById('SReg').value;
    const SName = document.getElementById('SName').value;
    const SPass = document.getElementById('SPass').value;
    const SPassCon = document.getElementById('SPassCon').value;

    if (SPass === SPassCon) {
      if (LogData.Reg.includes(SReg)) {
        alert("Already Exists");
      } else {
        console.log("oo")
      }
    } else {
      alert("Passwords do not match");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let i = 0; i < LogData.Reg.length; i++) {
      if (LogData.Reg[i] === Reg) {
        if (LogData.Pass[i] === Password) {
          console.log("Welcome");
          setInfo(LogData.Reg[i] + "$" + LogData.Name[i]);
          setGlobalVariable(LogData.Reg[i] + "$" + LogData.Name[i]);
          console.log(globalVariable)
          navigate("/Home")
        } else {
          alert("Password Incorrect!");
        }
      } else if (Reg === "RITAdmin" && Password === "IAm") {
        console.log("HHHHH");
        document.querySelector(".pannel").style.display = "flex";
        document.querySelector(".Page").style.display = "none";
      }
    }

    setReg('');
    setPassword('');
  };

  useEffect(() => {
    const registerBtn = document.getElementById('register');
    const loginBtn = document.getElementById('login');
    const containerL = document.getElementById('containerL');

    if (registerBtn && loginBtn && containerL) {
      const handleRegisterClick = () => {
        containerL.classList.add("active");
      };

      const handleLoginClick = () => {
        containerL.classList.remove("active");
      };

      registerBtn.addEventListener('click', handleRegisterClick);
      loginBtn.addEventListener('click', handleLoginClick);

      return () => {
        // Cleanup the event listeners when the component unmounts
        registerBtn.removeEventListener('click', handleRegisterClick);
        loginBtn.removeEventListener('click', handleLoginClick);
      };
    }
  }, []);

  return (
    <>
      <div className='Page'>
      <div className="containerL LogInPage" id="containerL">
          <div className="form-containerL sign-up">
              <form>
                  <h1>Create Account</h1>
                  <input type="text" placeholder="Name" id='SName'/>
                  <input type="text" placeholder="Register Number" id='SReg'/>
                  <select value={SClass} onChange={handleClassChange}>
                    <option value="None">Select</option>
                    <option value="CSBS">CSBS</option>
                    <option value="MECH">MECH</option>
                    <option value="ECE">ECE</option>
                  </select>
                  <input type="password" placeholder="Password" id='SPass'/>
                  <input type="password" placeholder="Confrim Password" id='SPassCon'/>
                  <button onClick={SignUp} type='button'>Sign Up</button>
              </form>
          </div>
          <div className="form-containerL sign-in LogIn">
              <form  onSubmit={handleSubmit}>
                  <h1>Sign In</h1>
                  <input 
                    id="first_Reg" 
                    name="first_Reg" 
                    type="text" 
                    onChange={event => setReg(event.target.value)} 
                    value={Reg}
                    placeholder='Reg'
                  />
                  <input
                    id="last_Reg"
                    name="last_Reg"
                    type="password"
                    value={Password}
                    placeholder='Password'
                    onChange={event => setPassword(event.target.value)}
                  />
                  <button type="submit">Sign In</button>
              </form>
          </div>
          <div className="toggle-containerL">
              <div className="toggle">
                  <div className="toggle-panel toggle-left">
                      <h1>Welcome Back!</h1>
                      <p>Enter your personal details to use all of site features</p>
                      <button className="hidden" id="login">Sign In</button>
                  </div>
                  <div className="toggle-panel toggle-right">
                      <h1>Hello, Friend!</h1>
                      <p>Register with your personal details to use all of site features</p>
                      <button className="hidden" id="register">Sign Up</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;