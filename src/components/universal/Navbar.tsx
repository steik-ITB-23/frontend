import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoHome, GoCopilot } from "react-icons/go";
import { IoMdBook } from "react-icons/io";
import { RiGroupLine } from "react-icons/ri";
import { useLocation } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";

const NavListDesktop = ({ href, routerPathname, lable }: { href: string; routerPathname: string; lable: string }) => (
  <NavLink smooth to={href} className="hidden md:block h-full">
    <p
      className={
        routerPathname === href ? "border-b-2 border-gray-400" : "hover:brightness-110 hover:border-b-2 border-gray-400"
      }>
      <span className="text-[16px] lg:text-[18px] font-outfit tracking-wider">{lable}</span>
    </p>
  </NavLink>
);

const Navbar = ({ mainColor = "#101351", mainTextColor }: { mainColor?: string; mainTextColor?: string }) => {
  const pathName = useLocation().pathname;

  const [scrollDirection, setScrollDirection] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [scrolledOneThirdvw, setScrolledOneThirdvw] = useState(false);
  const [navMobile, setNavMobile] = useState(false);

  const handleNav = (bool: boolean) => {
    setNavMobile(bool);
  };

  const getTextColor = () => {
    if (pathName === "/" && !scrolledOneThirdvw) return "text-gray-200 hover:text-white";
    if (mainColor === "#F1F2F8") return "text-black hover:brightness-110";
    if (mainTextColor) return `${mainTextColor} hover:brightness-110`;
    return "text-[#F1F2F8] hover:brightness-110";
  };

  useEffect(() => {
    const changeShadow = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos === 0) {
        setScrollDirection(true);
      } else if (prevScrollPos > currentScrollPos) {
        setScrollDirection(true);
        if (currentScrollPos >= window.innerWidth / 2.8) {
          setScrolledOneThirdvw(true);
        } else {
          setScrolledOneThirdvw(false);
        }
      } else {
        if (!prevScrollPos && currentScrollPos >= window.innerWidth / 2.8) {
          setScrolledOneThirdvw(true);
        }
        setScrollDirection(false);
      }
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", changeShadow);

    if (window.scrollY >= window.innerWidth / 2.8) {
      setScrolledOneThirdvw(true);
    } else {
      setScrolledOneThirdvw(false);
    }

    return () => window.removeEventListener("scroll", changeShadow);
  }, [prevScrollPos]);

  useEffect(() => {
    setScrollDirection(true);
  }, []);

  return (
    <>
      <header
        className={`sticky left-0 top-0 z-50 h-[5.2rem] flex w-full items-center px-0 duration-500 ease-in-out drop-shadow-lg ${
          scrollDirection ? "translate-y-0" : "-translate-y-24"
        } ${
          pathName === "/" && !scrolledOneThirdvw
            ? "bg-gradient-to-b from-black/70 via-black/60 to-black/10"
            : "bg-[" + mainColor + "]"
        }`}>
        <div className="w-full px-2 mx-auto">
          <div className="relative flex items-center justify-between">
            <NavLink smooth to="/" className="w-fit h-[5rem] flex items-center gap-4 pl-4">
              <div className={`h-4 min-h-full py-2 transition-all duration-300`}>
                <img
                  src="/steik23.svg"
                  className={`w-full h-full cursor-pointer object-contain`}
                  height={30}
                  width={30}
                  alt="Logo STEI-K 23"
                />
              </div>
              <div className="flex flex-col justify-center gap-0 pt-1">
                <h1
                  className={`font-extrabold uppercase text-2xl duration-100 ease-in tracking-wider font-outfit h-fit leading-4 ${getTextColor()}`}>
                  Syntax
                </h1>
                <p
                  className={`text-[16px] lg:text-lg duration-100 ease-in tracking-wider font-outfit leading-6 ${getTextColor()}`}>
                  code, create, connect
                </p>
              </div>
            </NavLink>

            {/* Navigation list */}
            <div className="flex gap-2 sm:gap-4 md:gap-6 lg:gap-10 items-center">
              {/* Desktop navigation list */}
              <div
                className={`flex gap-0 py-1 text-[#6B778C] md:gap-6 lg:gap-8 lg:py-5 xl:gap-12 uppercase items-center ${getTextColor()}`}>
                <NavListDesktop href="/" routerPathname={pathName} lable="Home" />
                <NavListDesktop href="/tentang-bpa" routerPathname={pathName} lable="BPA" />
                <NavListDesktop href="/akademik" routerPathname={pathName} lable="Akademik" />
                <NavListDesktop href="/acara-kemahasiswaan" routerPathname={pathName} lable="Acara" />
              </div>

              {/* Sign IN */}

              {/* Mobile Nav Button */}
              <button
                className="block md:hidden hover:brightness-95 p-2 rounded-md ml-2 text-[#6B778C]"
                onClick={() => handleNav(true)}>
                <RxHamburgerMenu size={30} />
              </button>

              {/* Mobile Nav List */}
              <div
                onClick={() => handleNav(false)}
                className={`text-slate-800 ${navMobile ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""}`}>
                <div
                  className={
                    navMobile
                      ? "fixed right-0 top-0 w-[240px] h-screen bg-slate-50 p-4 pt-10 ease-in duration-500 flex flex-col gap-4"
                      : "fixed right-[-150%] w-[240px] h-screen bg-slate-50 top-0 p-4 pt-10 ease-in duration-500 flex flex-col gap-4 items-start"
                  }>
                  <section className="space-y-2">
                    <p className="text-3xl font-bold leading-none">SYNTAX</p>
                    <p className="font-bold">STEI-K 23</p>
                    <p className="text-sm font-bold italic leading-none mb-10">Code, Create, Connect!</p>
                  </section>

                  <section className="flex flex-col gap-1">
                    <NavLink smooth to="/" className="bg-slate-50 hover:brightness-95 pl-2 py-1 flex items-center gap-2">
                      <GoHome size={19} /> Home
                    </NavLink>
                    <NavLink
                      smooth
                      to="/tentang-bpa"
                      className="bg-slate-50 hover:brightness-95 pl-2 py-1 flex items-center gap-2">
                      <GoCopilot size={19} /> BPA
                    </NavLink>
                    <NavLink smooth to="/akademik" className="bg-slate-50 hover:brightness-95 pl-2 py-1 flex items-center gap-2">
                      <IoMdBook size={19} /> Akademik
                    </NavLink>
                    <NavLink
                      smooth
                      to="/acara-kemahasiswaan"
                      className="bg-slate-50 hover:brightness-95 pl-2 py-1 flex items-center gap-2">
                      <RiGroupLine size={19} /> Acara Kemahasiswaan
                    </NavLink>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
