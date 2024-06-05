import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../components/universal/Footer";
import { MdModeEditOutline } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
// import { RiAdminFill } from "react-icons/ri";
import { GoPersonFill } from "react-icons/go";
import useFetch from "../../lib/hooks/useFetch";
import axios from "axios";
import { BACKEND_URL } from "../../lib/constant";
import { Link } from "react-router-dom";

interface IUser {
  _id: string;
  nim: string;
  displayName: string;
  profilePicUrl: string;
  microsoftId: string;
  createdAt: string;
  lastOnline: string;
}
const Profile = () => {
  const { nim } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(async () => await axios.get<IUser>(`${BACKEND_URL}/users/${nim}`));

  useEffect(() => {
    if (error) {
      navigate("/");
    }
  }, [error, navigate]);

  return (
    <div className="h-full w-full flex flex-col min-h-screen justify-between bg-slate-50">
      <div className="relative w-full hidden sm:block sm:h-[20rem] border-b-[1px] border-black">
        <img src="https://www.itb.ac.id/files/images/1590135987.JPG" className="object-cover h-full w-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-black/0" />
      </div>
      <main className="grow p-4 flex flex-col gap-4 max-w-[1200px] mx-auto w-full">
        <section className="relative w-full flex flex-col">
          <div className="sm:absolute top-0 sm:translate-y-[-80%] bg-white rounded-xl left-0 w-full mx-auto max-w-[280px] h-auto aspect-[6/7] shadow-md shadow-slate-700 border-[1px] border-black overflow-hidden">
            {data?.profilePicUrl || loading ? (
              <img src={data?.profilePicUrl} className="object-cover h-full w-full" />
            ) : (
              <GoPersonFill style={{ width: "100%", height: "100%", objectFit: "contain", color: "#313131" }} />
            )}
          </div>
          <div className="w-fit sm:ml-[320px] sm:absolute top-0 left-0 sm:translate-y-[-130%] sm:text-white p-4 sm:p-2 rounded-md text-center mx-auto md:mr-0 sm:text-left">
            <p className="font-extrabold tracking-wider">{loading ? "nim" : data?.nim}</p>
            <h1 className="text-3xl font-bold text-balance">{loading ? "Nama Saya Kai Cenat" : data?.displayName}</h1>
          </div>
          <div className="w-fit sm:ml-[320px] p-4 sm:p-2 mx-auto flex gap-4 flex-wrap justify-center sm:justify-start">
            <Link to="https://www.linkedin.com/in/yonatan-njoto" target="_blank">
              <FaLinkedin size={40} />
            </Link>
            <button className="bg-orange-600 px-4 py-2 rounded-lg text-white font-bold uppercase flex items-center gap-2 hover:brightness-90">
              <MdModeEditOutline />
              Edit Social Media
            </button>
            {/* <button className="bg-blue-600 px-4 py-2 rounded-lg text-white font-bold uppercase flex items-center gap-2 hover:brightness-90">
              <RiAdminFill />
              Admin Page
            </button> */}
          </div>
          <div className="py-16 space-y-8">
            <section className="border-[1px] border-slate-600 rounded-md shadow-lg p-4 space-y-2">
              <h2 className="text-xl uppercase tracking-wide text-blue-800">Tentang Saya</h2>
              <article className="space-y-4">
                <p className="text-justify">
                  With an enormous passion for programming ignited since high school, I have delved deep into the captivating
                  realm of algorithms and competitive programming. This immersive journey has sharpened my problem-solving
                  abilities and developed my curiosity to explore current world problems. Motivated by an unwavering commitment to
                  continuous learning and professional growth, I eagerly enrolled in Hacktiv8 to gain a comprehensive
                  understanding of web development and explore the intricate details of system architecture.
                </p>
                <p className="text-justify">
                  Backed by a proven track record of excelling in coding competitions, I am confident that my passionate
                  dedication and unwavering determination to conquer new challenges will make me an invaluable asset to any team
                  or project. Embracing each opportunity as a stepping stone towards excellence, I am eager to contribute my
                  skills and enthusiasm to create innovative solutions that will shape the future of an industry.
                </p>
              </article>
            </section>
            <section className="border-[1px] border-slate-600 rounded-md shadow-lg p-4 space-y-2">
              <h2 className="text-xl uppercase tracking-wide text-blue-800">Pilihan Jurusan</h2>
              <ol className="list-decimal pl-8 space-y-1 py-1">
                <li>Teknik Informatika - Ganesha</li>
                <li>Teknik Informatika - Ganesha</li>
                <li>Teknik Informatika - Ganesha</li>
                <li>Teknik Informatika - Ganesha</li>
              </ol>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
