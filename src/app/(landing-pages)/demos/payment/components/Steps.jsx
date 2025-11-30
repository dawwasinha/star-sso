import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { steps } from '../data';
const StepCard = ({
  description,
  icon,
  title
}) => {
  return <div className="group flex items-center justify-center rounded-2xl border border-b-4 transition-all duration-500 hover:-translate-y-2 hover:border-b-primary">
      <div className="p-10 text-center">
        <div className="mb-6 inline-flex items-center justify-center">
          <IconifyIcon icon={icon} className="h-8 w-8 fill-primary/20 text-primary" />
        </div>
        <h3 className="mb-1 text-2xl font-bold">{title}</h3>
        <p className="text-base font-medium text-gray-500">{description}</p>
      </div>
    </div>;
};
const Steps = () => {
  return <section id="about" className="bg-white py-24">
      <div className="container">
        <div className="mb-16 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h5 className="mb-2 text-lg font-medium capitalize text-gray-800">
              Our <span className="font-semibold text-primary">Work</span>
            </h5>
            <h2 className="mb-1.5 text-3xl/snug font-bold capitalize text-gray-800">How it work</h2>
            <p className="max-w-xl text-base font-medium text-gray-500">Sending your money has never been so Easier.</p>
          </div>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, idx) => <StepCard {...step} key={idx} />)}
        </div>
      </div>
    </section>;
};
export default Steps;