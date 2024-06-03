import "./App.css";
import Home from "./components/pages/Home";
import Header from "./components/ui/Header";

function App() {
  return (
    <div className="grid grid-cols-1">
      <Header />
      <Home />
    </div>
  );
}

export default App;
