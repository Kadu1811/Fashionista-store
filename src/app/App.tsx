import { BrowserRouter as Router } from "react-router-dom";

import { Content } from "./routes";
import { Menu } from "../layouts/navBar";

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
