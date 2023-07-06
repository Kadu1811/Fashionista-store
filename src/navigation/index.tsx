import { Route, Routes } from "react-router-dom";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Product, About, Contact, NotFound, Home } from "../pages";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Product" element={<Product />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export { Navigation };
