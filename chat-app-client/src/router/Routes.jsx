import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Join from "../components/Join/Join";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Join/>,
      },
    ],
  },
]);
