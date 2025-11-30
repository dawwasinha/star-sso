import { Link } from 'react-router-dom';
import ThirdPartyLogin from '@/components/common/ThirdPartyLogin';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import logoLight from '@/assets/images/logo-light.png';
import authImg from '@/assets/images/auth-img.jpg';
import barcode from '@/assets/images/barcode.png';
import PageMetaData from '@/components/PageMetaData';
const LoginWithQr = () => {
  return <>
      <PageMetaData title='Login With Qr' />
      <div className="grid lg:grid-cols-2">
        <div className="flex h-full flex-col p-10">
          <div className="pb-10">
            <Link to="/" className="flex justify-center">
              <img height={40} width={145} src={logoLight} alt="dark logo" className="h-10" />
            </Link>
          </div>
          <div className="my-auto pb-6 text-center">
            <h4 className="mb-3 text-2xl font-bold text-white">Sign In</h4>
            <p className="mx-auto mb-5 max-w-sm text-gray-300">Enter your email address and password to access account.</p>
            <form action="#" className="text-start">
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
                <Link to="/auth/forgot-pw" className="float-right border-b border-dashed text-gray-200">
                  <small>Forgot your password?</small>
                </Link>
                <input type="checkbox" className="text-primary-600 focus:border-primary-300 h-4 w-4 rounded border-white/20 bg-white/20 shadow-sm focus:ring focus:ring-primary/60 focus:ring-offset-0" id="checkbox-signin" />
                <label className="ms-2 align-middle text-gray-200" htmlFor="checkbox-signin">
                  Remember me
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
              Don&apos;t have an account?{' '}
              <Link to="/auth/register" className="ms-1 font-semibold text-primary">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative overflow-hidden">
            <img src={authImg} alt="auth" className="max-h-full max-w-full -scale-x-100 transform" />
            <div className="absolute inset-0 bg-black/70">
              <div className="flex h-full items-center justify-center">
                <div className="text-center">
                  <img src={barcode} alt="bar-code" className="mx-auto h-60 w-60 rounded" />
                  <h5 className="mb-1 mt-4 text-2xl font-bold text-white">Login with QR code.</h5>
                  <p className="text-base font-medium text-gray-200">
                    Scan this with the mobile app to <br /> login instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default LoginWithQr;