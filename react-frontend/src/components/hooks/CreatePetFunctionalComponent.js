import React from "react";

const CreatePetFunctionalComponent = (props) => {
  const [name, setName] = React.useState("");
  const [age, setAge] = React.useState(0);
  const [isFixed, setIsFixed] = React.useState(false);
  const [typeOfAnimal, setTypeOfAnimal] = React.useState("");

  const preparePetToAdd = (e) => {
    e.preventDefault();
    props.createPet({
      name: name,
      age: age,
      isFixed: isFixed,
      typeOfAnimal: typeOfAnimal,
    });
    setName("");
    setAge("");
    setIsFixed(false);
    setTypeOfAnimal("");
  };

  return (
    <div>
      <h3>Add new pet</h3>
      <form>
        <input
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          name="isFixed"
          value={isFixed}
          onChange={(e) => setIsFixed(e.target.value)}
        />
        <input
          name="typeOfAnimal"
          value={typeOfAnimal}
          onChange={(e) => setTypeOfAnimal(e.target.value)}
        />

        <button onClick={(e) => preparePetToAdd(e)}>Create Pet</button>
      </form>
    </div>
  );
};

export default CreatePetFunctionalComponent;
