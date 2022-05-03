import React from 'react';
import Default from './Default';
import Signin from './Signin';
import Signup from './Signup';
import LoggedIn from './LoggedIn';

import '../style/App.css';



class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cnx: props.cnx,
      cur: props.cur,
      userData: null
    }
    this.goTo = this.goTo.bind(this)
  }

  // CREATE FUNCTIONS : GOTOSIGNIN GOTOSIGNUP GOTOHOME GOTODEFAULT

  goTo(destination) {
    if (destination === "SIGNIN") {
      this.setState({
        cnx: "FALSE",
        cur: "SIGNIN"
      })
    } else if (destination === "SIGNUP") {
      this.setState({
        cnx: "FALSE",
        cur: "SIGNUP"
      })
    } else if (destination === "LOGGEDIN") {
      this.setState({
        cnx: "TRUE"
      })
    } else {
      this.setState({
        cnx: "FALSE",
        cur: "DEFAULT"
      })
    }
  }

  setUserData = (obj) => {
    this.setState({
      userData: obj
    })
  }


  render() {
    if (this.state.cnx === "TRUE") {
      return (
        <LoggedIn goTo={this.goTo} userData={this.state.userData} content="Profile" />
      );
    }
    else if (this.state.cur === "SIGNIN") {
      return (
        <Signin goTo={this.goTo}  setUserData={this.setUserData}/>
      );
    }
    else if (this.state.cur === "SIGNUP") {
      return (
        <Signup goTo={this.goTo} />
      );
    }
    else {
      return (
        <Default goTo={this.goTo} />
      );
    }
  }
}

export default Main;