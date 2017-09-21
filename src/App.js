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

const isSearched = (searchTerm) => (item) => !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      investments,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  render() {
    const { searchTerm, investments } = this.state;
    return (
      <div className="page">
        <div className="interactions">
          <Search
            value={searchTerm}
            onChange={this.onSearchChange}
          >
            Search
          </Search>
        </div>
        <Table
          investments={investments}
          pattern={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

class Search extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <form>
        {children} <input
          type="text"
          value={value}
          onChange={onChange}
        />
      </form>
    );
  }
}

class Table extends Component {
  render() {
    const { investments, pattern } = this.props;
    return (
      <div className="table">
        { investments.filter(isSearched(pattern)).map(item =>
          <div key={item.id} className="table-row">
            <span style={{ width: '40%' }}>
              {item.name}
            </span>
            <span style={{ width: '20%' }}>
              {item.type}
            </span>
            <span style={{ width: '20%' }}>
              {item.holder}
            </span>
            <span style={{ width: '20%' }}>
              {item.due_date}
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default App;
