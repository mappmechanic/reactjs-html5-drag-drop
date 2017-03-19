import React from 'react';

const NumberDisplay = ({ no,label }) => {
    return (
        <div className="numberDisplay">
            <div className="no">{no}</div> 
            <div className="label">{label}</div>
        </div>
    );
}

export default NumberDisplay;