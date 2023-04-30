import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const Home = () => {
  const [travelDestinations, setTravelDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setTravelDestinations(data);
        setLoading(false);
      });
  }, []);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const activeDestination = travelDestinations[activeSlideIndex];
  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
  };
  if (loading) {
    return <h1>Loading....</h1>;
  }
  return (
    <>
      <div className="container grid mt-16 gap-2 w-[90%] mx-auto grid-cols-2">
        {/* Details Part */}
        <div className="text-white flex justify-center items-start flex-col pr-3">
          <h1 className="text-7xl font-bold">{activeDestination.title}</h1>
          <p className="my-3">
            {activeDestination?.description.slice(0, 200)}...
          </p>
          <button className=" inline-flex items-center gap-3 bg-primary px-6 py-2 rounded btn">
            Booking <AiOutlineArrowRight />
          </button>
        </div>
        <div className="">
          <Swiper
            effect={"coverflow"}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
              loop: true,
            }}
            pagination={true}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="mySwiper"
            onSlideChange={handleSlideChange}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
          >
            {travelDestinations.map((destination) => (
              <SwiperSlide key={destination.id}>
                {({ isActive }) => (
                  <div
                    className={`relative ${
                      isActive && "border-[5px]"
                    } border-primary h-[500px]  rounded-xl w-full bg-cover bg-center`}
                  >
                    <Link to={`/booking/${destination.id}`}>
                      <img
                        src={destination?.image}
                        alt={destination?.title}
                        className="w-full h-full object-cover"
                      />
                    </Link>
                    <div className="absolute top-72 left-10  flex flex-col items-center justify-center text-white text-center  transition-opacity duration-300">
                      <h2 className="text-4xl font-bold text-center">
                        {destination?.title}
                      </h2>
                    </div>
                  </div>
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Home;
