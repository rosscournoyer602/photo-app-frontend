const http = (function () {
  const axios = require("axios");
  const instance = axios.create({
    baseURL: process.env.API_URL,
  });

  return {
    get: function (url, config = {}) {
      return instance.get(url, config);
    },
    post: function (url, data, config = {}) {
      return instance.post(url, data, config);
    },
    put: function (url, data, config = {}) {
      return instance.put(url, data, config);
    },
  };
})();

export default http;
