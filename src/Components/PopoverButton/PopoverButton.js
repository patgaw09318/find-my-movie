/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "./PopoverButton.css";

class PopoverButton extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      popoverOpen: false
    };
  }

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  render() {
    return (
      <div>
        <Button id="PopoverButton" className="PopoverButton" type="button">
          English
        </Button>
        <Popover
          className="border border-success"
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="PopoverButton"
          toggle={this.toggle}
        >
          <PopoverHeader className="PopoverHeader">
            Select language
          </PopoverHeader>
          <PopoverBody className="PopoverBody">
            <button className="btn btnEnglish">English</button>
            <button className="btn btnPolish">Polish</button>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default PopoverButton;
