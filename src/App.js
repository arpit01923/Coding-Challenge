import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Product } from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
