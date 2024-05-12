export type memberBPA = {
  name: string;
  position?: string;
  imgUrl: string;
  hideName?: boolean;
};
const BPACard = ({ imgUrl, name, position, hideName }: memberBPA) => {
  return (
    <div className="w-[38%] sm:w-[18%] min-w-[200px] max-w-[200px] h-auto text-center drop-shadow-xl border-4 rounded-xl flex flex-col bg-slate-50 border-slate-50 hover:scale-110 duration-150 ease-in hover:shadow-lg hover:font-semibold flex-grow-0 aspect-[3/4]">
      <img
        src={imgUrl || "/default-image.svg"}
        alt={name}
        width={300}
        height={700}
        className={`object-cover w-full ${hideName ? "h-full" : "h-auto"}`}
      />
      {!hideName && (
        <div className="flex justify-center items-center flex-grow">
          <p className="border-t-2 border-slate-300 px-2 py-3">{name}</p>
          {position && <p className="border-t-2 border-slate-300 px-2 py-3">{position}</p>}
        </div>
      )}
    </div>
  );
};

export default BPACard;
