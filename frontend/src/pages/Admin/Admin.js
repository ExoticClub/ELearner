
import React, { useState } from 'react';
import "./admin.css";
import ANALYSIS from './analysis.js';
import HOME from './home.js';
import TEST from "./test.js";
import LEARN from './learn.js';
import FTEST from './ftest.js';






function Admin() {

  function anafun(){
    document.querySelector(".titpan").innerHTML="Analysis";
    document.querySelector(".analysis").style="display:flex;";
    document.querySelector(".home").style="display:none;";
    document.querySelector(".test").style="display:none;";
    document.querySelector(".learn").style="display:none;";
    document.querySelector(".ftest").style="display:none;";
  }
  function homefun(){
    document.querySelector(".titpan").innerHTML="Admin";
    document.querySelector(".home").style="display:flex;";
    document.querySelector(".analysis").style="display:none;";
    document.querySelector(".test").style="display:none;";
    document.querySelector(".learn").style="display:none;";
    document.querySelector(".ftest").style="display:none;";
  }
  function testfun(){
    document.querySelector(".titpan").innerHTML="Practice";
    document.querySelector(".home").style="display:none;";
    document.querySelector(".analysis").style="display:none;";
    document.querySelector(".test").style="display:flex;";
    document.querySelector(".ftest").style="display:none;";
    document.querySelector(".learn").style="display:none;";
  }
  function ftestfun(){
    document.querySelector(".titpan").innerHTML="Practice";
    document.querySelector(".home").style="display:none;";
    document.querySelector(".analysis").style="display:none;";
    document.querySelector(".test").style="display:none;";
    document.querySelector(".ftest").style="display:flex;";
    document.querySelector(".learn").style="display:none;";
  }
  function learnfun(){
    document.querySelector(".titpan").innerHTML="Practice";
    document.querySelector(".home").style="display:none;";
    document.querySelector(".analysis").style="display:none;";
    document.querySelector(".test").style="display:none;";
    document.querySelector(".ftest").style="display:none;";
    document.querySelector(".learn").style="display:flex;";
  }
     
    return (
    <>
        <div className='pan'>
          <div className='in1'>
            <div className='oiii'>
              <p className='titpan'>ANALYSIS</p>
              <div>
                <a onClick={homefun}>Home</a>
                <a onClick={anafun}>Analysis</a>
                <a onClick={testfun}>Web Practice</a>
                <a onClick={ftestfun}>Form Practice</a>
                <a onClick={learnfun}>Learn</a>
                <a>Student</a>
              </div>
            </div>
            
            <div className='bodypan'>
                <div className='analysis'><ANALYSIS/></div>
                <div className='home'><HOME/></div>
                <div className='test'><TEST/></div>
                <div className='learn'><LEARN/></div>
                <div className='ftest'><FTEST/></div>
            </div>
          </div>
            
          
        </div>
    </>
  )
}

export default Admin;