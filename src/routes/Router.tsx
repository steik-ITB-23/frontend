import { createBrowserRouter } from "react-router-dom";
import PageHome from "../pages/Home/PageHome";
import Layout from "./Layout";
import PageTentangBpa from "../pages/PageTentangBPA";
import Custom404 from "../pages/Page404";
import PageComingSoon from "../pages/PageComingSoon";
import Akademik from "../pages/Akademik/Akademik";
import Matkul from "../pages/Akademik/Matkul";
import Profile from "../pages/Profile/Profile";
// import Profile from "../pages/Profile/Profile";

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
        path: "/akademik",
        element: <Akademik />,
      },
      {
        path: "/akademik/:matkul",
        element: <Matkul />,
      },
      {
        path: "/acara-kemahasiswaan",
        element: <PageComingSoon />,
      },
    ],
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/profile/:nim",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <Custom404 />,
  },
]);

export default router;
