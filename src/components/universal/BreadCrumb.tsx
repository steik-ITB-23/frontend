import { Link, useLocation } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import React from "react";

const BreadCrumb = () => {
  const location = useLocation();
  const pathNonExistent = ["/profile"];
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav>
      <ul className="flex flex-row gap-2 uppercase text-[16px] text-slate-600 tracking-[0.001rem] items-center">
        <li>
          <Link to="/">
            <div className="border-b-2 border-white/0 hover:border-slate-300 py-1">
              <RiHome2Line size={15} />
            </div>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;
          if (!pathNonExistent.includes(to)) {
            return (
              <React.Fragment key={to}>
                <p>&gt;</p>
                <li
                  className={`border-b-2 border-white/0 hover:border-slate-300 ${
                    index === pathnames.length - 1 ? "text-blue-400" : ""
                  }`}>
                  <Link to={to}>{value.charAt(0).toUpperCase() + value.slice(1)}</Link>
                </li>
              </React.Fragment>
            );
          } else {
            return null;
          }
        })}
      </ul>
    </nav>
  );
};

export default BreadCrumb;
