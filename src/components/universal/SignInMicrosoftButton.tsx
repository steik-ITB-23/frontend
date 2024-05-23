import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../../lib/authConfig";
import axios from "axios";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useNavigate } from "react-router-dom";
import { BACKEND_URL } from "../../lib/constant";

const SignInMicrosoftButton = () => {
  const navigate = useNavigate();
  const { instance } = useMsal();
  const { setUser } = useContext(CurrentUserContext);

  const handleLogin = async () => {
    try {
      const { account } = await instance.loginPopup(loginRequest);
      const { localAccountId: microsoftId, name: displayName, username: microsoftMail } = account;
      const nim = microsoftMail.split("@")[0];
      const { data } = await axios.post(BACKEND_URL + "/auth/sign-in", {
        nim,
        displayName,
        microsoftId,
      });

      if (setUser) {
        setUser({
          id: data.id,
          displayName: displayName as string,
          nim: data.nim,
          accessToken: data.token,
        });
      }
      localStorage.setItem("access_token", data.token);
      navigate(`/`);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <button className="py-2 px-4 rounded-full border-[1px] border-slate-100" onClick={handleLogin}>
      <p className="font-outfit text-slate-200 uppercase tracking-widest">SignIn</p>
    </button>
  );
};

export default SignInMicrosoftButton;
