import React from 'react';
import styled from 'styled-components';
import Skills from './Skills';

const ResumeContainer = styled.div`
   display: -webkit-flex;
   display: flex;
   -webkit-flex-direction: row;
   flex-direction: row;
   height:100%;
`;
const SideContainer = styled.div`
    background-color: blue;
    flex: 2 0 0;
    display: flex;
    flex-direction: column;
    height:100%;
`;
const ProfileContainer = styled.div`
    background-color:teal;
    flex:1 0 0;
    height:100%;
`;
const SkillsContainer = styled.div`
    background-color:orange;
    flex:5 0 0
    height:100%;
`;

const MainContainer = styled.div`
    background-color:red;
    margin-left:20px;
    flex: 5 0 0;
    display: flex;
    flex-direction: column;
    height:100%;
`
const AboutContainer = styled.div`
   background-color:yellow;
   height:100%;
`;

const EducationContainer = styled.div`
   background-color:green;
   height:100%;
`;
const EmployerContainer = styled.div`
   background-color:beige;
   height:100%;
`;

export default props => {
    let skills = [{name:'javascript', percentage:65},{name:'c#', percentage:75}]
    return(
    <ResumeContainer>
        <SideContainer>
            <ProfileContainer>
                <h2>profile</h2>
            </ProfileContainer>
            <SkillsContainer>
                <Skills skills={skills} />
            </SkillsContainer>
        </SideContainer>
        <MainContainer>
            <AboutContainer>
                <h2>About</h2>
            </AboutContainer>
            <EmployerContainer>
                <h2>employer</h2>
            </EmployerContainer>
            <EducationContainer>
                <h2>education</h2>
            </EducationContainer>
        </MainContainer>
    </ResumeContainer>)
};