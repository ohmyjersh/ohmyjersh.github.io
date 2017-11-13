import React, { Component } from 'react';
import styled from 'styled-components';

const Wrap = styled.div`padding: 8px; `

const BarPercentage = styled.div`
float: left;
background: rgba(0,0,0,0.13);
-webkit-border-radius: 4px;
-moz-border-radius: 4px;
border-radius: 4px;
padding: 9px 0px;
width: 18%;
height: 16px;
`

const BarContainer = styled.div`
float: right;
-webkit-border-radius: 10px;
-moz-border-radius: 10px;
border-radius: 10px;
height: 10px;
background: rgba(0,0,0,0.13);
width: 78%;
margin: 12px 0px;
overflow: hidden;
`
const Bar = styled.div`
float: left;
background: #FFF;
height: 100%;
-webkit-border-radius: 10px 0px 0px 10px;
-moz-border-radius: 10px 0px 0px 10px;
border-radius: 10px 0px 0px 10px;
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
filter: alpha(opacity=100);
-moz-opacity: 1;
-khtml-opacity: 1;
opacity: 1;
`
class ProgressBar extends Component {
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
        this.intervalId = setInterval(this.timer, 100);
    }
    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render() {
        console.log(this.props.background);
        const Container = styled.div`
        background: ${this.props.background}; 
        margin: 10px auto;
        width: 300px;
        height: 50px;
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        font-family: sans-serif;
        font-weight: normal;
        font-size: 0.8em;
        color: #FFF;`;

        return (
            <Container>
                <Wrap>
                    <BarPercentage>{`${this.state.current}%`}</BarPercentage>
                    <BarContainer>
                        <Bar style={{ width: `${this.state.current}%` }} />
                    </BarContainer>
                </Wrap>
            </Container>
        )
    }
}

export default ProgressBar;