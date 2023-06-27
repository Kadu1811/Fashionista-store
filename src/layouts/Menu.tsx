import "./Menu.css";

import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <aside className="Menu">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Product">Product</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/hi">Not found</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export { Menu };
