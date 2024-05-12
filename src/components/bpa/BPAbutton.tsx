import { bpaType } from "./BPAinfo";
import { getSlug } from "../../lib/utils/stringManipulation";
import { HashLink as NavLink } from "react-router-hash-link";

const BPAbutton = ({ data }: { data: bpaType }) => {
  return (
    <NavLink
      smooth
      to={`/tentang-bpa/#${getSlug(data.name)}`}
      className="border-[1px] rounded-full border-[#101351] md:border-slate-200 h-fit px-2 py-[2px] hover:bg-slate-50/50 ease-in duration-75">
      <p className="button">
        <span className="text-[#101351] md:text-white text-[16px]">{data.name}</span>{" "}
        {data.members.length > 1 && <span className="font-bold text-[#79B5EE]">{data.members.length}</span>}
      </p>
    </NavLink>
  );
};

export default BPAbutton;
