import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Page404 from "./pages/Page404";
import Home from "./pages/Home";
import Details from "./pages/Details";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Page404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "countries/:name",
        element: <Details />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
