import api from './api';
import { isEmpty } from 'lodash';

class DockerService {
  constructor() {
    this.api = api;
  }

  login(username, password) {
    return this.api.post('/login', {
      username,
      password,
    })
  }

  getLoginInfo() {
    return this.api.get('/login/check')
  }

  check() {
    const token = this.getLoginInfo();
    console.log(token); // eslint-disable-line no-console
    return !isEmpty(token);
  }
}

export default new DockerService();
