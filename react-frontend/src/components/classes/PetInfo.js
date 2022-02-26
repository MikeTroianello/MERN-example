import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

class PetInfo extends React.Component {
  state = {
    pet: {},
  };

  //   componentDidMount = () => {
  //     axios
  //       .get("http://localhost:5005/api/pet/find/" + petId)
  //       .then((results) => {
  //         console.log(results.data);
  //         this.setState({ pet: results.data });
  //       })
  //       .catch((err) => {
  //         console.error(err.message);
  //       });
  //   };

  render() {
    return (
      <div>
        <h3>PET INFO</h3>
        <p>{this.state.pet.name}</p>
      </div>
    );
  }
}

export default PetInfo;
