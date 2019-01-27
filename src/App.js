import React, { Component } from "react";
import "./App.css";
import PopChart from "./components/PopChart";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <PopChart />
        </div>
        <div class="footer">
          <a href="http://stevejones.io" target="_blank">
            Steve Jones
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
