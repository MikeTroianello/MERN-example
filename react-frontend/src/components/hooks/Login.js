import React from "react";
import axios from "axios";
import authService from "../auth/auth-services";

const Login = () => {
  const [username, setUsername] = React.useState("Mittens");
  const [password, setPassword] = React.useState("password");
  const [loginMessage, setLoginMessage] = React.useState("");

  const logUserIn = (e) => {
    e.preventDefault();
    authService.login(username, password);
    // axios
    //   .post("http://localhost:5005/api/auth/login", {
    //     username: username,
    //     password: password,
    //   })
    //   .then((results) => {
    //     console.log(results.data);
    //     // setPet(results.data);
    //     setLoginMessage(results.data.message);
    //   })
    //   .catch((err) => {
    //     console.error(err.message);
    //   });
  };

  return (
    <div>
      <h3>Login</h3>
      <form onSubmit={logUserIn}>
        <label htmlFor="username">Username</label>
        <input
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p>{loginMessage}</p>
    </div>
  );
};

export default Login;
