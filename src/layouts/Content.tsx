import "./Content.css";

import { Route, Routes } from "react-router-dom";

import { Product, About, Contact, NotFound, Home } from "../pages";

const Content = () => {
  return (
    <main className="Content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export { Content };
