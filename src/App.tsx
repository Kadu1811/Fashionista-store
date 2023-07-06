import { BrowserRouter as Router } from "react-router-dom";

import { NavBar } from "./components";
import { Navigation } from "./navigation";
import { GlobalStyles } from "./styles/globalStyles";

const App = () => {
  return (
    <>
      <Router>
        <GlobalStyles />
        <NavBar />
        <Navigation />
      </Router>
    </>
  );
};

export { App };
