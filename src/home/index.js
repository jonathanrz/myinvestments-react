import { Component } from 'react';
import template from './template';
import Api from '../Api';
import './index.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      investments: null,
      searchTerm: '',
    };

    this.api = new Api();

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
    this.api
      .getInvestments()
      .then(response => response.data)
      .then(result => this.setState({ investments: result }))
      .catch(e => console.error(e));
  }

  render() {
    const { searchTerm, investments } = this.state;
    return template(searchTerm, investments, this.onSearchChange);
  }
}

export default Home;
