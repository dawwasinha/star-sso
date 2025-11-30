import { currency } from '@/common/constants';
import { pricingPlans } from '../data';
import { cn } from '@/helpers/cn';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
const PricingCard = ({
  features,
  monthlyPrice,
  name,
  isPopular
}) => {
  return <div className="relative overflow-hidden rounded bg-slate-50 shadow-md">
      <div className="flex h-full flex-col p-6">
        <div className="shrink">
          <div className="mb-6">
            <h3 className="flex items-center gap-2 text-[38px] font-bold text-gray-800">
              <span>
                {currency}
                {monthlyPrice}
              </span>
              <span className="text-lg font-medium">/month</span>
            </h3>
          </div>
        </div>
        <div>
          <h5 className="mb-2 text-xl font-bold text-gray-800">{name}</h5>
          <p className="text-sm font-medium text-gray-700">All the basics for starting a new bissnesses.</p>
        </div>
        <hr className="my-6 border-gray-400" />
        <ul className="grow">
          {features.map((feature, idx) => <li className="mb-4 flex items-center gap-2 text-base font-medium" key={idx}>
              <span className={cn('inline-flex h-5 w-5 items-center justify-center rounded-full text-sm font-bold', feature.variant)}>
                <IconifyIcon icon={feature.icon} />
              </span>
              <p className="text-gray-900">{feature.name}</p>
            </li>)}
        </ul>
        <div className="mt-3 shrink">
          <button className={cn('inline-flex w-full items-center justify-center gap-2 rounded-md border border-primary px-8 py-2 text-base font-semibold text-primary transition-all hover:bg-primary hover:text-white focus:outline-none focus:ring-0', isPopular ? 'bg-primary text-white' : 'text-primary hover:bg-primary hover:text-white')}>
            Continue
          </button>
        </div>
      </div>
    </div>;
};
const Pricing = () => {
  return <section id="price" className="py-24">
      <div className="container">
        <div className="mb-14 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h5 className="mb-2 text-lg font-medium capitalize text-gray-800">
              Our <span className="font-semibold text-primary">Pricing</span>
            </h5>
            <h2 className="mb-1 text-3xl/snug font-bold text-gray-800">Simple Plans For Everyone</h2>
            <p className="mb-8 text-base text-gray-600">Nemo enim ipsam voluptatem that quia voluptas aut fugit </p>
            <div className="flex items-center justify-center gap-4">
              <span className="text-base font-bold text-gray-700">Monthly</span>
              <label htmlFor="pricing-input" className="relative inline-flex cursor-pointer items-center">
                <input type="checkbox" id="pricing-input" className="peer sr-only" />
                <span className="h-4 w-11 rounded-full bg-gray-200 after:absolute after:left-[2px] after:top-1/2 after:h-5 after:w-5 after:-translate-y-1/2 after:rounded-full after:border after:border-gray-300 after:bg-primary after:ring-2 after:ring-primary after:ring-offset-2 after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-checked:after:border-white" />
              </label>
              <span className="text-base font-bold text-gray-700">Yearly</span>
            </div>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan, idx) => <PricingCard {...plan} key={idx} />)}
        </div>
      </div>
    </section>;
};
export default Pricing;