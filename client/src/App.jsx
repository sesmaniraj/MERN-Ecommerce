import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Navbar from "./components/Navbar";
import Productpage from "./pages/Productpage";
import Category from "./pages/Category";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./private/PrivateRoute";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Route>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />}></Route>
        <Route path="/register" element={<Registerpage />}></Route>
        <Route path="/product" element={<Productpage />}></Route>
        <Route path="/category" element={<Category />}></Route>
      </Routes>
    </div>
  );
};

export default App;
