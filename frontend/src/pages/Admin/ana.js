import React, { useState } from 'react';
import './admin.css';

function ANA() {

    return (
    <>
        <div className='analy'>
            <div className='tab'>
                <p>CSBS</p>
                <div className='csbs'></div>
            </div >
            <div className="tab">
                <p>IT</p>
                <div className='it'></div>
            </div>
            <div className="tab">
                <p>ECE</p>
                <div className='ece'></div>
            </div>
            <div className="tab">
                <p>AIDS</p>
                <div className='aids'></div>
            </div>
            <div className="tab">
                <p>CIVIL</p>
                <div className='civil'></div>
            </div>
            <div className="tab">
                <p>EEE</p>
                <div className='eee'></div>
            </div>
            <div className="tab">
                <p>MECH</p>
                <div className='mech'></div>
            </div>
            <div className="tab">
                <p>CSE</p>
                <div className='cse'></div>
            </div>
        </div>
    </>
  )
}

export default ANA;