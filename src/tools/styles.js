const Styles = {
  App: {
    top: {
      position: "fixed",
      width: "100%",
      top: "0",
      left: "0",
      zIndex: "1"
    }
  },
  Search: {
    SearchBar: {
      width: "60%",
      position: "center",
      marginLeft: "20%",
      marginTop: "10%"
    }
  },
  Navbar: {
    title: {
      marginLeft: ".6em"
    },
    languageButton: {
      float: "right",
      marginRight: "1em"
    }
  },
  MovieContainer: {
    main: {
      margin: "3%",
      color: "white"
    },
    title: {
      color: "green"
    },
    subTitle: {
      padding: "1%",
      color: "grey"
    },
    poster: {
      height: "50%",
      width: "50%",
      borderRadius: "1.6em"
    },
    value: {
      color: "#28a745"
    },
    productionImage: {
      width: "30%",
      padding: "0.5em"
    },
    productionText: {
      display: "inline",
      padding: "1em"
    }
  },
  PopoverButton: {
    main: { marginTop: ".4em" },
    exit: {
      position: "top",
      color: ["#fff", true],
      fontWeight: ["300", true],
      float: "right"
    },
    header: {
      backgroundColor: "#28a745",
      width: "100%"
    },
    popoverBody: {
      width: "16em"
    },
    popoverButton: {
      width: "5em",
      backgroundColor: "#28a745",
      color: "#222"
    },
    popoverOpen: {
      backgroundColor: "#222",
      color: "#28a745"
    },
    btnEnglish: {
      borderColor: "#222",
      width: "45%",
      marginRight: "5%"
    },
    btnPolish: {
      borderColor: "#222",
      width: "45%"
    }
  },
  Footer: {
    main: {
      color: "white",
      width: "100%",
      textAlign: "center",
      fontSize: ".8em"
    },
    image: { width: "2%", height: "2%" },
    bar: {
      display: "inline",
      width: "2%",
      height: "2%",
      margin: ".8em"
    },
    text: { color: "grey" }
  }
};

export default Styles;
