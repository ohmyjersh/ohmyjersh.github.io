import React from 'react';
import "./references.css";

class References extends React.Component {
    constructor(props) {
        super(props);
        let self = this;
        this.state = {
            referenceIndex: 0,
            references: props.references,
            radomizer: () => setInterval(() => self.setReference(), 500)
        }
    }

    setReference = () => {
        return this.state.referenceIndex <= 4 ? this.setState({ referenceIndex: (this.state.referenceIndex + 1) }) : this.setState({ referenceIndex: 0 });
    }

    componentWillMount() {
        this.state.radomizer();
    }

    componentWillUnmount() {
        clearInterval(this.state.radomizer);
    }

    render() {
        let reference = this.props.references[this.state.referenceIndex];
        return (<div>
            <div>{`"${reference.said}"`}</div>
            <div>
                <span>{`${reference.who} - ${reference.title}`}</span>
            </div>
        </div>)
    }

}

export default References;