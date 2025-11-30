import { Link } from 'react-router-dom';
import AuthSwiper from '@/components/common/AuthSwiper';
import ThirdPartyLogin from '@/components/common/ThirdPartyLogin';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import logoLight from '@/assets/images/logo-light.png';
import PageMetaData from '@/components/PageMetaData';
const Login = () => {
  return <>
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-white px-10 py-12 shadow-2xl">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Link to="/">
              <img src={logoLight} width={100} height={30} alt="logo" className="h-10" />
            </Link>
          </div>

          {/* Title */}
          <div className="mb-8 text-center">
            <p className="text-sm text-gray-600">Enter your email address and password.</p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="emailaddress" className="mb-2 block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input 
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                type="email" 
                id="emailaddress" 
                required 
                placeholder="Enter your email" 
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input 
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                type="password" 
                required 
                id="password" 
                placeholder="Enter your password" 
              />
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                  id="checkbox-signin" 
                />
                <label className="ml-2 text-sm text-gray-600" htmlFor="checkbox-signin">
                  Remember me
                </label>
              </div>
              <Link to="/auth/forgot-pw" className="text-sm text-blue-600 hover:underline">
                Forgot your password?
              </Link>
            </div>

            <button 
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" 
              type="submit"
            >
              <IconifyIcon icon="uil:navigator" className="me-2 text-base" />
              Log In
            </button>
          </form>

          {/* Sign Up Link */}
          {/* <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link to="/auth/register" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
                Sign Up
              </Link>
            </p>
          </div> */}
        </div>
      </div>
    </>;
};
export default Login;