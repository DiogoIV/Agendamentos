import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layout/AppLayout";

import Home from "../pages/Home/Home";
import Agendamento from "../pages/Agendamento/Agendamento";

import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import EsqueciSenha from "../pages/EsqueciSenha/EsqueciSenha";


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "agendar", element: <Agendamento /> },
      { path: "login", element: <Login /> },
      { path: "cadastro", element: <Cadastro/>},
      { path: "esquecisenha", element: <EsqueciSenha/>}
    ],
  },
]);

export default router;