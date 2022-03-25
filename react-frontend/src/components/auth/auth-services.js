// auth/auth-service.js

import axios from "axios";

class AuthService {
  constructor() {
    this.service = axios.create({
      baseURL: "https://limitless-cove-93068.herokuapp.com/api",
      // baseURL: "http://localhost:5005/api",
      withCredentials: true,
    });
  }
  //We will add our route calls in here

  login = (username, password) => {
    return this.service
      .post("/auth/login", {
        username: username,
        password: password,
      })
      .then((results) => {
        console.log(results.data);
        return results.data;
        // setPet(results.data);
        // setLoginMessage(results.data.message);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  loginTest = () => {
    return this.service
      .get("/auth/loggedIn")
      .then((results) => {
        console.log(results.data);
        return results.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  handleUpload = (img) => {
    return this.service
      .post("/pet/upload-image", img)
      .then((results) => {
        console.log(results.data);
        return results.data;
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
}

// class AuthService is used to organize and group the methods.
// To get an object containing all the methods we just need to
// instantiate the new AuthService object.
const authService = new AuthService();

export default authService;
