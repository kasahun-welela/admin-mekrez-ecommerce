import "./App.css";
import NavBar from "./components/NavBar";
import AddProduct from "./products/AddProduct";
import EditProduct from "./products/EditProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./auth/Login";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div>
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <NavBar /> <Login />
              </>
            }
          />

          <Route
            exact
            path="/dashboard"
            element={
              <>
                <NavBar /> <Dashboard />
              </>
            }
          />
          <Route
            exact
            path="/AddProduct"
            element={
              <>
                <NavBar /> <AddProduct />
              </>
            }
          />
          <Route
            path="/EditProduct"
            element={
              <>
                <NavBar /> <EditProduct />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
