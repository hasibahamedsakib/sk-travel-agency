import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Boocking/Boocking";
import BookingDetails from "../components/BookingDetails/BookingDetails";
import Home from "../components/Home/Home";
import PrivetRoute from "../components/PrivetRoute/PrivetRoute";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Main from "../pages/Main/Main";
import Users from "../pages/Main/Users";
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
        element: (
          <PrivetRoute>
            <Booking />
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://sk-travel-new-name32n.vercel.app/booking/${params.id}`
          ),
      },
    ],
  },
  {
    path: "/",
    element: <Users />,
    errorElement: <Error />,
    children: [
      {
        path: "/booking-details",
        element: <BookingDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
