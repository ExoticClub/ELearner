
import React from 'react';
import BST from "./bst.js";
import WST from "./wst.js";
import ANA from "./ana.js";
import TLIST from "./tlist";
import "./admin.css";




function ANALYSIS() {
     
    return (
    <>
        <div className='contpan'>
            <div>
                <BST/>
                <ANA/>
            </div>
            <div>
                <WST/>
                <TLIST/>
            </div>
        </div>
            
          
    </>
  )
}

export default ANALYSIS;