import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header'
import GoodsList from './components/GoodsList'

class App extends Component {
  state = {
    count: 0
  }
  addToCart = () => {
    this.setState({
      count: this.state.count + 1,
    });
  }
  render() {
    return (
      <main className="app">
        <div>
          <Header count={this.state.count} />
        </div>
        <div>
          <GoodsList addToCart={this.addToCart}/>
        </div>
      </main>
    );
  }
}

export default App;
