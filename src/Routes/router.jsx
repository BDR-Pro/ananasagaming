import { createBrowserRouter } from "react-router-dom";
import GameDetails from "../Components/Details/gameDetails";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/details/:id',
                element: <GameDetails></GameDetails>
            },
        ]
    },
])
export default router;