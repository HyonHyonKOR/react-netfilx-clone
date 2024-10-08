import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "../Root";
import Home from "../pages/Home";
import Tv from "../pages/Tv";
import Search from "../pages/Search";
import Movie from "../pages/Movie";

const router = createBrowserRouter(
  [
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
          path: "movie",
          element: <Movie />,
        },
        {
          path: "search",
          element: <Search />,
        },
      ],
    },
  ],
  { basename: process.env.PUBLIC_URL }
);

export default function Router() {
  return <RouterProvider router={router}></RouterProvider>;
}
