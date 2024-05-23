// components/Card.tsx
import React from "react";
import { NavLink } from "react-router-dom";

interface AkademikCard2Props {
  heading: string;
  driveLink: string;
  className?: string;
}

const AkademikCard2: React.FC<AkademikCard2Props> = ({ heading, driveLink, className }) => {
  return (
    <div
      className={`flex flex-col justify-between w-full h-fit rounded-[24px] border-white border-2 overflow-hidden shadow-lg ${className}`}>
      <div className="px-[5%] py-4 leading-tight">
        <div className="font-bold text-white text-xl md:text-2xl">{heading}</div>
      </div>
      <NavLink
        target="_blank"
        to={driveLink}
        className="hover:scale-[1.02] transition-transform cursor-pointer duration-300 flex flex-row items-center justify-end gap-2 text-white mt-2 lg:mt-12 mr-6 mb-4">
        See Content
        <div>
          <img src="/Akademik/Right.svg" alt="Next" width={8} height={8} className="object-contain" />
        </div>
      </NavLink>
    </div>
  );
};

export default AkademikCard2;
