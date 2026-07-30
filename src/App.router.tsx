import { createBrowserRouter } from "react-router";
import HomePage from "./page/Home";
import MoviesDetailsPage from "./page/MoviesDetails";

export const movieRouter = createBrowserRouter([
    {
        path: '/',
        element: <HomePage/>
    },
    {
        path: 'movies/:id',
        element: <MoviesDetailsPage/>
    }
])