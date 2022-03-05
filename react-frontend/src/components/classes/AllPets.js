import React from "react";
import axios from "axios";
import CreatePet from "./CreatePet";
import { Link } from "react-router-dom";

class AllPets extends React.Component {
  state = {
    petsArr: [],
  };

  componentDidMount = () => {
    axios
      .get("http://localhost:5005/api/pet/all-pets")
      .then((results) => {
        console.log(results.data);
        this.setState({ petsArr: results.data });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  getPets = () => {
    axios
      .get("http://localhost:5005/api/pet/all-pets")
      .then((results) => {
        console.log(results.data);
        this.setState({ petsArr: results.data });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  adoptPet = (petId) => {
    axios
      .delete(`http://localhost:5005/api/pet/delete/${petId}`)
      .then((results) => {
        let filteredArray = this.state.petsArr.filter((pet) => {
          return pet._id !== petId;
        });
        this.setState({ petsArr: filteredArray });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };
  //   adoptPet = (petId) => {
  //     axios
  //       .delete(`http://localhost:5005/api/pet/delete/${petId}`)
  //       .then((results) => {
  //         this.getPets();
  //       })
  //       .catch((err) => {
  //         console.error(err.message);
  //       });
  //   };

  findPetInfo = (petId) => {
    axios
      .get("http://localhost:5005/api/pet/find/" + petId)
      .then((results) => {
        console.log(results.data);
        //   this.setState({ petsArr: results.data });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  createPet = (animalToBeCreated) => {
    axios
      .post("http://localhost:5005/api/pet/create", animalToBeCreated)
      .then((results) => {
        this.setState({ petsArr: [...this.state.petsArr, results.data] });
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  render() {
    return (
      <div>
        <h3>All Pets with Classes</h3>
        {this.state.petsArr.map((pet, i) => {
          return (
            <div key={i}>
              <p>
                {pet.name} the {pet.typeOfAnimal}
              </p>
              <img src={pet.image} alt="pet pic" height="100" width="100" />
              <button onClick={() => this.adoptPet(pet._id)}>
                Adopt {pet.name}
              </button>
              {/* 
              <button onClick={() => this.findPetInfo(pet._id)}>
                Learn more
              </button> */}

              <Link to={`/pets/${pet._id}`}>Learn More</Link>
            </div>
          );
        })}
        {/* <button onClick={() => this.getPets()}>Get all pets</button> */}
        <CreatePet createPet={this.createPet} />
      </div>
    );
  }
}

export default AllPets;
