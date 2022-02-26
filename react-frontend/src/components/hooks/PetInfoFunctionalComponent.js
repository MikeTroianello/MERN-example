import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const PetInfo = () => {
  const [pet, setPet] = React.useState({});

  const { petId } = useParams();

  console.log("PET ID", petId);

  React.useEffect(() => {
    axios
      .get("http://localhost:5005/api/pet/find/" + petId)
      .then((results) => {
        console.log(results.data);
        setPet(results.data);
      })
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <div>
      <h3>PET INFO</h3>
      <p>
        {pet.name} the {pet.typeOfAnimal}
      </p>
      <p>
        {pet.name} is {pet.age} years old
      </p>
      <p>
        {pet.name} is {!pet.isFixed && "not"} fixed
      </p>
    </div>
  );
};

export default PetInfo;
