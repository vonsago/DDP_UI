import api from './api';

class ImageService {
  constructor() {
    this.api = api;
  }

  getList() {
    return this.api.get('/images')
  }

  removeContainer(containerId) {
    return this.api.delete(`/instances/${containerId}/stop`)
  }

  restartContainer(containerId) {
    return this.api.post(`instances/${containerId}/restart`)
  }

  startContainer(instance) {
    return this.api.post('/instances', instance)
  }

  buildImages(images) {
    console.log(images); // eslint-disable-line no-console

    return this.api.post('/images/build', images)
  }

  
}

export default new ImageService();
