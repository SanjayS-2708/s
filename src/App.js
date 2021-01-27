import React, { Component } from "react";
import "./App.css";
import Information1 from "./info-json";
import Information from "./infoextract";

class App extends Component {
  constructor() {
    super();

    this.state = {
      search: null
    };
  }

  searchSpace = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword });
  };

  render() {
    const styleInfo = {
      paddingRight: "10px"
    };
    const elementStyle = {
      border: "solid",
      borderRadius: "5px",
      position: "centre",
      left: "50vh",
      height: "10vh",
      width: "100vh",
      marginTop: "5vh",
      marginBottom: "10vh"
    };

    const items = Information1.filter((data) => {
      if (this.state.search == null) return data;
      else if (
        data.name.toLowerCase().includes(this.state.search.toLowerCase()) ||
        data.country.toLowerCase().includes(this.state.search.toLowerCase())
      ) {
        return data;
      }
    }).map((data) => {
      return (
        <div>
          <ul>
            <li style={{ position: "centre", left: "10vh" }}>
              <span style={styleInfo}>{data.name}</span>
              <span style={styleInfo}>{data.age}</span>
              <span style={styleInfo}>{data.country}</span>
            </li>
          </ul>
        </div>
      );
    });

    return (
      <div>
        <input
          type="text"
          placeholder="Enter item to be searched"
          style={elementStyle}
          onChange={(e) => this.searchSpace(e)}
        />
        {items}
      </div>
    );
  }
}

export default App;
