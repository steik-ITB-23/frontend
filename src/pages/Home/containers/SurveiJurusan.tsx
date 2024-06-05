import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import axios from "axios";
import { BACKEND_URL } from "../../../lib/constant";

const SurveiJurusan = () => {
  const options = [
    { value: "135-Ganesha", label: "135 - Teknik Informatika - Ganesha" },
    { value: "135-Jatinangor", label: "135 - Teknik Informatika - Jatinangor" },
    { value: "182-Ganesha", label: "182 - Sistem dan Teknologi Informasi - Ganesha" },
    { value: "182-Jatinangor", label: "182 - Sistem dan Teknologi Informasi - Jatinangor" },
  ];
  const [selectedValues, setSelectedValues] = useState<string[]>(Array(4).fill(""));
  const [dropdownOpenIndex, setDropdownOpenIndex] = useState<number | null>(null);
  const [hoveredOption, setHoveredOption] = useState<string | null>(null);

  const handleSelectChange = (index: number, value: string) => {
    const newSelectedValues = [...selectedValues];
    newSelectedValues[index] = value;

    // Check for duplicates and blank out the first occurrence if found
    const firstDuplicateIndex = newSelectedValues.findIndex((val, idx) => val === value && idx !== index);
    if (firstDuplicateIndex !== -1) {
      newSelectedValues[firstDuplicateIndex] = "";
    }

    setSelectedValues(newSelectedValues);
    setDropdownOpenIndex(null); // Close the dropdown after selecting an option
  };

  const getAvailableOptions = (index: number) => {
    const selectedBefore = selectedValues.slice(0, index);
    return options.filter((option) => !selectedBefore.includes(option.value));
  };

  const handleMouseEnterOption = (optionValue: string) => {
    setHoveredOption(optionValue);
  };

  const handleMouseLeaveOption = () => {
    setHoveredOption(null);
  };

  const handleDropdownToggle = (index: number) => {
    setDropdownOpenIndex(dropdownOpenIndex === index ? null : index);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(selectedValues);
    if (selectedValues.some((value) => value === "")) {
      alert("Please select an option for each choice.");
      return;
    }

    try {
      const response = await axios.post(
        BACKEND_URL + "/pilihan",
        { selections: selectedValues },
        {
          headers: {
            "Content-Type": "application/json",
            token: localStorage.getItem("access_token"),
            // Include authentication token if required
            // "Authorization": "Bearer YOUR_TOKEN_HERE",
          },
        }
      );

      if (response.status === 201) {
        alert("Form submitted successfully!");
        // Clear form or handle successful submission
        setSelectedValues(Array(4).fill(""));
      } else {
        alert("Error submitting form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting form");
    }
  };

  return (
    <section className="font-inter w-full" data-aos="fade-up">
      <h1 className="text-center font-bold text-2xl lg:text-4xl xl:text-5xl pt-20">Survei Jurusan</h1>
      <div className="w-full max-w-[1200px] flex flex-row flex-wrap px-4 justify-center items-center mx-auto">
        <div className="px-4 md:px-6 pt-6 md:pt-20 pb-10 w-full h-fit font-outfit">
          <div className="p-2 text-center space-y-8 py-6 w-full max-w-[1000px] mx-auto rounded-lg drop-shadow-xl bg-[#E9EBF8] hover:drop-shadow-2xl border-[1px] border-slate-400">
            <p className="text-lg md:text-xl xl:text-2xl">
              Untuk keperluan pengambilan data, kami mohon agar anda memasukkan pilihan jurusan anda ke seleksi dibawah ini.
              Terima kasih.
            </p>
            <form className="w-full flex flex-col gap-2 max-w-[1000px] mx-auto px-4" onSubmit={handleSubmit}>
              {[...Array(4)].map((_, index) => (
                <div key={index} className="relative flex gap-2 w-full mx-auto">
                  <label className="self-center">Pilihan {index + 1}: </label>
                  <div className="flex-grow relative" onClick={() => handleDropdownToggle(index)}>
                    <div className="bg-white p-2 border border-gray-300 cursor-pointer flex justify-between items-center">
                      {selectedValues[index]
                        ? options.find((option) => option.value === selectedValues[index])?.label
                        : "Select an option"}
                      <IoMdArrowDropdown />
                    </div>
                    {dropdownOpenIndex === index && (
                      <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 z-10">
                        {getAvailableOptions(index).map((option) => (
                          <div
                            key={option.value}
                            onClick={() => handleSelectChange(index, option.value)}
                            onMouseEnter={() => handleMouseEnterOption(option.value)}
                            onMouseLeave={handleMouseLeaveOption}
                            className={`p-2 cursor-pointer ${hoveredOption === option.value ? "bg-blue-300" : ""}`}>
                            {option.label}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
              <button
                type="submit"
                className="bg-blue-800 rounded-full border-2 border-black cursor-pointer grow-0 w-fit mx-auto mt-6">
                <p className="text-white px-5 py-1">Simpan</p>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurveiJurusan;
