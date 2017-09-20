import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const investments = [
  {
      id: "58f3f5d4524b280012157c09",
      holder: "Bradesco",
      type: "Tesouro Direto",
      name: "Tesouro IPCA+ 2019 (NTNB Princ)",
      due_date: "2019-05-15T00:00:00.000Z"
  },
  {
    id: "58f41036b740dc0012ecbf2b",
    holder: "Easynvest",
    type: "CDB",
    name: "Banco Máxima",
    due_date: "2019-04-05T00:00:00.000Z"
  },
  {
    id: "598488aeac0e3010116f3fbb",
    holder: "Clear",
    type: "Ação",
    name: "TUPY3"
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        { investments.map(item =>
          <div key={item.id}>
            <span>{item.name}</span>
            <span>{item.type}</span>
            <span>{item.holder}</span>
            <span>{item.due_date}</span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
