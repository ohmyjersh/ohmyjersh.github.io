import React from 'react';

import './education.css';

export default ({ education }) => {
    return (
        <div className="educationWrapper">
            {
                education.map((x, index) => {
                    return (<div key={index}>
                        <div className="schoolName" >{x.name } {x.note ? <div>*</div> : null}</div>
                        <div className="years">{x.years}</div>
                        <div className="focus">{x.focus}</div>
                    </div>)
                })
            }
        </div>)
}