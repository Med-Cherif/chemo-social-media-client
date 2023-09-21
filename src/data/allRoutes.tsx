import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

const allRoutes = {
  general: [],
  auth: [
    {
      id: 1,
      element: <SignIn />,
      path: "/sign-in",
    },
    {
      id: 2,
      element: <SignUp />,
      path: "/sign-up",
    },
  ],
};

export default allRoutes;
