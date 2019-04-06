/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import Config from "../tools/config";
import Styles from "../tools/styles";
import "./PopoverButton.css";
const styles = Styles.PopoverButton;
const polish = Config.language.polish;
const english = Config.language.english;

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
        <Button
          style={{
            ...styles.popoverButton,
            ...(this.state.popoverOpen && styles.popoverOpen)
          }}
          id="PopoverButton"
          className="PopoverButton"
          type="button"
        >
          {language === english ? "English" : "Polish"}
        </Button>
        <Popover
          className="border border-success"
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="PopoverButton"
          toggle={this.toggle}
          hideArrow={true}
        >
          <PopoverHeader style={styles.header}>Select language</PopoverHeader>
          <PopoverBody className="PopoverBody">
            <button
              className="btn btnEnglish"
              style={{
                ...this.getLanguageButtonStyle(english),
                ...styles.btnEnglish
              }}
              onClick={() => this.props.handleChangeLanguage(english)}
            >
              English
            </button>
            <button
              className="btn btnPolish"
              style={{
                ...this.getLanguageButtonStyle(polish),
                ...styles.btnPolish
              }}
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
