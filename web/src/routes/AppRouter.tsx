import { createBrowserRouter } from "react-router-dom";

import AppShell from "@/layouts/AppShell";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <Home />,
      },

      // Aquí agregaremos las próximas páginas:
      // {
      //   path: "servicios",
      //   element: <Services />,
      // },

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);