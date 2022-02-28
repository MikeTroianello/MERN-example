import logo from "./logo.svg";
import "./App.css";
import AllPets from "./components/classes/AllPets";
import AllPetsFunctionalComponent from "./components/hooks/AllPetsFunctionalComponent";
import CreatePet from "./components/classes/CreatePet";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
// import PetInfo from "./components/classes/PetInfo";
import PetInfoFunctionalComponent from "./components/hooks/PetInfoFunctionalComponent";
import Login from "./components/hooks/Login";
import Profile from "./components/hooks/Profile";

function App() {
  return (
    <div className="App">
      {/* <h1>Pets</h1> */}
      {/* <AllPets /> */}
      {/* <AllPetsFunctionalComponent /> */}
      <header className="navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/all-pets">See All Pets</Link>
      </header>
      <Routes>
        {/* router.get('/', (req, res)=> res.render("home")) */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/all-pets" element={<AllPets />} />
        <Route path="/pets/:petId" element={<PetInfoFunctionalComponent />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
