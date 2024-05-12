import { useEffect, useState } from "react";

// Import Swiper React components & modules
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

type SliderData = {
  imgUrl: string;
  topic: string;
  lable: string;
};

const SliderHome = () => {
  const [data, setData] = useState<SliderData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const pageData = [
        {
          imgUrl: "/tpbcup-basket-putra.png",
          topic: "TPB Cup 2024",
          lable: "Bola Basket Putra - STEI",
        },
        {
          imgUrl: "/TPB-Cup-2024-Opening-min.png",
          topic: "TPB Cup 2024 Opening",
          lable: "Massa PERKARA",
        },
        {
          imgUrl: "/tpbcup-basket-putri-min.png",
          topic: "TPB Cup 2024",
          lable: "Bola Basket Putri - STEI",
        },
      ];
      setData(pageData);
    };
    fetchData();
  }, []);

  return (
    <section className="h-[140vw] max-h-screen w-full select-none" data-aos="fade-up">
      <Swiper
        slidesPerView={1}
        speed={900}
        modules={[Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}>
        {data?.map((slide, i) => (
          <SwiperSlide key={slide.imgUrl + i}>
            <div className="relative h-full w-full max-w-full">
              <div className="absolute h-full w-[100vw] left-0 p-4 text-white font-outfit flex flex-col-reverse bg-gradient-to-t from-black/60 to-black/10">
                <p className="text-white font-bold" style={{ fontSize: "30px" }}>
                  {slide.topic}
                </p>
                <p className="text-white font-bold" style={{ fontSize: "40px" }}>
                  {slide.lable}
                </p>
              </div>
              <img
                src={slide.imgUrl}
                alt={slide.topic + slide.lable}
                width={2400}
                height={1800}
                className="h-full w-full object-cover select-none"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderHome;
