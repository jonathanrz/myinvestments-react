import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import secrets from './secrets.json'

const PATH_BASE = secrets.server_url;
const PATH_INVESTMENTS = '/investments';

const isSearched = (searchTerm) => (item) => !searchTerm || item.name.toLowerCase().includes(searchTerm.toLowerCase());

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      investments: null,
      searchTerm: '',
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.fetchInvestments = this.fetchInvestments.bind(this);
  }

  fetchInvestments() {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'auth-token': secrets.api_key
    }

    fetch(`${PATH_BASE}${PATH_INVESTMENTS}` , {headers: headers})
      .then(response => response.json())
      .then(result => this.setState({investments: result}))
      .catch(e => e);
  }

  componentDidMount() {
    this.fetchInvestments();
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
        { investments &&
          <Table
            investments={investments}
            pattern={searchTerm}
            onDismiss={this.onDismiss}
          />
        }
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
