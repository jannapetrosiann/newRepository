import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import List from "./Components/List/List.jsx";
import Register from "./Components/Register/Register.jsx";
import SignIn from "./Components/SignIn/SignIn.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <div className="whole">
        <Header />
        <Navbar />

        <div className="content">
          <Routes>
            <Route path="/list" element={<List />} />
            <Route path="/register" element={<Register />}></Route>
            <Route path="/signIn" element={<SignIn />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
