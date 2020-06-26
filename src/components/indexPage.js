import React, { Component } from "react";

class Index extends Component {
  state = {
    pulls: [],
  };

  async getData() {
    const response = await fetch('http://localhost:9000/',{
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin':'*',
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });
    const data = await response.json();
    return data;
  }

  async componentDidMount() {
    const pulls = await this.getData();

    this.setState({
      pulls: pulls,
    });
  }

  render() {
    let pullsArray = this.state.pulls;

    return (
      <div>
        <ul>
          {pullsArray.length > 0 ? (
            pullsArray.map((pull) => (
              <li>
                  {pull}
              </li>
            ))
          ) : (
            <li>No Data</li>
          )}
        </ul>
      </div>
    );
  }
}
export default Index;