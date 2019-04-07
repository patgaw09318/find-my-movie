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
      popoverOpen: false,
      mobileMenuOpen: false
    };
  }

  Translation = this.props.Translation;

  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
      mobileMenuOpen: this.state.mobileMenuOpen
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
  getLanguageButtons = () => {
    return (
      <>
        {this.getEnglishButton()}
        {this.getPolishButton()}
      </>
    );
  };
  getPopoverButton = () => {
    return (
      <Button
        style={{
          ...styles.popoverButton,
          ...(this.state.popoverOpen && styles.popoverOpen)
        }}
        id="PopoverButton"
        className="PopoverButton mobileHide"
        type="button"
      >
        {this.props.language === english
          ? this.Translation.t("English")
          : this.Translation.t("Polish")}
      </Button>
    );
  };

  getMobilePopoverButton = () => {
    return (
      <div
        className="mobileShow desktopHide"
        onClick={() =>
          this.setState({
            popoverOpen: this.state.popoverOpen,
            mobileMenuOpen: !this.state.mobileMenuOpen
          })
        }
      >
        <img
          className="mobileMenuImage"
          alt="menu"
          src={Config.application.mobileMenuIcon}
        />
      </div>
    );
  };

  getMobileMenu = () => {
    return (
      this.state.mobileMenuOpen && (
        <div className="mobileMenu mobileShow desktopHide">
          {this.getLanguageButtons()}
          <img
            src={Config.application.closeIcon}
            alt="close button"
            onClick={() => {
              if (this.state.mobileMenuOpen) {
                this.setState({
                  popoverOpen: this.state.popoverOpen,
                  mobileMenuOpen: false
                });
              }
            }}
          />
        </div>
      )
    );
  };

  render() {
    return (
      <div style={styles.main}>
        {this.getPopoverButton()}
        {this.getMobilePopoverButton()}
        {this.getMobileMenu()}
        <Popover
          className="border border-success"
          placement="bottom"
          style={styles.popoverBody}
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
              onClick={() =>
                this.setState({
                  popoverOpen: false,
                  mobileMenuOpen: this.state.mobileMenuOpen
                })
              }
            >
              x
            </div>
          </PopoverHeader>
          <PopoverBody className="PopoverBody">
            {this.getLanguageButtons()}
          </PopoverBody>
        </Popover>
      </div>
    );
  }
}

export default PopoverButton;
