import { Link } from 'react-router-dom';
import logoSm from '@/assets/images/logo-sm.png';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import TimeDuration from './TimeDuration';
import PageMetaData from '@/components/PageMetaData';
const ComingSoon1 = () => {
  return <>
      <PageMetaData title='Coming Soon' />
      <section id="home" className="relative flex h-full items-center justify-center overflow-hidden bg-[url(../images/small/small-1.jpg)] bg-cover bg-fixed bg-center bg-no-repeat md:h-screen">
        <div className="absolute inset-0 bg-black/80" />
        <div className="container">
          <div className="relative flex h-full w-full items-center justify-center px-12 py-12 text-center">
            <div>
              <Link to="/" className="mb-10 flex items-center justify-center">
                <img height={64} width={64} src={logoSm} alt="logo" className="h-16" />
              </Link>
              <span className="rounded-md bg-white/20 px-4 py-[5px] font-medium capitalize text-white">Our Website Is</span>
              <h1 className="my-8 text-4xl font-extrabold capitalize text-white lg:text-6xl">coming soon</h1>
              <div className="flex justify-center">
                <div className="max-w-xl text-center">
                  <p className="font-semibold text-white">
                    Itaque earum rerum tenetur a sapiente delectus reiciendis voluptatibus maiores alias perferendis doloribus asperiores.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative mt-14">
                  <div>
                    <TimeDuration />
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative mt-10">
                  <h6 className="mb-4 text-center text-lg text-white">Follow Us:</h6>
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
                  <button type="button" className="group mt-5 inline-flex items-center justify-center rounded-lg bg-gray-400/60 px-6 py-2 text-white transition-all duration-500 hover:bg-primary/20 hover:text-primary" data-hs-overlay="#hs-vertically-centered-modal">
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
export default ComingSoon1;