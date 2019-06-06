import api from './api';

class DockerService {
  constructor() {
    this.api = api;
  }

  dockerLogin(params) {
    return this.api.post('/login', params);
  }
}

export default new DockerService();
