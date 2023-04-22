import "./App.css";
import NavbarWhite from "./Components/Navbar-white/NavbarWhite";
import NavbarBlue from "./Components/Nabar-blue/NavbarBlue";
import Sidebar from "./Components/SideBar/Sidebar";
import Home from "./Pages/Home";
import Modules from "./Pages/Modules";
import Instructors from "./Pages/Instructors";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <NavbarWhite />
        <NavbarBlue />
      </div>
      <BrowserRouter>
        <Sidebar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/modules' element={<Modules />} />
            <Route path='/instructors' element={<Instructors />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
