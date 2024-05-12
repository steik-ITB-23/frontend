import { createBrowserRouter } from "react-router-dom";
import PageHome from "../pages/PageHome";
import Layout from "./Layout";
import PageTentangBpa from "../pages/PageTentangBPA";
import Custom404 from "../pages/Page404";
import PageComingSoon from "../pages/PageComingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <PageHome />,
      },
      {
        path: "/tentang-bpa",
        element: <PageTentangBpa />,
      },
      {
        path: "/akademik/*",
        element: <PageComingSoon />,
      },
      {
        path: "/acara-kemahasiswaan",
        element: <PageComingSoon />,
      },
    ],
  },
  {
    path: "*",
    element: <Custom404 />,
  },
]);

export default router;
