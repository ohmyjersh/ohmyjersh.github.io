
import "../base.css"
import "./main.css"
import F from "ramda"
import React from "react"
import Popover from "../../lib"

const Pop = ({body, open, toggle}) => {
    return (
        <Popover
        isOpen={open}
        body="!"
        children={
          <div
            className="Row"
            onMouseOver={() => this.toggle(true)}
            onMouseOut={() => this.toggle(false)}
            children={this.props.children}
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
            open={isOpen}
            body={text}
            toggle={this.toggle} />;
      }
    };
  }

  export default PopOverHoc(Pop);