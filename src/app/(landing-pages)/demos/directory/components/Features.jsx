import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
import { features } from '../data';
const FeatureCard = ({
  description,
  icon,
  title
}) => {
  return <div className="group rounded-xl bg-white shadow-[0_8px_48px_#eee]">
      <div className="shrink-0 rounded-lg p-6 text-center">
        <div className="inline-flex items-center justify-center rounded-full">
          <IconifyIcon icon={icon} className="h-12 w-12 text-gray-800" />
        </div>
        <h3 className="mb-2 mt-6 text-xl font-bold text-gray-800 md:text-2xl">{title}</h3>
        <p className="mb-6 font-medium text-slate-500 md:text-base">{description}</p>
        <Link to="" className="relative font-medium text-primary">
          <span className="absolute -bottom-0.5 start-0 h-0.5 w-0 bg-primary transition-all duration-500 group-hover:w-10/12" />
          Read more <IconifyIcon icon="lucide:move-right" className="ms-2 inline-block h-4 w-auto" />
        </Link>
      </div>
    </div>;
};
const Features = () => {
  return <section id="features" className="30 bg-primary/5 py-20">
      <div className="container">
        <div className="mb-14 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h2 className="mb-1 text-3xl/snug font-bold capitalize text-gray-800">How does it work?</h2>
            <p className="text-base text-gray-600">
              Itaque earum rerum tenetur sapiente delectus aut reiciendis voluptatibus doloribus asperiores repellat.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, idx) => <FeatureCard {...feature} key={idx} />)}
        </div>
      </div>
    </section>;
};
export default Features;