import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { ProductsListing } from "./components/productsListing/ProductsListing";
import { Sidebar } from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <ProductsListing />
    </div>
  );
}

export default App;
