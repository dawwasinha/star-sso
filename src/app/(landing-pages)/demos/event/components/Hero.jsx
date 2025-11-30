import Counter from './Counter';
const Hero = () => {
  return <section id="home" className="relative overflow-hidden bg-[url('../images/landing/event/hero-bg.jpg')] bg-cover bg-fixed bg-center bg-no-repeat py-64">
      <div className="absolute inset-0 h-full w-full bg-black/25" />
      <div className="absolute inset-0 bg-black/70" />
      <div className="container">
        <div className="relative text-center">
          <span className="rounded-md bg-white/20 px-4 py-[5px] font-medium text-white">
            1 <sup>th</sup> Show, 01 January 2023
          </span>
          <h1 className="my-8 text-4xl font-extrabold text-white lg:text-6xl">Event Management</h1>
          <div className="flex justify-center">
            <div className="max-w-xl text-center">
              <p className="font-semibold text-white">
                Itaque earum rerum tenetur a sapiente delectus reiciendis voluptatibus maiores alias perferendis doloribus asperiores.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative mt-14">
              <Counter />
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative mt-20">
            <a href="#price" className="rounded-lg bg-white px-9 py-3 text-xl font-medium text-primary transition-all duration-500 hover:shadow-white/10">
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;