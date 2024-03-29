import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Checkout from "../../Pages/Checkout/Checkout";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import PaymentFail from "../../Pages/Orders/PaymentFail";
import PaymentSuccess from "../../Pages/Orders/PaymentSuccess";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children : [
      {
        path : '/',
        element : <Home />
      },
      {
        path : '/login',
        element : <Login />
      },
      {
        path : '/signup',
        element : <SignUp />
      },
      {
        path : '/checkout/:id',
        loader: ({params}) => fetch(`http://localhost:5000/sarveces/${params.id}`),
        element : <PrivateRoute><Checkout /></PrivateRoute>
      },
      {
        path : '/orders',
        element : <PrivateRoute><Orders /></PrivateRoute>
      },
      {
        path : '/payment/success',
        element : <PaymentSuccess />
      },
      {
        path : '/payment/fail',
        element : <PaymentFail />
      },
    ]
  },
]);