import { HashLink as NavLink } from "react-router-hash-link";

const BPASteik23 = () => {
  return (
    <section
      className="max-w-[1200px] w-full mx-auto flex flex-col-reverse gap-4 md:flex-row pt-10 pb-20 justify-between font-inter px-4 md:px-8"
      data-aos="fade-up">
      <div className="flex flex-col w-full md:w-[48%] items-start gap-4 justify-center">
        <h2 className="text-5xl font-bold">BPA STEI-K 2023</h2>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
        <NavLink smooth to="/tentang-bpa">
          <button className="bg-blue-900 px-4 py-2 text-white rounded-md hover:drop-shadow-xl hover:brightness-110">
            <p className="text-xl">Meet Our Team</p>
          </button>
        </NavLink>
      </div>
      <div className="w-full md:w-[48%] h-full">
        <img
          src="/bpa-stei-k-min.png"
          alt="/bpa-stei-k-min.png"
          width={1200}
          height={900}
          className="h-full w-full object-cover select-none rounded-xl drop-shadow-md hover:drop-shadow-xl"
        />
      </div>
    </section>
  );
};

export default BPASteik23;
