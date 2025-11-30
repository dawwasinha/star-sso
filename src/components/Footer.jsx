import { currentYear, developedBy } from '@/common/constants';
import { Link } from 'react-router-dom';
import IconifyIcon from './wrappers/IconifyIcon';
const Footer = () => {
  const socialIcons = ['lucide:facebook', 'lucide:instagram', 'lucide:twitter', 'lucide:linkedin'];
  return <footer className="bg-slate-900 bg-center bg-no-repeat">
      <div className="h-[75px] border-t border-slate-700/20">
        <div className="container flex h-full flex-wrap items-center justify-center text-center md:justify-between md:text-start lg:px-20">
          <p className="text-base font-medium text-gray-400">
            {currentYear} © Opixo -{' '}
            <Link to="">
              Design crafted{' '}
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-lucide="heart" className="lucide lucide-heart inline h-4 w-4 fill-red-500 text-red-500">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              &nbsp;by {developedBy}.com
            </Link>
          </p>
          <div className="flex flex-wrap items-center gap-2">
            {socialIcons.map((icon, idx) => <div key={idx}>
                <Link to="" target="_blank" className="group inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-800 transition-all duration-500 hover:bg-primary">
                  <IconifyIcon icon={icon} className="h-5 w-5 text-gray-400 group-hover:fill-white/30 group-hover:text-white" />
                </Link>
              </div>)}
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;