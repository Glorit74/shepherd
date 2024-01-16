import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import MainPage from "./pages/MainPage"
import ErrorPage from "./pages/ErrorPage/Error-page"
import Puli from "./pages/Puli/Puli"
import Legeltetes from "./pages/Legeltetes/Legeltetes"

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/legeltetes",
    element: <Legeltetes />,
  },
  {
    path: "/tobb",
    element: <Puli />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
