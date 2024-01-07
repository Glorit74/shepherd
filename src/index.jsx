import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error-page";
import Legeltetes from "./pages/Legeltetes";
import MainPage from "./pages/MainPage";
import Puli from "./pages/Puli";


const router = createBrowserRouter([
  {
    path: "/",
	element: <MainPage />,
	errorElement: <ErrorPage />,
},
{
	path: "/legeltetes",
	  element: <Legeltetes />
},
{
	path: "/tobb",
	  element: <Puli />
}
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
