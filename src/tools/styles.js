const Styles = {
  App: {
    top: {
      position: "fixed",
      width: "100%",
      top: "0em",
      zIndex: "10"
    }
  },
  Search: {
    SearchBar: {
      width: "50%",
      position: "center",
      marginLeft: "25%",
      marginTop: "10%"
    }
  },
  Navbar: {
    main: {
      width: "100%",
      padding: "1%"
    },
    languageButton: {
      float: "right",
      marginRight: "1em",
      marginTop: "0.5%"
    },
    title: {
      color: ["#222", true],
      padding: "2%"
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
      color: "white"
    },
    poster: {
      height: "50%",
      width: "50%",
      borderRadius: "1.6em"
    },
    body: {
      padding: "1%"
    },
    value: {
      color: "#28a745"
    },
    productionImage: {
      width: "30%",
      display: "initial",
      padding: "1em"
    },
    productionText: {
      display: "inline",
      padding: "1em"
    }
  },
  PopoverButton: {
    exit: {
      position: "top",
      color: ["#fff", true],
      fontWeight: ["300", true],
      float: "right"
    },
    header: {
      backgroundColor: "#28a745"
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
      marginRight: "0.6em"
    },
    btnPolish: {
      borderColor: "#222"
    }
  }
};

export default Styles;
