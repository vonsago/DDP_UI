import REST from './rest';

const API_URL = process.env.VUE_APP_API_URL;

class APIService extends REST {
  constructor() {
    super(`${API_URL}/v1`);
  }

  getEndPointURL() {
    return this.endPointURL;
  }

  create(url = API_URL, config) {
    return new REST(url, config);
  }
}

export default new APIService();