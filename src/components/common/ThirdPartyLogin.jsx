import { Link } from 'react-router-dom';
import IconifyIcon from '../wrappers/IconifyIcon';
const ThirdPartyLogin = () => {
  return <div className="pb-6">
      <div className="text-center">
        <p className="mb-4 text-lg font-semibold text-gray-200">Sign in with</p>
        <ul className="flex flex-wrap items-center justify-center gap-2">
          <li>
            <Link to="" className="group inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-2xl transition-all duration-500 hover:bg-primary/60">
              <IconifyIcon icon="uil:facebook-f" className="text-xl text-white group-hover:text-white" />
            </Link>
          </li>
          <li>
            <Link to="" className="group inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-2xl transition-all duration-500 hover:bg-pink-600/60">
              <IconifyIcon icon="uil:instagram" className="text-xl text-white group-hover:text-white" />
            </Link>
          </li>
          <li>
            <Link to="" className="group inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-2xl transition-all duration-500 hover:bg-sky-600/60">
              <IconifyIcon icon="uil:skype-alt" className="text-xl text-white group-hover:text-white" />
            </Link>
          </li>
          <li>
            <Link to="" className="group inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/20 backdrop-blur-2xl transition-all duration-500 hover:bg-blue-800/60">
              <IconifyIcon icon="uil:linkedin-alt" className="text-xl text-white group-hover:text-white" />
            </Link>
          </li>
        </ul>
      </div>
    </div>;
};
export default ThirdPartyLogin;