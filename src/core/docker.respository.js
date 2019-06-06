import api from './api';

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
}

export default new DockerService();
