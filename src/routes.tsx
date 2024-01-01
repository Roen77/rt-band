import { createBrowserRouter } from "react-router-dom"
import PostListPage from "./page/PostListPage";
import MovieListPage from "./page/MovieListPage";
import ReservationPage from "./page/ReservationPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PostListPage />
  },
  {
    path: "movielist",
    element: <MovieListPage />,
  },
  {
    path: "reserve/:id",
    element: <ReservationPage />,
  },
]);

export default router