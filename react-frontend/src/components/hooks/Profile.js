import React from "react";
import axios from "axios";
import authService from "../auth/auth-services";

const Profile = () => {
  const [user, setUser] = React.useState({});
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    authService.loginTest();
    // axios
    //   .get("http://localhost:5005/api/auth/login-test")
    //   .then((results) => {
    //     console.log(results.data);
    //     // setPetsArr(results.data);
    //     setMessage(results.data.message);
    //   })
    //   .catch((err) => {
    //     console.error(err.message);
    //     setMessage(err.message);
    //   });
  }, []);

  return (
    <div>
      {/* <h3>{user.username}'s profile page</h3> */}
      <p>{message}</p>
    </div>
  );
};

export default Profile;
