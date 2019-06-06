import api from './api';

class DockerService {
  constructor() {
    this.api = api;
  }

  login(username, password) {
    return this.api.post('/login', {
      username,
      password,
    },
    {headers:{"Content-Type": "application/x-www-form-urlencoded;charset=UTF-8"}}
    )
  }
}

export default new DockerService();
