import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Contact from "../Pages/Contact/Contact";
import LogIn from "../Pages/Log/LogIn";
import Register from "../Pages/Log/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddVolunteer from "../Pages/AddVolunteer/AddVolunteer";
import UpdatePage from "../Pages/UpdatePage/UpdatePage";
import NeedVolunteer from "../Pages/NeedVolunteer/NeedVolunteer";
import Error from "../Pages/Error/Error";
import VolunteerModal from "../Pages/VolunteerModal/VolunteerModal";
import VolunteerPage from "../VolunteerPage/VolunteerPage";
import ManageMy from "../ManageMy/ManageMy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader:()=>fetch('https://a11b9-volunteer.vercel.app/volunteer'),
      },
      {
        path: "/contact",
        element:<Contact></Contact>,
      },
      {
        path: "/login",
        element:<LogIn></LogIn>,
      },
      {
        path: "/register",
        element:<Register></Register>,
      },
      {
        path: "/addVolunteer",
        element:<PrivateRoute><AddVolunteer></AddVolunteer></PrivateRoute>,
      },
      {
        path: "/updateVolunteer/:id",
        element:<PrivateRoute><UpdatePage></UpdatePage></PrivateRoute>,
      },
      {
        path: "/needVolunteer",
        element:<PrivateRoute><NeedVolunteer></NeedVolunteer></PrivateRoute>,
        loader:()=>fetch('https://a11b9-volunteer.vercel.app/volunteer')
      },
      {
        path: "/manageMy",
        element:<PrivateRoute><ManageMy></ManageMy></PrivateRoute>,
        loader:()=>fetch('https://a11b9-volunteer.vercel.app/volunteer')
      },
      {
        path: "/needVolunteerPerson",
        element:<VolunteerPage></VolunteerPage>,
        loader:()=>fetch('https://a11b9-volunteer.vercel.app/volunteer')
       
      },
      {
        path: "/single/:id",
        element:<PrivateRoute><VolunteerModal></VolunteerModal></PrivateRoute>,
      },
      
    ],
  },
]);

export default router;
