import React, { Component } from "react";

class App extends Component {
  render() {
    return <div></div>;
  }

  componentDidMount() {
    fetch("http://api.open-notify.org/astros.json")
      .then((resp) => resp.json())
      .then(console.log);
  }
}

export default App;
