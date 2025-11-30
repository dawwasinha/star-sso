import heroBg from '@/assets/images/landing/directory/hero-bg.jpg';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { statsData } from '../data';
const Hero = () => {
  return <section id="home" className="relative py-72">
      <div className="container">
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{
        backgroundImage: `url(${heroBg})`
      }}>
          <div className="relative z-30 h-full w-full bg-black/60" />
        </div>
        <div className="relative z-30">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-6xl/tight font-bold text-white">Find Your Dream Place Just In a Click</h2>
            <p className="mb-16 text-lg text-slate-100">
              Maecenas tempus, tellus eget condimentum rhoncus quam semper libero sit amet adipiscing sem neque sed ipsum nam quam nunc blandit vel
              luctus pulvinar.
            </p>
            <div className="items-center gap-5 rounded border bg-white p-3 shadow-sm lg:flex">
              <div className="w-full items-center justify-between sm:flex">
                <div className="flex w-full items-center border-b border-r sm:border-b-0">
                  <IconifyIcon icon="lucide:search" />
                  <input type="text" id="hero-input" name="hero-input" className="w-full border-0 bg-transparent focus:ring-0" placeholder="what are you searching for ?" />
                </div>
                <div className="flex w-full items-center ps-4">
                  <IconifyIcon icon="lucide:map-pin" />
                  <input type="text" id="hero-input" name="hero-input" className="w-full border-0 bg-transparent focus:ring-0" placeholder="Location" />
                </div>
                <button className="inline-flex items-center rounded-md bg-gradient-to-r from-red-600 via-red-500 to-red-400 px-6 py-3 text-base text-white duration-300">
                  <span className="hidden sm:inline">Search</span>
                  <IconifyIcon icon="uil:search" className="ms-2 text-lg/none text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 end-0 start-0 z-30 hidden bg-neutral-800/50 py-9 md:block">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-6">
          {statsData.map((item, idx) => <div className="flex items-center justify-center" key={idx}>
              <div className="bg-[url('../images/landing/directory/icons/icon-bg.png')]">
                <img src={item.image} alt="image" />
              </div>
              <div className="ms-4">
                <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                <h5 className="font-bold text-white">{item.count}</h5>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Hero;