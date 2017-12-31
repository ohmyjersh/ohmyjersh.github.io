import React from 'react';
import styled from 'styled-components';
import Skills from './skills';
import Employment from './employment';
import About from './about';

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
    let skills = [{name:'javascript', percentage:65},{name:'c#', percentage:75}]
    let employmentHistory = [{
        company: "Incomm Digital Solutions",
        location: "Portland, OR",
        title: "Software Engineer",
        years: "April 2013 - Present",
        highlights: ["build distrobuted email system with message queues, multipel servces, react", "improved consistent automation data quality with scrub process from production database", "mentored junior engineers on best practices of design and implementation"],
        keyWords: ["c#", "javascript", "react", "angular", "sql", "c#", "javascript", "react", "angular", "sql", "c#", "javascript", "react", "angular", "sql", "tdd", "automation"]
    },
    {
        company: "Plexis Healthcare System",
        location: "Ashland, OR",
        title: "QA Engineer II",
        years: "March 2012 - April 2013",
        highlights: ["build distrobuted email system with message queues, multipel servces, react", "improved consistent automation data quality with scrub process from production database", "mentored junior engineers on best practices of design and implementation"],
        keyWords: ["c#", "javascript", "react", "angular", "sql", "c#", "javascript", "react", "angular", "sql", "c#", "javascript", "react", "angular", "sql", "tdd", "automation"]
    },
    {
        company: "Lighthouse Worldwide Solutions",
        location: "Medford, OR",
        title: "SQA Engineer",
        years: "April 2011 - Oct 2011",
        highlights: ["build distrobuted email system with message queues, multipel servces, react", "improved consistent automation data quality with scrub process from production database", "mentored junior engineers on best practices of design and implementation"],
        keyWords: ["c#", "javascript", "react", "angular", "sql", "c#", "javascript", "react", "angular", "sql", "c#", "javascript", "react", "angular", "sql", "tdd", "automation"]
    },
    {
        company: "Symyx Technologies",
        location: "Bend, OR",
        title: "Software Test Engineer",
        years: "June 2008 - Aug 2010",
        highlights: ["build distrobuted email system with message queues, multipel servces, react", "improved consistent automation data quality with scrub process from production database", "mentored junior engineers on best practices of design and implementation"],
        keyWords: ["c#", "javascript", "react", "angular", "sql", "c#", "javascript", "react", "angular", "sql", "c#", "javascript", "react", "angular", "sql", "tdd", "automation"]
    }]
    return(
    <ResumeContainer>
        <SideContainer>
            <ProfileContainer>
                <Header>Josh Jarmain</Header>
                <h2>PHOTO GOES HERE</h2>
            </ProfileContainer>
            <SkillsContainer>
                <Header>Skills</Header>
                <Skills skills={skills} />
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
                <Employment employmentHistory={employmentHistory} />
            </EmployerContainer>
            <ReferencesContainer>
                <Header>References</Header>
            </ReferencesContainer>
        </MainContainer>
    </ResumeContainer>)
};