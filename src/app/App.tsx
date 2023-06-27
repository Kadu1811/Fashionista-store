import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import { Menu } from "../layouts/Menu";
import { Content } from "../layouts/Content";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
}

export default App;
