import React from "react";
import ReactDOM from "react-dom";

import SpaceData from "./components/SpaceData";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoaded: false,
      spaceData: []
    };
  }

  componentDidMount() {
    fetch("https://api.spacexdata.com/v3/launches")
      .then(res => res.json())
      .then(data => {
        this.setState({
          spaceData: data,
          isLoaded: true
        });
      })
      .catch(console.log);
  }

  toggleSpacedata = () => {
    this.setState({
      showSpaceData: !this.state.showSpaceData
    });
  };

  render() {
    if (!this.state.isLoaded) {
        return <h1>Loading...</h1>;
      } else {
      const fullList = this.state.spaceData.map(i => (
        <SpaceData data={i} id={i.flight_number} />
      ));
      return (
        <div className="App">
          <h1>SpaceX Missions</h1>
          {fullList}
        </div>
      );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
