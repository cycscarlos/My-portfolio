import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/img/avatar1.jpg";
import AVTR2 from "../../assets/img/avatar2.jpg";
import AVTR3 from "../../assets/img/avatar3.jpg";
import AVTR4 from "../../assets/img/avatar4.jpg";

// import Swiper core and required modules
import { Pagination, Navigation } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Navigation, Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5>Ernestina Achiever</h5>
          <small className="client__review">
            The service provided is really fast and effective, the advice
            provided give solution to all our questions in the shortest possible
            time, our portal was created with the purpose of providing an online
            educational service, both informative and interactive in favor of
            our valued community.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar One" />
          </div>
          <h5>Joseph Key</h5>
          <small className="client__review">
            Thank you, you are very professional! I am very happy with the work
            you did in the creation of my website, it looked very good. You were
            able to capture my ideas by making improvements to them, thank you
            for your advice and after-sales service that makes the difference.
            Best regards and success. d together, giving us all the advice for
            our website that we required.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar One" />
          </div>
          <h5>Arthur Taylor</h5>
          <small className="client__review">
            My experience with your services was very good, I must highlight the
            speed, initiative, commitment and punctuality in every delivery.
            Your after-sales support maintains that quality and promptness in
            the answers. We are currently using systems designed together and it
            is working very well. I highly recommend them.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar One" />
          </div>
          <h5>Juliette Aznard</h5>
          <small className="client__review">
            Thanks to you, my company's website looks great, I receive calls
            from all over the country, requesting our services. This new image
            has helped me a lot, I can also upload images in real time. That's
            why I highly recommend you for your quality and your advice.
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
