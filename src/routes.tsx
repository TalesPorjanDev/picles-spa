import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Pets } from "./pages/Pets";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/pets',
        element: <Pets />
    },

    {
        path: '/admin',
        element: <h1>Admin</h1>
    }
])

export default router 