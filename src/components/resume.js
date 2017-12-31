import React from 'react';
import styled from 'styled-components';
import Skills from './skills';
import Employment from './employment';
import References from './references';
import About from './about';
import resume from './resume.json';

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
    flex:3 0 0
    height:100%;
`;
const EducationContainer = styled.div`
    background-color:green;
    height:100%;
    flex:2 0 0
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
const EmployerContainer = styled.div`
   background-color:beige;
   height:100%;
`;

const ReferencesContainer = styled.div`
   background-color:red;
   height:100%;
`;

const Header = styled.div`
    border-bottom: .75px solid black;
    margin:10px
`

export default props => {
    return (
        <ResumeContainer>
            <SideContainer>
                <ProfileContainer>
                    <Header>Josh Jarmain</Header>
                    <h2>PHOTO GOES HERE</h2>
                </ProfileContainer>
                <SkillsContainer>
                    <Header>Skills</Header>
                    <Skills skills={resume.skills} />
                </SkillsContainer>
                <EducationContainer>
                    <Header>Education</Header>
                </EducationContainer>
            </SideContainer>
            <MainContainer>
                <AboutContainer>
                    <Header>About</Header>
                    <About />
                </AboutContainer>
                <EmployerContainer>
                    <Header>Experience</Header>
                    <Employment employmentHistory={resume.employmentHistory} />
                </EmployerContainer>
                <ReferencesContainer>
                    <Header>References</Header>
                    <References references={resume.references}/>
                </ReferencesContainer>
            </MainContainer>
        </ResumeContainer>)
};