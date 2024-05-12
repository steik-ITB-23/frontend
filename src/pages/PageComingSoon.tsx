import ComingSoon from "../components/universal/ComingSoon";
import Footer from "../components/universal/Footer";

const PageComingSoon = () => {
  return (
    <>
      <section className="flex-grow flex flex-col items-center justify-center w-full max-w-full overflow-x-clip h-fit min-h-[calc(100vh-4rem)]">
        <section className="flex-grow flex items-center bg-slate-100 justify-center w-full px-4">
          <ComingSoon />
        </section>
        <Footer />
      </section>
    </>
  );
};

export default PageComingSoon;
