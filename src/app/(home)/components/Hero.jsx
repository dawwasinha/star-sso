import IconifyIcon from '@/components/wrappers/IconifyIcon';
import TextTyping from './TextTyping';
import { useEffect } from 'react';
const Hero = () => {
  useEffect(() => {
    document.body.classList.add('text-slate-700', 'tracking-wide');
    return () => {
      document.body.classList.add('text-slate-700', 'tracking-wide');
    };
  }, []);
  return <section id="home" className="relative overflow-hidden bg-[url(../images/bg.jpg)] bg-cover bg-no-repeat py-72">
      <div className="absolute inset-0 bg-black/80 bg-cover bg-center" />
      <div className="container relative">
        <div className="text-center">
          <div className="mb-10 mt-6 flex justify-center">
            <div>
              <span className="mb-2 inline-block rounded-full border-x-2 border-x-primary bg-primary/20 px-2 text-lg font-semibold text-primary">
                TailwindCss 3.4.1
              </span>
              <h1 className="mb-6 text-6xl/tight font-bold text-white">
                Opixo Modern website template <br /> built for <TextTyping />
                <span className="wrap" />
              </h1>
              <p className="mx-auto max-w-xl text-base font-medium text-gray-100">
                The Make your website or web application perfect starting point for your next project and the ultimate resource for learning how
                experts build real websites with Tailwind CSS.
              </p>
            </div>
          </div>
          <div>
            <a href="#demo" className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-2 font-semibold text-black backdrop-blur-2xl transition-all duration-500">
              {' '}
              View Demos <IconifyIcon icon="uil:eye" className="ms-2 text-xl" />
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;