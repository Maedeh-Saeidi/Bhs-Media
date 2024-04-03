import "./App.css";
import Contribution from "./pages/Contribution";
import HomePage from "./pages/HomePage";
import Terrestrial from "./pages/Terrestrial";
import Usage from "./pages/Usage";

function App() {
  return (
    <div>
      <HomePage></HomePage>
      <Usage></Usage>
      <Contribution></Contribution>
      <Terrestrial></Terrestrial>
    </div>
  );
}

export default App;
