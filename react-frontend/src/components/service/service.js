import { baseroute } from "./baseUrl";
import axios from "axios";

export const get = async (url) => {
  let results = await axios.get();
};

export const post = async (url, body) => {};

export const put = async (url, body) => {};

export const patch = async (url, body) => {};

//todo: grab token from local storage in constructor

export class Service {
  constructor() {
    this.url = baseUrl;
    this.token = localStorage.getItem("token");
    this.headers = {
      "Content-Type": "application/json",
      Authorization: this.token,
    };
  }

  get = async (route) => {
    let results = await axios.get(this.url + route, this.headers);
    return results.data;
  };

  post = async (route, body) => {
    let results = await axios.post(this.url + route, body, this.headers);
    return results.data;
  };

  put = async (route, body) => {
    let results = await axios.put(this.url + route, body, this.headers);
    return results.data;
  };

  patch = async (route, body) => {
    let results = await axios.patch(this.url + route, body, this.headers);
    return results.data;
  };

  delete = async (route, body) => {
    let results = await axios.delete(this.url + route, body, this.headers);
    return results.data;
  };
}
