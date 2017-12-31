import React from 'react';
import styled from 'styled-components';
import Bar from './Bar';

const SkillItem = styled.div`
    display:flex;
    wrap:no-wrap;
    justify-content:flex-end;
    align-items:center;
`

const SkillName = styled.div`
    flex: 1 0 0;
`;
const SkillPercentage = styled.div`
    flex: 1 0 0;
`;

const Skill = ({skill}) => (
    <li>
       <SkillItem>
           <SkillName>{skill.name}</SkillName>
           <SkillPercentage>
                <Bar percentage={skill.percentage} />
           </SkillPercentage>
        </SkillItem>
    </li>
)

const SkillsList = styled.div`
       list-style-type: none;
       display: flex;
       flex-direction: column;
       flex-wrap: no-wrap;
`;

export default ({skills}) => (
    <SkillsList>
        {skills.map(x => <Skill skill={x}/>)}
    </SkillsList>    
)