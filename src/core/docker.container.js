import api from './api';

class ContainerService {
  constructor() {
    this.api = api;
  }

  getList() {
    return this.api.get('/instances')
  }

  removeContainer(containerId) {
    return this.api.delete(`/instances/${containerId}/stop`)
  }
}

export default new ContainerService();
