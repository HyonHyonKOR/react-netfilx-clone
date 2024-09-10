import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import Tv from "../pages/Tv";
import Search from "../pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "all/:contentId",
        element: <Home />,
      },
      {
        path: "tv",
        element: <Tv />,
      },
      {
        path: "search",
        element: <Search />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
