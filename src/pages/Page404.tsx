import { NavLink } from "react-router-dom";
import AstronoutRolling from "../components/loader/AstronoutRolling";
import Button from "../components/universal/Button";

export default function Custom404() {
  return (
    <div className="h-screen w-full text-center overflow-hidden grow flex flex-col items-center font-outfit bg-gradient-to-b from-slate-100 to-slate-300`">
      <div className="h-80">
        <div className="relative mt-64 h-40">
          <AstronoutRolling />
        </div>
        <div className="h-full flex items-center justify-center flex-col gap-4 pt-20">
          <h1 className="text-3xl">Syntax</h1>
          <h2 className="animate-pulse text-2xl">404 - Page Not Found</h2>
          <NavLink to="/">
            <Button>Back to Home</Button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
