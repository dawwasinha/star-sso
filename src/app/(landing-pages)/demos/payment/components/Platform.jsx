import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
import { paymentPlatforms } from '../data';
const PlatformCard = ({
  description,
  icon,
  title
}) => {
  return <div className="rounded-lg border p-6">
      <div className="flex">
        <div>
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 dark:bg-primary/20">
            <IconifyIcon icon={icon} className="text-xl text-primary" />
          </div>
        </div>
        <div className="ms-6">
          <h4 className="mb-2 text-xl font-bold">{title}</h4>
          <p className="mb-6 text-lg font-medium text-slate-500">{description}</p>
          <div className="flex items-center">
            <Link to="" className="group relative inline-block border-none text-center align-middle text-base font-semibold tracking-wide text-primary duration-500 hover:text-primary">
              <span className="absolute -bottom-0 h-px w-7/12 rounded bg-primary/80 transition-all duration-500 group-hover:w-full" />
              Learn More <IconifyIcon icon="uil:angle-right" className="inline-flex align-middle text-xl/none" />
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
const Platform = () => {
  return <section id="platform" className="py-24">
      <div className="container">
        <div className="mb-16 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h5 className="mb-2 text-lg font-medium capitalize text-gray-800">
              Our <span className="font-semibold text-primary">Platform</span>
            </h5>
            <h2 className="mb-1.5 text-3xl/snug font-bold capitalize text-gray-800">Simple payment platform</h2>
            <p className="max-w-xl text-base font-medium text-gray-500">
              Itaque earum rerum tenetur sapiente delectus aut reiciendis voluptatibus doloribus asperiores repellat.
            </p>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {paymentPlatforms.map((platform, idx) => <PlatformCard {...platform} key={idx} />)}
        </div>
      </div>
    </section>;
};
export default Platform;