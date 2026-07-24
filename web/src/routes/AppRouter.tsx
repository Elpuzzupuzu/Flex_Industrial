
/// comoponente encargado de registrar paginas 


import { createBrowserRouter } from "react-router-dom";

import AppShell from "@/layouts/AppShell";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ServiceCategoryPage from "@/pages/services/ServiceCategoryPage";
import ServiceDetailPage from "@/pages/services/ServiceDetailPage";

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
        path: "servicios/:categorySlug/:serviceSlug",
        element: <ServiceDetailPage />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);