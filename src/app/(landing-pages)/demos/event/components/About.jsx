import speaker1 from '@/assets/images/landing/event/event-speakers.jpg';
import speaker2 from '@/assets/images/landing/event/speakers/2.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
const About = () => {
  return <section id="about" className="pb-10 pt-20 sm:py-20">
      <div className="container">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="lg:order-2">
            <div className="grid grid-cols-12 items-center gap-6">
              <div className="col-span-5">
                <img src={speaker1} className="max-h-full max-w-full rounded-md" alt="speaker" />
              </div>
              <div className="col-span-7">
                <img src={speaker2} className="max-h-full max-w-full rounded-md" alt="speaker" />
              </div>
            </div>
          </div>
          <div className="lg:me-6">
            <div className="my-auto">
              <h2 className="mb-4 text-3xl font-bold text-gray-800">
                Welcome to <span className="text-primary">Opixo.</span>
              </h2>
              <div className="mb-6 flex flex-col">
                <p className="mb-6 pe-2 text-lg font-medium text-slate-500">
                  Temporibus autem quibusdam et aut officiis debitis aut voluptates at rerum molestiae non recusandae earum rerum.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 align-middle text-xl text-primary" /> Cras ultricies turpis hendrerit
                  fringilla.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 align-middle text-xl text-primary" /> Maecenas tempus tellus condimentum
                  rhoncus.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 align-middle text-xl text-primary" /> Donec pede justo fringilla.
                </p>
              </div>
              <div className="mb-10 grid grid-cols-2 items-center gap-6">
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/20 text-2xl/none text-primary">
                    <IconifyIcon icon="lucide:map-pin" className="h-6 w-6" />
                  </div>
                  <h6 className="mb-1 text-lg font-bold">Where</h6>
                  <p className="text-base font-semibold text-gray-500">3929 Hide Gate A Way Main Road Santa Clara, CA 95054</p>
                </div>
                <div>
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary/20 text-2xl/none text-primary">
                    <IconifyIcon icon="lucide:circle-dot-dashed" className="h-6 w-6" />
                  </div>
                  <h6 className="mb-1 text-lg font-bold">When</h6>
                  <p className="text-base font-semibold text-gray-500">Saturday to Thursday (09:00 am to 05:00 pm) July 15 to 19, 2017</p>
                </div>
              </div>
              <Link to="" className="group relative inline-block border-none text-center align-middle text-base font-semibold tracking-wide text-primary duration-500 hover:text-primary">
                <span className="absolute -bottom-0 h-px w-7/12 rounded bg-primary/80 transition-all duration-500 group-hover:w-full" />
                Learn More <IconifyIcon icon="uil:angle-right" className="inline-flex align-middle text-xl/none" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;