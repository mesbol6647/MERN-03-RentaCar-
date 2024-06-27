import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Cars from "../pages/Cars";
import Navbar from "../components/Navbar"
import RentAcar from "../pages/RentAcar";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";

const AppRouter = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="rent" element={<Cars />} />
          <Route path="cars" element={<RentAcar />} />
          <Route path="about" element={<Blog />} />
          <Route path="about" element={<Contact />} />

        </Route>
      </Routes> 
    </Router>
  );
};

export default AppRouter;
