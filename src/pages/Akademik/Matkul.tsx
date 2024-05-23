"use client";
import React, { useState, useEffect } from "react";
import AkademikCard2 from "../../components/akademik/AkademikCard2";
import { Link, useParams } from "react-router-dom";
import { AkademikData, AkademikDataType } from "../../lib/akademik/data";
import Footer from "../../components/universal/Footer";

const Matkul: React.FC = () => {
  const { matkul } = useParams();
  const [selectedOption, setSelectedOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredContent, setFilteredContent] = useState<AkademikDataType[]>([]);

  useEffect(() => {
    setSelectedOption("materi");
  }, []);

  useEffect(() => {
    const materiContent = AkademikData[matkul || ""];
    const filtered = materiContent?.filter(
      (el) => el.type === selectedOption && el.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredContent(filtered);
  }, [searchTerm, selectedOption, matkul]);

  return (
    <>
      <section className="flex-grow flex flex-col items-center bg-white min-h-screen justify-start w-full h-full overflow-x-hidden relative py-24">
        {/* Section 1 */}
        <section className="flex flex-col items-center justify-center w-full px-[4%] md:px-[8%] z-10">
          <div className="flex flex-row items-center justify-center w-full max-w-full mb-24">
            <Link to="../akademik/">
              <div className="mr-4 md:mr-8 hover:scale-[1.05] transition-transform duration-300">
                <img src="/Akademik/Back.svg" alt="Back" width={20} height={20} className="object-contain" />
              </div>
            </Link>
            <h1 className="font-Outfit font-extrabold text-[40px] sm:text-[100px] xl:text-[140px] tracking-normal text-[#101351] text-center lg:text-center leading-tight drop-shadow-[30px_10px_35px_rgba(0,0,0,0.25)]">
              {matkul}
            </h1>
          </div>
          {/* Search Bar */}
          <div className="relative w-full sm:w-[75%] lg:w-[60%] mb-8">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="border bg-[#EDECEC] px-3 py-2 rounded-[32px] pl-10 w-full"
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <img src="/Akademik/Search.svg" alt="My SVG" width={20} height={20} />
            </div>
          </div>
          {/* Selection */}
          <div className="flex w-full sm:w-[75%] lg:w-[60%] h-16 items-center justify-center flex-row mb-8">
            <button
              className={`w-full h-full ${
                selectedOption === "materi" ? "text-black border-b-4 border-black" : "text-[#999999] border-b-4 border-[#999999]"
              }`}
              onClick={() => setSelectedOption("materi")}>
              MATERI
            </button>
            <button
              className={`w-full h-full ${
                selectedOption === "soal" ? "text-black border-b-4 border-black" : "text-[#999999] border-b-4 border-[#999999]"
              }`}
              onClick={() => setSelectedOption("soal")}>
              BANK SOAL
            </button>
            <button
              className={`w-full h-full ${
                selectedOption === "tutorial"
                  ? "text-black border-b-4 border-black"
                  : "text-[#999999] border-b-4 border-[#999999]"
              }`}
              onClick={() => setSelectedOption("tutorial")}>
              TUTORIAL
            </button>
          </div>
          {/* Display Text Based on Selection */}
          {selectedOption && (
            <div className="w-full mt-8">
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-3 justify-items-center">
                {filteredContent?.map((el, index) => (
                  <div className="w-full" key={index}>
                    <AkademikCard2 className="bg-[#101351]" heading={el.title} driveLink={el.linkDrive} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Matkul;
