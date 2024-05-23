import { useEffect, useState } from "react";

// Import Swiper React components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

type ProgramKami = {
  imgUrl: string;
  name: string;
  description: string;
};

const ProgramKami = () => {
  const [data, setData] = useState<ProgramKami[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const pageData = [
        {
          imgUrl: "/bpa-stei-k-min.png",
          name: "Tutor Sebaya",
          description: "Ikut Tubay (Tutor Sebaya) dan dapatkan voucher IP 4 dari BPA akademik STEI-K pasti IP 4",
        },
        {
          imgUrl: "/bpa-stei-k-min.png",
          name: "Tutor Sebaya",
          description: "Ikut Tubay (Tutor Sebaya) dan dapatkan voucher IP 4 dari BPA akademik STEI-K pasti IP 4",
        },
        {
          imgUrl: "/bpa-stei-k-min.png",
          name: "Tutor Sebaya",
          description: "Ikut Tubay (Tutor Sebaya) dan dapatkan voucher IP 4 dari BPA akademik STEI-K pasti IP 4",
        },
      ];
      setData(pageData);
    };
    fetchData();
  }, []);

  return (
    <section className="font-inter w-full" data-aos="fade-up">
      <h1 className="text-center font-bold text-2xl lg:text-4xl xl:text-5xl pt-20">Program Kami | STEI-K 23</h1>
      <div className="w-full flex flex-row flex-wrap px-4 justify-center py-10 max-w-[1600px] mx-auto">
        <Swiper
          slidesPerView={1}
          speed={900}
          navigation={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Autoplay, Navigation, Pagination]}
          className="mySwiper"
          autoplay={{
            delay: 3000,
            disableOnInteraction: true,
          }}>
          {data?.map((el, i) => (
            <SwiperSlide key={el.imgUrl + i}>
              <div className="flex flex-col lg:flex-row w-0 min-w-full pb-8 px-12 md:py-10 md:px-20 gap-8">
                <img
                  src={el.imgUrl}
                  alt={el.imgUrl}
                  width={1200}
                  height={900}
                  className="h-full w-full lg:w-1/2 lg:max-w-[50%] object-cover select-none rounded-xl drop-shadow-md hover:drop-shadow-xl"
                />
                <div className="flex flex-col items-center justify-center text-center">
                  <p className="font-bold" style={{ fontSize: "40px" }}>
                    {el.name}
                  </p>
                  <p>{el.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProgramKami;
