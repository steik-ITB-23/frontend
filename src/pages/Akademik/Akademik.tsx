import AkademikCard from "../../components/akademik/AkademikCard";
import Footer from "../../components/universal/Footer";

const Akademik = () => {
  return (
    <>
      <section className="flex-grow flex flex-col items-center bg-[#000141] justify-center w-full max-w-full max-h-full overflow-x-hidden relative">
        {/* Section 1 */}
        <section className="relative h-[82vh] flex flex-col items-start justify-center w-full max-w-[1400px] z-10 my-24 px-4 md:px-10">
          <div className="absolute right-0 inset-y-0 h-full flex items-center justify-center rounded-full bg-[radial-gradient(169.40%_89.55%_at_94.76%_6.29%,rgba(78,36,115,0.40)_0%,rgba(255,255,255,0.00)_100%)]">
            <img src="/Akademik/Mat.svg" alt="My SVG" className="h-[70%] w-auto" />
          </div>

          <div className="font-inter text-[12px] lg:text-[24px] w-full lg:w-[60%] text-white font-normal tracking-[1px] leading-tight text-center lg:text-left mb-24">
            <h1 className="font-Outfit font-extrabold text-[50px] sm:text-[100px] tracking-normal text-white text-center lg:text-left leading-tight drop-shadow-[30px_10px_35px_rgba(0,0,0,0.25)]">
              AKADEMIK
            </h1>
            Akses seluruh materi TPB STEI mulai dari rangkuman materi, latihan soal, tubay, UTS, UAS, praktikum, tugas besar dan
            seluruh keperluan akademik lainnya!
          </div>
        </section>
        {/* Section 1 */}
        {/* <section className="flex flex-col items-center justify-center w-full px-[4%] md:px-[8%] z-10 mb-20">
          <div className="flex flex-row items-center justify-center w-full max-w-full mx-24 mb-8">
            <div className="">
              <img src="/Akademik/left.svg" alt="My SVG" width={8} height={8} />
            </div>
            <div className="font-Mo text-[24px] text-white mx-4 font-bold tracking-[1px] leading-tight text-left">AKADEMIK</div>
            <hr className="border-white border-solid border-t-2 w-full" />
          </div>
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="mb-6 font-Outfit font-extrabold text-[55px] sm:text-[80px] tracking-normal text-white text-left leading-tight drop-shadow-[30px_10px_35px_rgba(0,0,0,0.25)]">
              SEMESTER 1
            </h1>
            <div className="w-full grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-6 justify-items-center">
              <div className="w-full">
                <AkademikCard imageUrl="/Akademik/Mat.svg" heading="Matematika IA" LinkTo="../">
                  MA1101
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard imageUrl="/Akademik/Fis.svg" heading="Fisika Dasar IA" LinkTo="../">
                  FI1101
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard imageUrl="/Akademik/Indo.svg" heading="Tata Karya Tulis Ilmiah" LinkTo="../">
                  KU1101
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard imageUrl="/Akademik/Ing.svg" heading="Bahasa Inggris" LinkTo="../">
                  KU1024
                </AkademikCard>
              </div>
              <div className="w-full col-start-auto 2xl:col-start-2">
                <AkademikCard imageUrl="/Akademik/Prd.svg" heading="Pengantar Rekayasa dan Design" LinkTo="../">
                  KU1202
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard imageUrl="/Akademik/Pengkom.svg" heading="Pengenalan Komputasi" LinkTo="../">
                  KU1102
                </AkademikCard>
              </div>
            </div>
          </div>
        </section> */}
        {/* section 2 */}
        <section className="flex flex-col items-center justify-center w-full px-[4%] md:px-[8%] z-10 mb-40">
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="my-6 font-Outfit font-extrabold text-[55px] sm:text-[80px] tracking-normal text-white text-left leading-tight drop-shadow-[30px_10px_35px_rgba(0,0,0,0.25)]">
              SEMESTER 2
            </h1>
            <div className="w-full grid grid-cols-2 px-4 md:px-0 lg:grid-cols-3 2xl:grid-cols-4 gap-3 md:gap-6 justify-items-center">
              <div className="w-full">
                <AkademikCard imageUrl="/Akademik/Mat.svg" heading="Matematika IIA" LinkTo="/akademik/matematika-2a">
                  MA1201
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard imageUrl="/Akademik/Fis.svg" heading="Fisika Dasar IIA" LinkTo="/akademik/fisika-dasar-2a">
                  FI1201
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard imageUrl="/Akademik/Kim.svg" heading="Kimia Dasar B" LinkTo="/akademik/kimia-dasar-b">
                  KU1002
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard
                  imageUrl="/Akademik/Indo.svg"
                  heading="Komputasi dan Masyarakat"
                  LinkTo="/akademik/komputasi-dan-masyarakat">
                  II1101
                </AkademikCard>
              </div>
              <div className="w-full col-start-auto 2xl:col-start-2">
                <AkademikCard imageUrl="/Akademik/Or.svg" heading="Olah Raga" LinkTo="/akademik/olah-raga">
                  KU1001
                </AkademikCard>
              </div>
              <div className="w-full">
                <AkademikCard imageUrl="/Akademik/Pengkom.svg" heading="Dasar Pemrograman" LinkTo="/akademik/dasar-pemrograman">
                  IF1210
                </AkademikCard>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default Akademik;
