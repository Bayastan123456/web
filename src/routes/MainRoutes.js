import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegisterPage from "../pages/RegisterPage";
import ProductsCard from "../components/Products/ProductsCard";
import ProductsList from "../components/Products/ProductsList";
import ProductsAccardion from "../components/Products/ProductsAccardion";
import ProductsPage from "../pages/ProductsPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    { link: "/", element: <HomePage />, id: 1 },
    { link: "/login", element: <LoginPage />, id: 2 },
    { link: "/register", element: <RegisterPage />, id: 3 },
    { link: "/productsList", element: <ProductsList />, id: 4 },
    { link: "/productsAccordion", element: <ProductsAccardion />, id: 5 },
    { link: "/productsPage", element: <ProductsPage />, id: 5 },
    { link: "*", element: <NotFoundPage />, id: 6 },
  ];
  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
