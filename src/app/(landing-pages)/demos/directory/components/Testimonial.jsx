import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Swiper, SwiperSlide } from 'swiper/react';
import { testimonialsData } from '../data';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
const TestimonialCard = ({
  avatar,
  description,
  name,
  position
}) => {
  return <div className="flex flex-col items-center justify-center text-center">
      <img src={avatar} alt="cta-img" className="h-24 w-24 rounded-full" />
      <h3 className="mt-5 text-lg font-bold text-gray-800">{name}</h3>
      <p className="text-base font-semibold text-gray-500">{position}, USA</p>
      <div className="mt-5 flex items-center justify-center">
        {Array(Math.floor(5)).fill(0).map((_star, idx) => <IconifyIcon icon="lucide:star" className="star-fill inline h-5 w-5 fill-amber-300 text-amber-300" key={idx} />)}
      </div>
      <p className="mt-5 max-w-2xl text-base font-medium">{description}</p>
    </div>;
};
const Testimonial = () => {
  return <section id="testimonial" className="py-20">
      <div className="container">
        <div className="mb-14 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h2 className="mb-1 text-3xl/snug font-bold capitalize text-gray-800">Clients Testimonials</h2>
            <p className="text-base text-gray-600">Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem aperiam.</p>
          </div>
        </div>
        <Swiper modules={[Navigation, Autoplay]} slidesPerView={1} spaceBetween={30} centeredSlides loop navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }} autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }} wrapperClass="-z-10">
          {testimonialsData.map((testimonial, idx) => <SwiperSlide key={idx}>
              <TestimonialCard {...testimonial} />
            </SwiperSlide>)}
          <div className="hidden md:block">
            <div className="swiper-button-prev ms-32 after:hidden" tabIndex={0} role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-88861593b321a7d3">
              <div className="relative">
                <span className="absolute -start-1.5 top-1/2 -z-10 h-8 w-8 -translate-y-1/2 rounded-full border-2 border-primary" />
                <IconifyIcon height={40} width={40} icon="lucide:move-left" className="text-gray-600" />
              </div>
            </div>
            <div className="swiper-button-next me-32 after:hidden" tabIndex={0} role="button" aria-label="Next slide" aria-controls="swiper-wrapper-88861593b321a7d3">
              <div className="relative">
                <span className="absolute -end-1.5 top-1/2 -z-10 h-8 w-8 -translate-y-1/2 rounded-full border-2 border-primary" />
                <IconifyIcon height={40} width={40} icon="lucide:move-right" className="text-gray-600" />
              </div>
            </div>
          </div>
        </Swiper>
      </div>
    </section>;
};
export default Testimonial;