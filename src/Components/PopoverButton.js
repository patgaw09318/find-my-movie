/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React from "react";
import { Button, Popover, PopoverHeader, PopoverBody } from "reactstrap";
import Config from "../tools/config";
import Styles from "../tools/styles";
import "./styles.css";
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

  Translation = this.props.Translation;

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen
    });
  }

  getLanguageButtonStyle = language => {
    return language === this.props.language
      ? { backgroundColor: "#222", color: "white" }
      : { backgroundColor: "#28a745" };
  };

  getEnglishButton = () => {
    return (
      <button
        className="btn btnEnglish"
        style={{
          ...this.getLanguageButtonStyle(english),
          ...styles.btnEnglish
        }}
        onClick={() => this.props.handleChangeLanguage(english)}
      >
        {this.Translation.t("English")}
      </button>
    );
  };

  getPolishButton = () => {
    return (
      <button
        className="btn btnPolish"
        style={{
          ...this.getLanguageButtonStyle(polish),
          ...styles.btnPolish
        }}
        onClick={() => this.props.handleChangeLanguage(polish)}
      >
        {this.Translation.t("Polish")}
      </button>
    );
  };
  render() {
    let language = this.props.language;
    return (
      <div style={styles.main}>
        <Button
          style={{
            ...styles.popoverButton,
            ...(this.state.popoverOpen && styles.popoverOpen)
          }}
          id="PopoverButton"
          className="PopoverButton mobileHide"
          type="button"
        >
          {language === english
            ? this.Translation.t("English")
            : this.Translation.t("Polish")}
        </Button>
        <div className="mobileShow desktopHide">
          {this.getEnglishButton()}
          {this.getPolishButton()}
        </div>
        <Popover
          className="border border-success"
          placement="bottom"
          isOpen={this.state.popoverOpen}
          target="PopoverButton"
          toggle={this.toggle}
          hideArrow={true}
        >
          <PopoverHeader style={styles.header}>
            {this.Translation.t("SelectLanguage")}
            <div
              className="btnExit"
              style={styles.exit}
              onClick={() => this.setState({ popoverOpen: false })}
            >
              x
            </div>
          </PopoverHeader>
          <PopoverBody className="PopoverBody">
            {this.getEnglishButton()}
            {this.getPolishButton()}
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default PopoverButton;
