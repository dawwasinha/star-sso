import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { events } from '../data';
const ScheduleCard = ({
  date,
  sessions,
  title
}) => {
  return <div className="relative overflow-hidden rounded-lg border bg-[url('../images/landing/event/bg.jpg')] bg-cover bg-center bg-no-repeat shadow-lg dark:border-gray-700">
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative p-10 text-center shadow">
        <div className="mb-12">
          <p className="mb-2 font-semibold text-gray-100">{date}</p>
          <h4 className="text-2xl font-bold text-white">{title}</h4>
        </div>
        <div className="mb-8">
          {sessions.map((session, idx) => <Fragment key={idx}>
              <h6 className="mb-1 font-bold italic text-white">{session.time}</h6>
              <p className="mb-8 font-medium text-slate-200">{session.description}</p>
            </Fragment>)}
        </div>
        <a href="#price" className="group relative inline-block border-none text-center align-middle text-base font-semibold tracking-wide text-primary duration-500 hover:text-primary">
          <span className="absolute -bottom-0 h-px w-7/12 rounded bg-primary/80 transition-all duration-500 group-hover:w-full" />
          <IconifyIcon icon="uil:shopping-cart-alt" className="inline-flex align-middle text-xl/none" /> Buy tickits
        </a>
      </div>
    </div>;
};
const Schedule = () => {
  return <section id="schedule" className="bg-slate-50 py-20">
      <div className="container">
        <div className="mb-16 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h5 className="mb-2 text-lg font-medium capitalize text-gray-800">
              Our <span className="font-semibold text-primary">Schedule</span>
            </h5>
            <h2 className="mb-1.5 text-3xl/snug font-bold capitalize text-gray-800">Conference Schedule</h2>
            <p className="max-w-xl text-base font-medium text-gray-500">
              Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem aperiam.
            </p>
          </div>
        </div>
        <div className="mb-20 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {events.map((schedule, idx) => <ScheduleCard {...schedule} key={idx} />)}
        </div>
        <div className="mt-14 flex items-center justify-center">
          <Link to="" className="inline-flex items-center justify-center rounded-md border border-dashed border-primary px-4 py-2 font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white">
            Download PDF <IconifyIcon icon="lucide:download" className="ms-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>;
};
export default Schedule;