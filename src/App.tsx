import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

import "./index.css";
import "aos/dist/aos.css";
import "./styles/scrollbar.css";
import "./styles/swiper.css";
import "./styles/loading_page.css";
import "./styles/astronaut.css";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
