import BPASteik23 from "./containers/BPASteik23";
import ProgramKami from "./containers/ProgramKami";
import SliderHome from "./containers/SliderHome";
import UpcomingEvents from "./containers/UpcomingEvents";
import SurveiJurusan from "./containers/SurveiJurusan";
import { useEffect } from "react";
import AOS from "aos";
import Footer from "../../components/universal/Footer";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="h-fit w-screen bg-slate-50">
      <section className="absolute top-0 left-0 flex-grow flex flex-col items-center justify-center w-full overflow-x-clip bg-[#F1F2F8]">
        <SliderHome />
      </section>

      <div className="h-[calc(100vh-5rem)] w-screen" />

      <div className="px-4 md:px-6 pt-6 md:pt-20 pb-10 w-full h-fit font-outfit bg-gradient-to-b from-black/5 to-black/0">
        <div className="p-2 text-center space-y-8 py-6 w-full max-w-[1200px] mx-auto rounded-lg drop-shadow-xl bg-[#E9EBF8] hover:drop-shadow-2xl border-[1px] border-slate-400">
          <p className="text-lg md:text-xl xl:text-2xl">
            Selamat datang di website SYNTAX! Kami menyediakan bebagai tools untuk memudahkan penyaluran informasi dari dan kepada
            massa STEI-K.
          </p>
          <p className="text-lg md:text-xl xl:text-2xl">-- TIM WEBSITE STEI-K --</p>
        </div>
      </div>

      <UpcomingEvents />

      <SurveiJurusan />

      <ProgramKami />

      <BPASteik23 />

      <Footer />
    </div>
  );
}
