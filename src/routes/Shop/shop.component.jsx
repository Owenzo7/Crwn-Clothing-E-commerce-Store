/* eslint-disable no-unused-vars */
import { Route, Routes } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";

import "./shop.styles.scss";

function Shop() {
  
  return (
    <Routes>

    <Route index element={<CategoriesPreview />} />
    
    </Routes>
  );
}

export default Shop;
