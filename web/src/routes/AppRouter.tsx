/// Componente encargado de registrar páginas

// import { createBrowserRouter } from "react-router-dom";

// import AppShell from "@/layouts/AppShell";
// import Home from "@/pages/Home";
// import NotFound from "@/pages/NotFound";
// import Projects from "@/pages/projetcs/Projects";
// import ServiceCategoryPage from "@/pages/services/ServiceCategoryPage";
// import ServiceDetailPage from "@/pages/services/ServiceDetailPage";

// export const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <AppShell />,
//     children: [
//       {
//         index: true,
//         element: <Home />,
//       },
//       {
//         path: "proyectos",
//         element: <Projects />,
//       },
//       {
//         path: "servicios/:categorySlug",
//         element: <ServiceCategoryPage />,
//       },
//       {
//         path: "servicios/:categorySlug/:serviceSlug",
//         element: <ServiceDetailPage />,
//       },
//       {
//         path: "*",
//         element: <NotFound />,
//       },
//     ],
//   },
// ]);


import { createBrowserRouter } from "react-router-dom";

import AppShell from "@/layouts/AppShell";
import Home from "@/pages/Home";
import NotFound from "@/pages/NotFound";
import ProductDetailPage from "@/pages/products/ProductDetailPage";
import ProductsPage from "@/pages/products/ProductsPage";
import ServiceCategoryPage from "@/pages/services/ServiceCategoryPage";
import ServiceDetailPage from "@/pages/services/ServiceDetailPage";
import Projects from "@/pages/projetcs/Projects";

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
        path: "productos",
        element: <ProductsPage />,
      },
      {
        path: "productos/:productId",
        element: <ProductDetailPage />,
      },

        {
        path: "proyectos",
        element: <Projects />,
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