import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";

import { Menu } from "../layouts";
import { Content } from "./routes";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
};

export { App };
