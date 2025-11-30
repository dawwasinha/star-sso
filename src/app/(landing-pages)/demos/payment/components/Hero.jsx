import heroImg from '@/assets/images/landing/payment/hero.png';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
const Hero = () => {
  return <section id="home" className="relative overflow-hidden py-56">
      <span className="absolute inset-0 h-full w-full rounded-full bg-primary/20 blur-[500px]" />
      <div className="container z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1.5 text-xs font-bold uppercase text-primary">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Credit Card
            </span>
            <h1 className="mb-4 max-w-lg text-4xl font-bold text-gray-900 md:text-5xl/tight">Get Extraordinary Credit Card.</h1>
            <p className="text-slate-700 md:text-lg">
              This is a credit card to pay and send money easily over the world. You can add money from your credit and debit cards.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link to="" className="rounded-md bg-primary px-7 py-3 font-medium text-white shadow hover:shadow-lg hover:shadow-primary/20 dark:shadow-primary/20">
                Get started <IconifyIcon icon="lucide:trending-up" className="ms-2 inline h-5 w-5" />
              </Link>
              <Link to="" className="flex items-center text-primary">
                <span className="me-2 flex h-11 w-11 items-center justify-center rounded-full bg-primary/20">
                  <IconifyIcon icon="uil:caret-right" />
                </span>
                <span className="font-semibold">Watch Video</span>
              </Link>
            </div>
          </div>
          <div className="mx-auto">
            <img src={heroImg} alt="hero" />
          </div>
        </div>
      </div>
      <div className="absolute -bottom-[1px] end-0 start-0 overflow-hidden text-white sm:-bottom-px">
        <svg className="w-full origin-top scale-[2.0]" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
        </svg>
      </div>
    </section>;
};
export default Hero;