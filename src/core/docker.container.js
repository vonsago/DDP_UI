import api from './api';

class ContainerService {
  constructor() {
    this.api = api;
  }

  getList() {
    return this.api.get('/instances')
  }
}

export default new ContainerService();
