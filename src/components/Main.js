import React from 'react';
import '../style/App.css';
import Default from './default';
import Signin from './Signin';
import Signup from './Signup';
import Home from './Home';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cnx : props.cnx,
      cur : props.cur
    }
  }

  render() {
    if (this.state.cnx === "TRUE") {
      return (
        <Home />
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