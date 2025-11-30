import { teamMembers } from '../data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
const TeamCard = ({
  avatar,
  description,
  name,
  position,
  userName
}) => {
  return <div className="relative h-full rounded-md bg-white">
      <div className="absolute -top-[20%] start-0 h-24 translate-x-4 overflow-hidden rounded-md bg-white p-2">
        <img src={avatar} height={80} width={80} alt="avatar" className="max-h-full max-w-full rounded-md" />
      </div>
      <div className="px-6 pb-6 pt-16">
        <p className="font-medium text-gray-500">{userName}</p>
        <h3 className="mb-0.5 text-xl font-bold text-gray-800">{name}</h3>
        <p className="mb-4 font-medium text-gray-500">{position}</p>
        <p className="text-gray-500">{description}</p>
      </div>
    </div>;
};
const Team = () => {
  return <div id="team" className="bg-slate-50 py-24">
      <div className="container overflow-hidden">
        <div className="mb-16 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h5 className="mb-2 text-lg font-medium capitalize text-gray-800">
              Our <span className="font-semibold text-primary">Team</span>
            </h5>
            <h2 className="mb-1 text-3xl/snug font-bold text-gray-800">Meet our team</h2>
            <p className="mb-8 text-base text-gray-600">Nemo enim ipsam voluptatem that quia voluptas aut fugit </p>
          </div>
        </div>
        <div className="gap-2">
          <div className="-my-12 overflow-x-hidden py-12">
            <Swiper loop modules={[Pagination, Autoplay]} slidesPerView={1} spaceBetween={30} centeredSlides pagination={{
            el: '.swiper-pagination',
            clickable: true
          }} autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }} breakpoints={{
            400: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50
            }
          }} className="feedback-swiper max-h-full max-w-full !overflow-visible">
              {teamMembers.map((team, idx) => <SwiperSlide className="swiper-slide mb-12" key={idx}>
                  <TeamCard {...team} />
                </SwiperSlide>)}
              <div className="swiper-pagination !-start-0 z-10" />
            </Swiper>
          </div>
        </div>
      </div>
    </div>;
};
export default Team;