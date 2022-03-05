import React from "react";
import authService from "../auth/auth-services";

class CreatePet extends React.Component {
  state = {
    name: "",
    age: 0,
    isFixed: false,
    typeOfAnimal: "",
    image: "",
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

  handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new thing in '/api/things/create' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    authService
      .handleUpload(uploadData)
      .then((response) => {
        console.log("response is: ", response);
        // after the console.log we can see that response carries 'secure_url' which we can use to update the state
        this.setState({ image: response.path });
      })
      .catch((err) => console.log("Error while uploading the file: ", err));
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

          <input name="image" type="file" onChange={this.handleFileUpload} />

          <button onClick={(e) => this.preparePetToAdd(e)}>Create Pet</button>
        </form>
      </div>
    );
  }
}

export default CreatePet;
