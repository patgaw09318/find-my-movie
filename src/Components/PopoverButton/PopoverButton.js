/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import "./PopoverButton.css";

const polish = "pl-PL";
const english = "en-US";

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

  getLanguageButtonStyle = language => {
    return language === this.props.language
      ? { backgroundColor: "#28a745" }
      : { backgroundColor: "white" };
  };

  render() {
    let language = this.props.language;
    return (
      <div>
        <Button id="PopoverButton" className="PopoverButton" type="button">
          {language === english ? "English" : "Polish"}
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
            <button
              className="btn btnEnglish"
              style={this.getLanguageButtonStyle(english)}
              onClick={() => this.props.handleChangeLanguage(english)}
            >
              English
            </button>
            <button
              className="btn btnPolish"
              style={this.getLanguageButtonStyle(polish)}
              onClick={() => this.props.handleChangeLanguage(polish)}
            >
              Polish
            </button>
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default PopoverButton;
