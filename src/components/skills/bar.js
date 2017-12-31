import React, { Component } from 'react';
import styled from 'styled-components';

const BarContainer = styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    height:20px;
    width:100px;
    margin: 10px auto;
    background-color:black;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
`;

const ProgressBar = styled.div`
    background: #FFF;
    height: 50%;
    -webkit-border-radius: 10px 10px 10px 10px;
    -moz-border-radius: 10px 10px 10px 10px;
    border-radius: 10px 10px 10px 10px;
    -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
    filter: alpha(opacity=100);
    -moz-opacity: 1;
    -khtml-opacity: 1;
    opacity: 1;
`
class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            percentage: props.percentage
        }
    }

    timer = () => {
        this.setState({
            current: this.state.current + 1
        })
        if (this.state.current === this.state.percentage) {
            clearInterval(this.intervalId);
        }
    }
    componentDidMount() {
        this.intervalId = setInterval(this.timer, 50);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        return (
            <BarContainer>
                <ProgressBar style={{ width: `${this.state.current}%` }} />
            </BarContainer>
        )
    }
}

export default Bar;