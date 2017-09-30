import axios from 'axios';
import secrets from './secrets.json';

class Api {
  constructor() {
    this.server = axios.create({
      baseURL: secrets.server_url,
      timeout: 60000,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'auth-token': secrets.api_key,
      },
    });

    this.getInvestments = this.getInvestments.bind(this);
  }

  getInvestments = () => this.server.get('/investments');
}

export default Api;
