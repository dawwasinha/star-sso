import { Link } from 'react-router-dom';
import logoSm from '@/assets/images/logo-sm.png';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import TimeDuration from './TimeDuration';
import PageMetaData from '@/components/PageMetaData';
const ComingSoon2 = () => {
  return <>
      <PageMetaData title='Coming Soon' />
      <section className="relative flex items-center justify-center bg-[url(../images/small/small-2.jpg)] bg-cover bg-no-repeat md:h-screen">
        <div className="absolute inset-0 h-full w-full bg-black/60" />
        <div className="container">
          <div className="relative py-9 text-center text-white">
            <Link to="/" className="mb-10 flex items-center justify-center">
              <img src={logoSm} height={64} width={64} alt="logo-sm" className="h-16" />
            </Link>
            <div className="mx-auto max-w-xl">
              <h2 className="mb-4 text-5xl font-bold uppercase">Coming Soon</h2>
              <p className="text-base font-medium text-gray-300">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.</p>
            </div>
            <div className="z-30 my-10 text-white">
              <TimeDuration />
            </div>
            <div className="mt-14">
              <h3 className="text-2xl font-bold text-gray-300">Subscribe us to get notified!</h3>
              <div className="mx-auto max-w-xl rounded-md bg-white/20 backdrop-blur-2xl">
                <form className="mt-7 flex w-full items-center justify-between">
                  <input type="email" name="email" id="email" className="w-full border-0 bg-transparent p-4 text-sm text-white placeholder:text-white focus:outline-none focus:ring-0" placeholder="Enter Your Email" autoComplete="off" />
                  <button className="me-2 rounded-md border-0 bg-white/10 px-6 py-2 text-sm font-semibold text-white backdrop-blur-2xl transition-all duration-500 hover:bg-primary/10 hover:text-primary">
                    <div className="flex items-center justify-center gap-1">
                      <span>Submit</span>
                    </div>
                  </button>
                </form>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative mt-10">
                <h6 className="mb-4 text-center text-xl text-white">Follow Us:</h6>
                <ul className="flex flex-wrap items-center gap-2">
                  <li>
                    <Link to="" target="_blank" className="group inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-2xl transition-all duration-500 hover:bg-primary/60">
                      <IconifyIcon icon="uil:facebook-f" className="text-xl text-white group-hover:text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link to="" target="_blank" className="group inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-2xl transition-all duration-500 hover:bg-pink-600/60">
                      <IconifyIcon icon="uil:instagram" className="text-xl text-white group-hover:text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link to="" target="_blank" className="group inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-2xl transition-all duration-500 hover:bg-sky-600/60">
                      <IconifyIcon icon="uil:skype-alt" className="text-xl text-white group-hover:text-white" />
                    </Link>
                  </li>
                  <li>
                    <Link to="" target="_blank" className="group inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-2xl transition-all duration-500 hover:bg-blue-800/60">
                      <IconifyIcon icon="uil:linkedin-alt" className="text-xl text-white group-hover:text-white" />
                    </Link>
                  </li>
                </ul>
                <button type="button" className="group mt-5 inline-flex items-center justify-center rounded-lg bg-white/20 px-6 py-2 backdrop-blur-2xl transition-all duration-500 hover:bg-primary/20 hover:text-primary" data-hs-overlay="#hs-vertically-centered-modal">
                  <IconifyIcon icon="uil:phone-alt" className="me-2 text-xl" /> Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default ComingSoon2;