import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import testimonials from "../../data/testimonialsData";

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">

      <div className="container mx-auto px-6">

        <div className="text-center">

          <span className="inline-block rounded-full bg-blue-100 px-5 py-2 text-blue-600 font-semibold">
            CLIENT TESTIMONIALS
          </span>

          <h2 className="mt-5 text-5xl font-bold text-slate-900">
            What Our Clients Say
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-slate-500">
            We believe in building long-term relationships through quality,
            transparency, and timely delivery.
          </p>

        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{
            delay: 4000,
          }}
          pagination={{
            clickable: true,
          }}
          spaceBetween={30}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
          className="mt-16"
        >
          {testimonials.map((item) => (
            <SwiperSlide key={item.id}>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                <FaQuoteLeft className="text-4xl text-blue-600" />

                <p className="mt-6 text-slate-600 leading-8">
                  {item.review}
                </p>

                <div className="mt-6 flex">

                  {[...Array(item.rating)].map((_, index) => (
                    <FaStar
                      key={index}
                      className="mr-1 text-yellow-400"
                    />
                  ))}

                </div>

                <div className="mt-8 flex items-center">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-16 w-16 rounded-full object-cover border-4 border-blue-100"
                  />

                  <div className="ml-4">

                    <h4 className="text-lg font-bold">
                      {item.name}
                    </h4>

                    <p className="text-blue-600 text-sm">
                      {item.position}
                    </p>

                    <p className="text-slate-500 text-sm">
                      {item.company}
                    </p>

                    <span className="mt-1 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs text-blue-600">
                      {item.project}
                    </span>

                  </div>

                </div>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>

      </div>

    </section>
  );
}