
import "./base.css";
import "./main.css";
import React from "react";
import Popover from "react-popover";

const Pop = ({body, open, toggle, children}) => {
    return (
        <Popover
        isOpen={open}
        body="!"
        children={
          <div
            className="Row"
            onMouseOver={() => toggle(true)}
            onMouseOut={() => toggle(false)}
            children={children}
          />
        }
      />
    )
}

function PopOverHoc(WrappedComponent, text) {
    return class extends React.Component {
        state = {
            isOpen: false,
          }
          toggle (toState = null) {
            this.setState({ isOpen: toState === null ? !this.state.isOpen : toState })
          }
  
      render() {
        return <WrappedComponent 
            open={this.state.isOpen}
            body={text}
            toggle={this.toggle} />;
      }
    };
  }

  export default PopOverHoc(Pop);