import { Component } from 'react';
import axios from 'axios';
import secrets from './secrets.json';
import template from './template';
import './App.css';

const instance = axios.create({
  baseURL: secrets.server_url,
  timeout: 1000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'auth-token': secrets.api_key,
  },
});

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

  componentDidMount() {
    this.fetchInvestments();
  }

  onSearchChange(event) {
    this.setState({ searchTerm: event.target.value });
  }

  fetchInvestments() {
    instance
      .get('/investments')
      .then(response => response.data)
      .then(result => this.setState({ investments: result }))
      .catch(e => console.error(e));
  }

  render() {
    const { searchTerm, investments } = this.state;
    return template(searchTerm, investments);
  }
}

export default App;
