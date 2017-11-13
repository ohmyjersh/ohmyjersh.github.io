import React from 'react';
import styled from 'styled-components';
import Bar from './Bar';



const Skill = ({skill}) => (
    <li>
       <div> <h5>{skill.name}</h5><Bar percentage={skill.percentage} /> </div>
    </li>
)

export default ({skills}) => (
    <div>
        <ul>
            {skills.map(x => <Skill skill={x}/>)}
        </ul>    
    </div>
)