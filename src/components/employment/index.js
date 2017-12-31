import React from 'react';
import "./employment.css";
export default ({employmentHistory}) => {
    return (
        <div> {employmentHistory.map((employment, idx) => {
            return (<div key={idx} className="employmentWrapper">
                <div className="employmentHeader"><span>{employment.company}</span> <span>{employment.location}</span> </div>
                <div className="employmentSubHeader"><span>{employment.title}</span><span>{employment.years}</span> </div>
                <div className="employmentDetails">
                    <div className="summaryTitle">Summary</div>
                    <div className="summaryDetails">
                        {
                            employment.highlights.map((x,index) => <div key={index}>{x}</div>)
                        }
                    </div>
                    <div className="summaryKeywords">{employment.keyWords.join(' ')}</div>
                </div>
            </div>)
        })}</div>);
}
