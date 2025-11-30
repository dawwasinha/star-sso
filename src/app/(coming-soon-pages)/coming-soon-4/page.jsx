import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
import logoSm from '@/assets/images/logo-sm.png';
import PageMetaData from '@/components/PageMetaData';
const ComingSoon4 = () => {
  return <>
      <PageMetaData title='Coming Soon' />
      <section className="relative flex h-screen items-center justify-center bg-[url(../images/small/small-4.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/60" />
        <div className="container">
          <div>
            <div className="relative py-9 text-center text-white">
              <Link to="/" className="mb-10 flex items-center justify-center">
                <img height={64} width={64} src={logoSm} alt="" className="h-16" />
              </Link>
              <div className="mx-auto max-w-3xl">
                <h2 className="mb-4 text-4xl font-bold capitalize">We Are Coming Soon...</h2>
                <p className="text-base font-medium text-gray-300">
                  Welcome to our design portfolio our dedign and projects are fresh and simple. our design and code quality is very good.
                </p>
              </div>
              <div className="mt-10">
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
                  <ul className="flex flex-wrap items-center gap-6 font-maven">
                    <li>
                      <Link to="" className="group inline-flex items-center justify-center text-base font-medium text-white transition-all duration-500 hover:text-blue-500">
                        <IconifyIcon icon="uil:facebook-f" className="me-2 text-xl" /> Facebook
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="group inline-flex items-center justify-center text-base font-medium text-white transition-all duration-500 hover:text-pink-500">
                        <IconifyIcon icon="uil:instagram" className="me-2 text-xl" /> Instagram
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="group inline-flex items-center justify-center text-base font-medium text-white transition-all duration-500 hover:text-sky-500">
                        <IconifyIcon icon="uil:skype-alt" className="me-2 text-xl" /> Skype
                      </Link>
                    </li>
                    <li>
                      <Link to="" className="group inline-flex items-center justify-center text-base font-medium text-white transition-all duration-500 hover:text-blue-800">
                        <IconifyIcon icon="uil:linkedin-alt" className="me-2 text-xl" /> Linkedin
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
        </div>
      </section>
    </>;
};
export default ComingSoon4;