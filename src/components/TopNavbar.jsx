import { useEffect, useRef, useState } from 'react';
import Gumshoe from 'gumshoejs';
import { Link } from 'react-router-dom';
import IconifyIcon from './wrappers/IconifyIcon';
import useScrollEvent from '@/hooks/useScrollEvent';
import { cn } from '@/helpers/cn';
import logoDark from '@/assets/images/logo-dark.png';
import logoLight from '@/assets/images/logo-light.png';
import { useAuth } from '@/contexts/AuthContext';

const TopNavbar = ({
  navLinks,
  isDark
}) => {
  const navRef = useRef(null);
  const dropdownRef = useRef(null);
  const { scrollY } = useScrollEvent();
  const { user, isAuthenticated, logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (navRef.current) new Gumshoe('.navbar-nav a', {
      offset: 80
    });
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return <header id="navbar-sticky" className={cn('navbar', isDark ? 'nav-dark' : 'nav-light', {
    'nav-sticky': scrollY >= 50
  })}>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <img src={logoDark} width={145} height={40} className="logo-dark h-10" alt="Opixo Logo" />
            <img src={logoLight} width={145} height={40} className="logo-light h-10" alt="Opixo Logo" />
          </Link>
          <div className="ms-auto flex items-center px-2.5 lg:hidden">
            <button className="hs-collapse-toggle inline-flex h-9 w-12 items-center justify-center rounded-md border border-gray-300 bg-slate-300/30" type="button" id="hs-unstyled-collapse" data-hs-collapse="#mobileMenu" data-hs-type="collapse">
              <IconifyIcon icon="uil:bars" className="text-2xl" />
            </button>
          </div>
          <div ref={navRef} id="mobileMenu" className="hs-collapse mx-auto mt-2 hidden grow basis-full items-center justify-center overflow-hidden transition-all duration-300 lg:mt-0 lg:flex lg:basis-auto">
            <ul id="navbar-navlist" className="navbar-nav">
              {navLinks.map((item, idx) => <li key={item.link + idx} className="nav-item">
                  <a href={item.link} className="nav-link">
                    {item.label}
                  </a>
                </li>)}
            </ul>
            <div className="mt-4 flex items-center border-t border-gray-200 pt-4 lg:mt-0 lg:hidden lg:border-none lg:pt-0">
              {isAuthenticated ? (
                <div className="relative" ref={dropdownRef}>
                  <button 
                    onClick={toggleDropdown}
                    className="nav-btn flex items-center gap-2"
                  >
                    <IconifyIcon icon="lucide:user-circle" className="h-5 w-5" />
                    {user?.name}
                    <IconifyIcon 
                      icon="lucide:chevron-down" 
                      className={cn("h-4 w-4 transition-transform", {
                        "rotate-180": isDropdownOpen
                      })} 
                    />
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute right-0 top-full mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                      <div className="p-2">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                          <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                        </div>
                        <div className="py-1">
                          <button
                            onClick={() => {
                              setIsDropdownOpen(false);
                              logout();
                            }}
                            className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
                          >
                            <IconifyIcon icon="lucide:log-out" className="me-2 h-4 w-4" />
                            Logout
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/auth/login" className="nav-btn">
                  <IconifyIcon icon="lucide:log-in" className="me-2 h-5 w-5" />
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="hidden items-center lg:flex">
            {isAuthenticated ? (
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={toggleDropdown}
                  className="nav-btn flex items-center gap-2"
                >
                  <IconifyIcon icon="lucide:user-circle" className="h-5 w-5" />
                  {user?.name}
                  <IconifyIcon 
                    icon="lucide:chevron-down" 
                    className={cn("h-4 w-4 transition-transform", {
                      "rotate-180": isDropdownOpen
                    })} 
                  />
                </button>
                
                {isDropdownOpen && (
                  <div className="absolute right-0 top-full mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                    <div className="p-2">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="text-sm font-medium text-gray-900">{user?.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user?.email}</p>
                      </div>
                      <div className="py-1">
                        <button
                          onClick={() => {
                            setIsDropdownOpen(false);
                            logout();
                          }}
                          className="flex w-full items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md"
                        >
                          <IconifyIcon icon="lucide:log-out" className="me-2 h-4 w-4" />
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/auth/login" className="nav-btn">
                <IconifyIcon icon="lucide:log-in" className="me-2 h-5 w-5" />
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>;
};
export default TopNavbar;