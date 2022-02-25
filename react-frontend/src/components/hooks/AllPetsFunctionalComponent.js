import React from "react";
import axios from "axios";
import CreatePetFunctionalComponent from "./CreatePetFunctionalComponent";

const AllPetsFunctionalComponent = () => {
  const [petsArr, setPetsArr] = React.useState([]);

  //equivalent of ComponentDidMount
  React.useEffect(() => {
    axios
      .get("http://localhost:5005/api/pet/all-pets")
      .then((results) => {
        console.log(results.data);
        setPetsArr(results.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  const getPets = () => {
    axios
      .get("http://localhost:5005/api/pet/all-pets")
      .then((results) => {
        console.log(results.data);
        setPetsArr(results.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const adoptPet = (petId) => {
    axios
      .delete(`http://localhost:5005/api/pet/delete/${petId}`)
      .then((results) => {
        let filteredArray = petsArr.filter((pet) => {
          return pet._id !== petId;
        });
        setPetsArr(filteredArray);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const findPetInfo = (petId) => {
    axios
      .get("http://localhost:5005/api/pet/find/" + petId)
      .then((results) => {
        console.log(results.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  const createPet = (animalToBeCreated) => {
    axios
      .post("http://localhost:5005/api/pet/create", animalToBeCreated)
      .then((results) => {
        setPetsArr([...petsArr, results.data]);
      })
      .catch((err) => {
        console.error(err.message);
      });
  };

  return (
    <div>
      <h3>All Pets with Hooks</h3>
      {petsArr.map((pet, i) => {
        return (
          <div key={i}>
            <p>
              {pet.name} the {pet.typeOfAnimal}
            </p>
            <button onClick={() => adoptPet(pet._id)}>Adopt {pet.name}</button>
            <button onClick={() => findPetInfo(pet._id)}>Learn more</button>
          </div>
        );
      })}
      <CreatePetFunctionalComponent createPet={createPet} />
      {/* <button onClick={() => getPets()}>Get all pets</button> */}
    </div>
  );
};

export default AllPetsFunctionalComponent;
