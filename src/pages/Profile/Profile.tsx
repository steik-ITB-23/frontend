import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Footer from "../../components/universal/Footer";
import { MdModeEditOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
// import { RiAdminFill } from "react-icons/ri";

const Profile = () => {
  const { nim } = useParams();

  useEffect(() => {
    console.log({ nim });
  }, [nim]);

  return (
    <div className="h-full w-full flex flex-col min-h-screen justify-between bg-slate-50">
      <div className="relative w-full hidden sm:block sm:h-[20rem] border-b-[1px] border-black">
        <img
          src="https://www.treehugger.com/thmb/GH_5-JBOh-PsHJZ2DYyWXNs-KII=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-493238552-9772c8d6c81f48be8f9360881f811a29.jpg"
          className="object-cover h-full w-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-black/0" />
      </div>
      <main className="grow p-4 flex flex-col gap-4 max-w-[1200px] mx-auto w-full">
        <section className="relative w-full flex flex-col">
          <div className="sm:absolute top-0 sm:translate-y-[-80%] bg-white rounded-xl left-0 w-full mx-auto max-w-[280px] h-auto aspect-[6/7] shadow-md shadow-slate-700 border-[1px] border-black overflow-hidden">
            <img
              src="https://i0.wp.com/global.ac.id/wp-content/uploads/2015/04/speaker-3-v2.jpg?fit=768%2C768&ssl=1"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="w-fit sm:ml-[320px] sm:absolute top-0 left-0 sm:translate-y-[-130%] sm:text-white p-4 sm:p-2 rounded-md text-center mx-auto md:mr-0 sm:text-left">
            <p className="font-extrabold tracking-wider">19623271</p>
            <h1 className="text-3xl font-bold text-balance">Yonatan Edward Njoto</h1>
          </div>
          <div className="w-fit sm:ml-[320px] p-4 sm:p-2 mx-auto flex gap-4 flex-wrap justify-center sm:justify-start">
            <FaLinkedin size={40} />
            <button className="bg-orange-600 px-4 py-2 rounded-lg text-white font-bold uppercase flex items-center gap-2 hover:brightness-90">
              <MdModeEditOutline />
              Edit
            </button>
            {/* <button className="bg-blue-600 px-4 py-2 rounded-lg text-white font-bold uppercase flex items-center gap-2 hover:brightness-90">
              <RiAdminFill />
              Admin Page
            </button> */}
          </div>
          <div className="py-16 px-4">
            <h2 className="text-xl uppercase tracking-wide text-blue-800">Tentang Saya</h2>
            <article className="space-y-4">
              <p className="text-justify">
                With an enormous passion for programming ignited since high school, I have delved deep into the captivating realm
                of algorithms and competitive programming. This immersive journey has sharpened my problem-solving abilities and
                developed my curiosity to explore current world problems. Motivated by an unwavering commitment to continuous
                learning and professional growth, I eagerly enrolled in Hacktiv8 to gain a comprehensive understanding of web
                development and explore the intricate details of system architecture.
              </p>
              <p className="text-justify">
                Backed by a proven track record of excelling in coding competitions, I am confident that my passionate dedication
                and unwavering determination to conquer new challenges will make me an invaluable asset to any team or project.
                Embracing each opportunity as a stepping stone towards excellence, I am eager to contribute my skills and
                enthusiasm to create innovative solutions that will shape the future of an industry.
              </p>
            </article>
            <h2 className="pt-8 text-xl uppercase tracking-wide text-blue-800">Pilihan Jurusan</h2>
            <ol className="list-decimal pl-8 space-y-1 py-1">
              <li>Teknik Informatika - Ganesha</li>
              <li>Teknik Informatika - Ganesha</li>
              <li>Teknik Informatika - Ganesha</li>
              <li>Teknik Informatika - Ganesha</li>
            </ol>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
