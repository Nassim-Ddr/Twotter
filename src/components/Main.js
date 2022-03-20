import React from 'react';
import '../style/App.css';
import Default from './Default';
import Signin from './Signin';
import Signup from './Signup';
import LoggedIn from './LoggedIn';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cnx: props.cnx,
      cur: props.cur
    }
  }

  // CREATE FUNCTIONS : GOTOSIGNIN GOTOSIGNUP GOTOHOME GOTODEFAULT

  render() {
    if (this.state.cnx === "TRUE") {
      return (
        <LoggedIn content="Profile"/>
      );
    }
    else if (this.state.cur === "SIGNIN") {
      return (
        <Signin />
      );
    }
    else if (this.state.cur === "SIGNUP") {
      return (
        <Signup />
      );
    }
    else {
      return (
        <Default />
      );
    }
  }
}

export default Main;