import logo from "./logo.svg";
import "./App.css";
import AllPets from "./components/classes/AllPets";
import AllPetsFunctionalComponent from "./components/hooks/AllPetsFunctionalComponent";
import CreatePet from "./components/classes/CreatePet";

function App() {
  return (
    <div className="App">
      <h1>Pets</h1>
      {/* <AllPets /> */}

      <AllPetsFunctionalComponent />
    </div>
  );
}

export default App;
