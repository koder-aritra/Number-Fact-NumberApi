import React from 'react';
import axios from 'axios';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      fact: ''
    }
  }

  componentDidMount() {
    this.fetchFact();
  }

  fetchFact = () => {
    axios.get('//numbersapi.com/random/trivia')
      .then((response) => {
        //console.log(response.data);
        this.setState({ fact: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {

    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.fact}</h1>
          <button className="button" onClick={() => this.fetchFact()}>
            <span>NEXT FACT PLEASE!</span>
          </button>
        </div>
      </div>
    );
  }
}

export default App;