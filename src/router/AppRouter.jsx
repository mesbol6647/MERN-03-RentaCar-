import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Cars from "../pages/Cars";
import Reservations from "../pages/Reservations";
import About from "../pages/About";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="/" element={<PrivateRouter />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="cars" element={<Cars />} />
          <Route path="reservations" element={<Reservations />} />
          <Route path="about" element={<About />} />

        </Route>
      </Routes> 
    </Router>
  );
};

export default AppRouter;
