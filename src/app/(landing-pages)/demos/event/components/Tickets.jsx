import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { currency } from '@/common/constants';
import { cn } from '@/helpers/cn';
import { ticketPricing } from '../data';
import { Link } from 'react-router-dom';
const TicketCard = ({
  avatar,
  description,
  features,
  name,
  price,
  title,
  isPopular
}) => {
  return <div className="relative rounded-lg border-b-2 border-b-primary bg-white transition-all duration-500 hover:-translate-y-3">
      {isPopular && <div className="absolute end-0 top-2 inline-flex items-center gap-2 rounded-s-full bg-primary px-2 py-1 text-center text-sm font-semibold text-white">
          <IconifyIcon icon="uil:link" className="text-base/none" />
          Most Populer
        </div>}
      <div className="p-6">
        <h3 className="mb-10 text-4xl font-bold text-gray-800">
          {currency}
          {price}
          <sub className="text-lg">/ Day</sub>
        </h3>
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="font-nunito text-base font-semibold text-gray-600">Speaker</p>
            <h5 className="text-lg font-bold text-black">{name}</h5>
          </div>
          <div className="inline-flex h-20 w-20 items-center justify-center overflow-hidden rounded-full border border-gray-300 bg-gray-100 p-1">
            <img src={avatar} alt="avatar" className="max-h-full max-w-full rounded-full" />
          </div>
        </div>
        <div className="mb-6">
          <Link to="" className="text-lg font-bold hover:text-primary">
            {title}
          </Link>
          <p className="mt-2 font-medium text-gray-500">{description}</p>
        </div>
        <ul className="mb-6">
          {features.map((feature, idx) => <li className="mb-4 flex items-center gap-2 text-base font-medium" key={idx}>
              <IconifyIcon icon={feature.icon} className={cn('inline h-5 w-5', feature.variant)} />
              <p className="text-gray-900">{feature.name}</p>
            </li>)}
        </ul>
        <button className="flex items-center justify-center rounded-md border border-dashed border-primary px-4 py-2 font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white">
          Buy Tickits <IconifyIcon icon="lucide:shopping-cart" className="ms-2 inline h-5 w-5" />
        </button>
      </div>
    </div>;
};
const Tickets = () => {
  return <section id="price" className="bg-[#f8f9fa] py-10 dark:bg-neutral-900 sm:py-20">
      <div className="container">
        <div className="mb-16 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h5 className="mb-2 text-lg font-medium capitalize text-gray-800">
              Event <span className="font-semibold text-primary">Tickets</span>
            </h5>
            <h2 className="mb-1.5 text-3xl/snug font-bold capitalize text-gray-800">Resignation Tickets</h2>
            <p className="max-w-xl text-base font-medium text-gray-500">
              Itaque earum rerum hic tenetur a sapiente delectus ut sit aut reiciendis doloribus asperiores repellat.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ticketPricing.map((ticket, idx) => <TicketCard {...ticket} key={idx} />)}
        </div>
      </div>
    </section>;
};
export default Tickets;