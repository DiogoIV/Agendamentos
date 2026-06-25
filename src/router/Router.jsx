import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layout/AppLayout";

import Home from "../pages/Home";
import Agendamento from "../pages/Agendamento";

import Login from "../pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "agendar", element: <Agendamento /> },
      { path: "login", element: <Login /> }
    ],
  },
]);

export default router;