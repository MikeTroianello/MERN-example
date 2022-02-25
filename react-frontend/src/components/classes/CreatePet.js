import React from "react";

class CreatePet extends React.Component {
  state = {
    name: "",
    age: 0,
    isFixed: false,
    typeOfAnimal: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  preparePetToAdd = (e) => {
    e.preventDefault();
    this.props.createPet(this.state);
    this.setState({
      name: "",
      age: 0,
      isFixed: false,
      typeOfAnimal: "",
    });
  };

  render() {
    return (
      <div>
        <h3>Add new pet</h3>
        <form>
          <input
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <input
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <input
            name="isFixed"
            value={this.state.isFixed}
            onChange={this.handleChange}
          />
          <input
            name="typeOfAnimal"
            value={this.state.typeOfAnimal}
            onChange={this.handleChange}
          />

          <button onClick={(e) => this.preparePetToAdd(e)}>Create Pet</button>
        </form>
      </div>
    );
  }
}

export default CreatePet;
