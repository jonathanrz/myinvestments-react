import { Component } from 'react';
import secrets from './secrets.json';
import template from './template';
import './App.css';

const PATH_BASE = secrets.server_url;
const PATH_INVESTMENTS = '/investments';

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
    const headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'auth-token': secrets.api_key,
    };

    fetch(`${PATH_BASE}${PATH_INVESTMENTS}`, { headers })
      .then(response => response.json())
      .then(result => this.setState({ investments: result }))
      .catch(e => e);
  }

  render() {
    const { searchTerm, investments } = this.state;
    return template(searchTerm, investments);
  }
}

export default App;
