
/// comoponente encargado de registrar paginas 




import { createBrowserRouter } from "react-router-dom";

import AppShell from "@/layouts/AppShell";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ServiceCategoryPage from "@/pages/services/ServiceCategoryPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppShell />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "servicios/:categorySlug",
        element: <ServiceCategoryPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);