import { Link } from 'react-router-dom';
import logoLight from '@/assets/images/logo-light.png';
import ThirdPartyLogin from '@/components/common/ThirdPartyLogin';
import AuthSwiper from '@/components/common/AuthSwiper';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import PageMetaData from '@/components/PageMetaData';
const Register = () => {
  return <>
      <PageMetaData title='Register' />
      <div className="grid lg:grid-cols-2">
        <div className="flex h-full flex-col p-10">
          <div className="pb-10">
            <Link to="/" className="flex justify-center">
              <img src={logoLight} height={40} width={145} alt="dark logo" className="h-10" />
            </Link>
          </div>
          <div className="pb6 my-auto text-center">
            <h4 className="mb-3 text-2xl font-bold text-white">Sign Up</h4>
            <p className="mx-auto mb-5 max-w-sm text-gray-300">Enter your email address and password to access account.</p>
            <form action="#" className="text-start">
              <div className="mb-4">
                <label htmlFor="input-label" className="mb-2 block text-base/normal font-semibold text-gray-200">
                  Your Name <small>*</small>
                </label>
                <input type="text" id="input-label" className="block w-full rounded border-gray-200 border-white/10 bg-transparent px-3 py-1.5 text-white/80 focus:border-white/25 focus:ring-transparent" placeholder="Your Name" />
              </div>
              <div className="mb-4">
                <label htmlFor="emailaddress" className="mb-2 block text-base/normal font-semibold text-gray-200">
                  Email address
                </label>
                <input className="block w-full rounded border-gray-200 border-white/10 bg-transparent px-3 py-1.5 text-white/80 focus:border-white/25 focus:ring-transparent" type="email" id="emailaddress" required placeholder="Enter your email" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="mb-2 block text-base/normal font-semibold text-gray-200">
                  Password
                </label>
                <input className="block w-full rounded border-gray-200 border-white/10 bg-transparent px-3 py-1.5 text-white/80 focus:border-white/25 focus:ring-transparent" type="password" required id="password" placeholder="Enter your password" />
              </div>
              <div className="mb-6">
                <input type="checkbox" className="text-primary-600 focus:border-primary-300 h-4 w-4 rounded border-white/20 bg-white/20 shadow-sm focus:ring focus:ring-primary/60 focus:ring-offset-0" id="checkbox-signin" />
                <label className="ms-2 align-middle text-gray-200" htmlFor="checkbox-signin">
                  <span className="font-bold">I Accept </span>
                  <Link to="">Terms and Conditions</Link>
                </label>
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
export default Register;