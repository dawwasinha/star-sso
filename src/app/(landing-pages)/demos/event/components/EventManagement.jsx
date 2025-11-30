import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
import { eventSchedules } from '../data';
const EventCard = ({
  title,
  description,
  date
}) => {
  return <div className="rounded-lg border border-b-2 bg-white transition-all duration-500 hover:-translate-y-3 hover:border-b-primary">
      <div className="flex h-full gap-4 p-6">
        <div className="text-center">
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/20 font-semibold text-primary">{date}</span>
          <p className="text-base font-medium">Jun</p>
        </div>
        <div className="flex h-full flex-col">
          <h4 className="mb-2 text-xl font-bold capitalize text-gray-800">{title}</h4>
          <p className="mb-6 shrink text-sm font-medium text-slate-500">{description}</p>
          <div className="mt-auto">
            <Link to="" className="group relative inline-block border-none text-center align-middle text-base font-semibold tracking-wide text-primary duration-500 hover:text-primary">
              <span className="absolute -bottom-0 h-px w-7/12 rounded bg-primary/80 transition-all duration-500 group-hover:w-full" />
              Read More <IconifyIcon icon="uil:angle-right" className="inline-flex align-middle text-xl/none" />
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
const EventManagement = () => {
  return <section className="py-20">
      <div className="container">
        <div className="relative z-30">
          <div className="mb-16 flex items-center justify-center">
            <div className="max-w-2xl text-center">
              <h5 className="mb-2 text-lg font-medium capitalize text-gray-800">
                Event <span className="font-semibold text-primary">Schedules</span>
              </h5>
              <h2 className="mb-1.5 text-3xl/snug font-bold capitalize text-gray-800">Management &amp; Schedules</h2>
              <p className="max-w-xl text-base font-medium text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem aperiam.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex rounded-lg bg-white transition">
              <nav className="flex" aria-label="Tabs" role="tablist">
                <button type="button" className="active inline-flex items-center gap-2 border-b-2 bg-transparent px-8 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 hs-tab-active:border-primary hs-tab-active:text-primary" id="day-1" data-hs-tab="#day-items-1" aria-controls="day-items-1" role="tab">
                  <h5 className="text-base">First Day</h5>
                </button>
                <button type="button" className="inline-flex items-center gap-2 border-b-2 bg-transparent px-8 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 hs-tab-active:border-primary hs-tab-active:text-primary" id="day-2" data-hs-tab="#day-items-2" aria-controls="day-items-2" role="tab">
                  <h5 className="text-base">Second Day</h5>
                </button>
                <button type="button" className="inline-flex items-center gap-2 border-b-2 bg-transparent px-8 py-3 text-sm font-medium text-gray-500 hover:text-gray-700 hs-tab-active:border-primary hs-tab-active:text-primary" id="day-3" data-hs-tab="#day-items-3" aria-controls="day-items-3" role="tab">
                  <h5 className="text-base">Third Day</h5>
                </button>
              </nav>
            </div>
          </div>
          <div className="mt-10">
            {eventSchedules.map((schedule, idx) => <div id={`day-items-${idx + 1}`} className={idx != 0 ? 'hidden' : ''} key={idx}>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {schedule.events.map((event, idx) => <EventCard {...event} key={idx} />)}
                </div>
              </div>)}
          </div>
          <div className="mt-14 flex items-center justify-center">
            <button className="inline-flex items-center justify-center rounded-md border border-dashed border-primary px-4 py-2 font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white">
              Show More Events <IconifyIcon icon="lucide:move-right" className="ms-2 inline h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default EventManagement;