import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layout/AppLayout";

import Home from "../pages/Home/Home";
import Agendamento from "../pages/Agendamento/Agendamento";


import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import EsqueciSenha from "../pages/EsqueciSenha/EsqueciSenha";

import MinhaConta from "../pages/pages-perfil/MinhaConta"
import MeusDados from "../pages/pages-perfil/MeusDados"
import MeusAgendamentos from "../pages/pages-perfil/MeusAgendamentos"


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "agendar", element: <Agendamento /> },
      { path: "login", element: <Login /> },
      { path: "cadastro", element: <Cadastro/>},
      { path: "esquecisenha", element: <EsqueciSenha/>},
      {path: "minha-conta", element: <MinhaConta/>},
      {path: "minha-conta/meus-dados", element: <MeusDados/>},
      {path: "minha-conta/meus-agendamentos", element: <MeusDados/>}
    ],
  },
]);

export default router;