import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";
import {Reserva} from './Reserva.jsx';
import {Fotos} from './Fotos.jsx';
import {Sobre} from './Sobre.jsx';
import {Contato} from './Contato.jsx';
import { Perfil } from './Perfil.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reserva",
    element: <Reserva />,
  },
  {
    path: "/fotos",
    element: <Fotos />,
  },
  {
    path: "/sobre",
    element: <Sobre />,
  },
  {
    path: "/contato",
    element: <Contato />,
  },
  {
    path: "/perfil",
    element: <Perfil />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);