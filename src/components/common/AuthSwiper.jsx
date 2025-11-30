import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import authImg from '@/assets/images/auth-img.jpg';
import 'swiper/css';
import 'swiper/css/pagination';
const AuthSwiper = () => {
  return <div className="hidden lg:block">
      <div className="relative h-full overflow-hidden">
        <img src={authImg} alt="auth" className="max-h-full max-w-full -scale-x-100 transform" />
        <div className="absolute inset-0 bg-black/70">
          <div className="flex h-full items-end justify-center">
            <Swiper loop modules={[Autoplay, Navigation, Pagination]} autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }} navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }} pagination={{
            clickable: true,
            el: '.swiper-pagination'
          }} className="auth-swiper rounded-xl">
              <SwiperSlide className="rounded-xl">
                <div className="flex h-full items-end justify-center">
                  <div className="mb-10 p-6 text-center">
                    <h5 className="mb-3 text-xl font-bold text-white">Start journey with us.</h5>
                    <p className="text-base font-medium text-gray-300">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="rounded-xl">
                <div className="flex h-full items-end justify-center">
                  <div className="mb-10 p-6 text-center">
                    <h5 className="mb-3 text-xl font-bold text-white">Let&apos;s help to run your buiness.</h5>
                    <p className="text-base font-medium text-gray-300">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="rounded-xl">
                <div className="flex h-full items-end justify-center">
                  <div className="mb-10 p-6 text-center">
                    <h5 className="mb-3 text-xl font-bold text-white">Change the quality of your buiness.</h5>
                    <p className="text-base font-medium text-gray-300">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium.</p>
                  </div>
                </div>
              </SwiperSlide>
              <div className="swiper-pagination" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>;
};
export default AuthSwiper;