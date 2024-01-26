import '../style/Login.css';
import React, { useState, useEffect } from 'react';
import { useGlobal } from '../components/GlobalContext';
import { useNavigate } from 'react-router-dom';
import Admin from "../Admin.json"

const LoginPage = () => {

  // API Fetch

  let ReqData=[{"Name":"None","RegNo":"404","Department":"CSBS","Password":"None"}];
  const [Log, setLog] = useState(ReqData);

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

  // API POST

  const handlePostRequest = async (IO) => {
   
   try {
     
     const response = await fetch('http://localhost:9999/api/log', {
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

  const navigate = useNavigate();

  const { setGlobalVariable } = useGlobal();
  const [SClass, setSClass] = useState("None");
  const [Reg, setReg] = useState('');
  const [Password, setPassword] = useState('');

  const handleClassChange = (e) => {
    setSClass(e.target.value);
  };

  const SignUp = () => {
    document.querySelector(".RFR").disabled=true;
    const SReg = document.getElementById('SReg').value;
    const SName = document.getElementById('SName').value;
    const SPass = document.getElementById('SPass').value;
    const SPassCon = document.getElementById('SPassCon').value;

    if (SPass === SPassCon) {
      if(SName!==""){
      if(SReg.length>4&&SReg.slice(0,4)==="9536"){
      if (SClass!=="None"){
      for(let i=0;i<Log.length;i++){
      if (Log[i].RegNo===SReg) {
        document.querySelector(".Messager").style="display:flex;";
        document.querySelector(".Messager p").innerHTML="The Account Already Exits !<br><br>Click Anywhere To Continue...";
      } else{
        handlePostRequest({"Name":SName,"RegNo":SReg,"Department":SClass,"Password":SPass})
        document.getElementById('register').classList.add("active");
        document.getElementById('login').classList.remove("active");
        // alert("Sign Up Sucessfully !")
        window.location.href = '/';
      }
    }
  }else{
    document.querySelector(".Messager").style="display:flex;";
        document.querySelector(".Messager p").innerHTML="Select Your Department !<br><br>Click Anywhere To Continue...";
  }
}else{
  document.querySelector(".Messager").style="display:flex;";
  document.querySelector(".Messager p").innerHTML="Invalid Register Number !<br><br>Click Anywhere To Continue...";
  console.log(SReg.length)
}
      }else{
        document.querySelector(".Messager").style="display:flex;";
        document.querySelector(".Messager p").innerHTML="Enter Your Name Please !<br><br>Click Anywhere To Continue...";
      }
    } else {
      document.querySelector(".Messager").style="display:flex;";
      document.querySelector(".Messager p").innerHTML="Password Didn't Match!<br><br>Click Anywhere To Continue...";
    }
    document.querySelector(".RFR").disabled=false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    for (let i = 0; i < Log.length; i++) {
      if (Log[i].RegNo === Reg) {
        if (Log[i].Password === Password) {
          if (Admin.id.includes(Reg)) {
            setGlobalVariable(Log[i].RegNo + "$" + Log[i].Name);
            navigate("/Admin")
          }else{
            console.log("Welcome");
            setGlobalVariable(Log[i].RegNo + "$" + Log[i].Name);
            navigate("/Home")
          }
        } else {
          document.querySelector(".Messager").style="display:flex;";
          document.querySelector(".Messager p").innerHTML="Password Incorrect!<br><br>If You Forget The Password Please Contact Faculties...<br>Click Anywhere To Continue...";
        }
      } else{
        document.querySelector(".Messager").style="display:flex;";
        document.querySelector(".Messager p").innerHTML="No Account Found, Please SignUp !<br><br>Click Anywhere To Continue...";
      }
    }

    setReg('');
    setPassword('');
  };

  const cls=()=>{
    document.querySelector(".Messager").style="display:none;";
  }

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
                  <select value={SClass} onChange={handleClassChange} className='dropdep'>
                    <option value="None">Select Department</option>
                    <option value="CSBS">CSBS</option>
                    <option value="MECH">MECH</option>
                    <option value="ECE">ECE</option>
                    <option value="IT">IT</option>
                    <option value="EEE">EEE</option>
                    <option value="CIVIL">CIVIL</option>
                    <option value="CSE">CSE</option>
                    <option value="AIDS">AIDS</option>
                  </select>
                  <input type="password" placeholder="Password" id='SPass'/>
                  <input type="password" placeholder="Confrim Password" id='SPassCon'/>
                  <button onClick={SignUp} type='button' className='RFR'>Sign Up</button>
              </form>
          </div>
          <div className="form-containerL sign-in LogIn">
              <form>
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
                  <button type="button" onClick={handleSubmit}>Sign In</button>
              </form>
          </div>
          <div className="toggle-containerL">
              <div className="toggle">
                  <div className="toggle-panel toggle-left">
                      <h1>Welcome Back!</h1>
                      <p>Already Have An Account ?</p>
                      <button className="hidden" id="login">Sign In</button>
                  </div>
                  <div className="toggle-panel toggle-right">
                      <h1>Hello, Friend!</h1>
                      <p>Don't Have An Account ?</p>
                      <button className="hidden" id="register">Sign Up</button>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <button className='Messager' onClick={cls}>
        <p>None</p>
      </button>
    </>
  );
};

export default LoginPage;