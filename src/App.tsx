import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { msalConfig } from "./lib/authConfig";

import { useEffect, useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "./lib/constant";
import Aos from "aos";

import "./index.css";
import "aos/dist/aos.css";
import "./styles/scrollbar.css";
import "./styles/swiper.css";
import "./styles/loading_page.css";
import "./styles/astronaut.css";
import { CurrentUserContext, IUser } from "./contexts/CurrentUserContext";

const msalInstance = new PublicClientApplication(msalConfig);

function App() {
  const [user, setUser] = useState<IUser>({
    id: "",
    displayName: "",
    nim: "",
    accessToken: "",
  });

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        await msalInstance.initialize();
        const accessToken = localStorage.getItem("access_token");
        if (accessToken) {
          const { data } = await axios.post(BACKEND_URL + "/auth/user-info", {}, { headers: { token: accessToken } });
          setUser({
            id: data._id,
            displayName: data.displayName,
            nim: data.nim,
            accessToken: accessToken,
          });
        } else {
          throw "Not logged in";
        }
      } catch (error) {
        localStorage.setItem("access_token", "");
        console.error(error);
      }
    };
    fetchUserInfo();
  }, []);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <MsalProvider instance={msalInstance}>
      <CurrentUserContext.Provider value={{ user, setUser }}>
        <RouterProvider router={router} />
      </CurrentUserContext.Provider>
    </MsalProvider>
  );
}

export default App;
