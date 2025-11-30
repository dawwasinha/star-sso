import { Link } from 'react-router-dom';
import ThirdPartyLogin from '@/components/common/ThirdPartyLogin';
import AuthSwiper from '@/components/common/AuthSwiper';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import PageMetaData from '@/components/PageMetaData';
import logoLight from '@/assets/images/logo-light.png';
import avatar8 from '@/assets/images/avatars/img-8.png';
const LockScreen = () => {
  return <>
      <PageMetaData title='Lock Screen' />
      <div className="grid lg:grid-cols-2">
        <div className="flex h-full flex-col p-10">
          <div className="pb-10">
            <Link to="/" className="flex justify-center">
              <img src={logoLight} width={145} height={40} alt="dark logo" className="h-10" />
            </Link>
          </div>
          <div className="my-auto pb-6 text-center">
            <div className="mx-auto mb-4 inline-flex h-28 w-28 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/10 p-1.5">
              <img src={avatar8} alt="avatar-img-8" className="h-full w-full rounded-full" />
            </div>
            <h4 className="mb-3 text-2xl font-bold text-white">Hi Alexa</h4>
            <p className="mx-auto mb-5 max-w-sm text-gray-300">Enter your password to access.</p>
            <form action="#" className="text-start">
              <div className="mb-4">
                <label htmlFor="password" className="mb-2 block text-base/normal font-semibold text-gray-200">
                  Password
                </label>
                <input className="block w-full rounded border-gray-200 border-white/10 bg-transparent px-3 py-1.5 text-white/80 focus:border-white/25 focus:ring-transparent" type="email" id="password" required placeholder="Enter your password" />
              </div>
              <div className="mb-6 text-center">
                <button className="group mt-5 inline-flex w-full items-center justify-center rounded-lg bg-white/20 px-6 py-2 text-white backdrop-blur-2xl transition-all duration-500 hover:bg-primary/20 hover:text-primary" type="submit">
                  <IconifyIcon icon="uil:navigator" className="me-2 text-lg" /> <span className="fw-bold">Log In</span>{' '}
                </button>
              </div>
            </form>
            <ThirdPartyLogin />
          </div>
          <div className="w-full text-center">
            <p className="text-base font-medium leading-6 text-gray-300">
              Already have an account?{' '}
              <Link to="/auth/login" className="ms-1 font-semibold text-primary">
                Log In
              </Link>
            </p>
          </div>
        </div>
        <AuthSwiper />
      </div>
    </>;
};
export default LockScreen;