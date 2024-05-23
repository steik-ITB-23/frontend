// components/Card.tsx
import React from "react";
import { Link } from "react-router-dom";

interface AkademikCardProps {
  imageUrl: string;
  heading: string;
  children: string;
  LinkTo: string;
  className?: string;
}

const AkademikCard: React.FC<AkademikCardProps> = ({ imageUrl, heading, children, LinkTo, className }) => {
  return (
    <Link to={LinkTo}>
      <div
        className={`hover:scale-[1.02] transition-transform duration-300 w-full rounded-[24px] border-white border-2 overflow-hidden shadow-lg ${className}`}>
        <div className="bg-white m-3 rounded-[12px] overflow-hidden items-center">
          <div className="relative h-[100px] min-[460px]:h-[150px] md:h-60 mt-6 justify-center items-center">
            <img src={imageUrl} alt={heading} className="object-contain h-full w-full" loading="lazy" />
          </div>
          <div className="px-[5%] py-4 leading-tight">
            {children}
            <div className="overflow-hidden whitespace-nowrap w-full">
              <div className="font-bold text-xl md:text-2xl truncate">{heading}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AkademikCard;
