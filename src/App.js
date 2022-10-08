import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home/>
      ),
    },
    {
      path: "about",
      element: <About/>,
    },
    {
      path: "contact",
      element: <Contact/>,
    },
  ]);
  
  createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
  );
}

export default App;
