import "./App.css";
import NavBar from "./components/NavBar";
import AddProduct from "./products/AddProduct";
import EditProduct from "./products/EditProduct";

function App() {
  return (
    <div>
      <NavBar />
      {/* <AddProduct /> */}
      <EditProduct />
    </div>
  );
}

export default App;
