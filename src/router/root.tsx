import React from "react";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../Pages/Homepage/Homepage";
import { useRoutes } from "react-router-dom";
import Project from "../Pages/Project/Project";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";

// Define the type for routes correctly
const routes: { path: string; index: boolean; element: React.ReactNode }[] = [
  {
    path: "/",
    index: true,
    element: <Homepage />,
  },
  {
    path: "/project",
    index: true,
    element: <Project />,
  },
  {
    path: "/about",
    index: true,
    element: <About />,
  },
  {
    path: "/contact",
    index: true,
    element: <Contact />,
  },
];

const RootRouter = () => {
  const wrapLayoutRoutes = routes.map((route) => ({
    ...route,
    element: <MainLayout>{route.element}</MainLayout>,
  }));
  return useRoutes(wrapLayoutRoutes);
};

export default RootRouter;
