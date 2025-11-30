const CTA = () => {
  return <section className="relative py-28">
      <div className="container px-1 sm:px-[32px]">
        <div className="absolute inset-0 bg-[url('../images/landing/directory/cta-bg.jpg')] bg-cover bg-center bg-no-repeat">
          <div className="relative z-30 h-full w-full bg-black/60" />
        </div>
        <div className="flex justify-center">
          <div className="max-w-2xl">
            <div className="relative z-30 text-center">
              <h5 className="mb-2 text-lg font-medium capitalize text-white">
                Find the <span className="font-semibold text-primary">best place</span>
              </h5>
              <h2 className="mb-1 text-5xl/snug font-bold capitalize text-white">Tour &amp; Farm House</h2>
              <p className="mb-10 text-base text-white">
                At vero eos accusamus a iusto odio dignissimos ducimus qui blanditiis praesentium voluptayum deleniti corrupti quos dolores quas
                molestias excepturi occaecati cupiditate provident facilisestetsit expedita distinctio.
              </p>
              <button className="rounded-md bg-white/90 px-6 py-3 text-primary transition-all duration-700 hover:bg-white">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default CTA;