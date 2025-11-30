import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
import { eventSpeakers } from '../data';
const SpeakerCard = ({
  avatar,
  name,
  role
}) => {
  return <div className="group text-center">
      <div className="relative mx-auto inline-block overflow-hidden rounded-lg">
        <img src={avatar} alt="" />
        <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-transparent to-black opacity-0 duration-500 group-hover:opacity-100" />
        <div className="absolute -bottom-20 end-0 start-0 duration-500 group-hover:bottom-5">
          <ul className="mb-4 space-x-2">
            <li className="inline-block">
              <Link to="" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-center align-middle text-base tracking-wide duration-500">
                <IconifyIcon icon="lucide:facebook" className="h-5 w-5 fill-primary/25 text-primary" />
              </Link>
            </li>
            <li className="inline-block">
              <Link to="" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-center align-middle text-base tracking-wide duration-500">
                <IconifyIcon icon="lucide:instagram" className="h-5 w-5 fill-pink-500/25 text-pink-500" />
              </Link>
            </li>
            <li className="inline-block">
              <Link to="" className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white text-center align-middle text-base tracking-wide duration-500">
                <IconifyIcon icon="lucide:twitter" className="h-5 w-5 fill-sky-500/25 text-sky-500" />
              </Link>
            </li>
          </ul>
          <p className="text-base font-semibold text-white">{role}</p>
        </div>
      </div>
      <Link to="" className="mt-3 block text-lg font-semibold duration-500 group-hover:text-primary">
        {name}
      </Link>
    </div>;
};
const Speakers = () => {
  return <section id="speakers" className="py-20">
      <div className="container">
        <div className="mb-16 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h5 className="mb-2 text-lg font-medium capitalize text-gray-800">
              Our <span className="font-semibold text-primary">Speakers</span>
            </h5>
            <h2 className="mb-1.5 text-3xl/snug font-bold capitalize text-gray-800">Event Speakers</h2>
            <p className="max-w-xl text-base font-medium text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem aperiam.
            </p>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-[30px] md:grid-cols-12">
          {eventSpeakers.map((speaker, idx) => <div className="md:col-span-6 lg:col-span-3" key={idx}>
              <SpeakerCard {...speaker} />
            </div>)}
        </div>
      </div>
    </section>;
};
export default Speakers;