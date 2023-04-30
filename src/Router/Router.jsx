import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Boocking/Boocking";
import Error from "../components/Error/Error";
import Home from "../components/Home/Home";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "booking/:id",
        element: <Booking />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/booking/${params.id}`),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
