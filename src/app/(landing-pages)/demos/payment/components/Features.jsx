import IconifyIcon from '@/components/wrappers/IconifyIcon';
import fea1 from '@/assets/images/landing/payment/fea-1.png';
import fea2 from '@/assets/images/landing/payment/fea-2.png';
import fea3 from '@/assets/images/landing/payment/fea-3.png';
import fea4 from '@/assets/images/landing/payment/fea-4.png';
const Features = () => {
  return <section id="features" className="relative bg-primary/5 py-24 after:absolute after:inset-0 after:-z-10 after:bg-[url(../images/landing/payment/app_features_bg.png)] after:bg-cover after:bg-fixed after:blur-2xl">
      <div className="container">
        <div className="mb-16 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h5 className="mb-2 text-lg font-medium capitalize text-gray-800">
              Details <span className="font-semibold text-primary">Features</span>
            </h5>
            <h2 className="mb-1.5 text-3xl/snug font-bold capitalize text-gray-800">Easy To Use Features</h2>
            <p className="max-w-xl text-base font-medium text-gray-500">
              Itaque earum rerum tenetur sapiente delectus aut reiciendis voluptatibus doloribus asperiores repellat.
            </p>
          </div>
        </div>
        <div className="space-y-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="h-full w-full">
              <img src={fea1} alt="avatar" className="mx-auto max-h-full max-w-full" />
            </div>
            <div className="my-auto">
              <h2 className="mb-4 text-3xl font-bold text-gray-800">Security you can bank on.</h2>
              <div className="mb-8 flex flex-col">
                <p className="mb-6 pe-2 text-lg font-medium text-slate-500">
                  Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Cras ultricies turpis
                  hendrerit fringilla.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Maecenas tempus tellus
                  condimentum rhoncus.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Donec pede justo fringilla.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Aenean commodo ligula eget
                  dolor.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Nulla consequat massa quis
                  enim.
                </p>
              </div>
              <button className="relative inline-block rounded-md bg-primary px-6 py-2 text-center align-middle text-base font-semibold tracking-wide text-white ring-0 ring-primary ring-offset-2 ring-offset-white transition-all hover:ring-2">
                Read More <IconifyIcon icon="uil:angle-right-b" className="ms-2 inline-block align-middle" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="order-1 h-full w-full lg:order-2">
              <img src={fea2} alt="fea" className="mx-auto max-h-full max-w-full" />
            </div>
            <div className="order-2 my-auto lg:order-1">
              <h2 className="mb-4 text-3xl font-bold text-gray-800">Easily grow your business save more money.</h2>
              <div className="mb-8 flex flex-col">
                <p className="mb-6 pe-2 text-lg font-medium text-slate-500">
                  Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Phasellus ullamcorper ipsum
                  rutrum nunc.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Aenean ut eros et nisl
                  sagittis vestibulum.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Donec mollis hendrerit risus.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Phasellus nec sem in justo
                  pellentesque facilisis.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Praesent congue erat at
                  massa. Sed cursus turpis vitae tortor.
                </p>
              </div>
              <button className="relative inline-block rounded-md bg-primary px-6 py-2 text-center align-middle text-base font-semibold tracking-wide text-white ring-0 ring-primary ring-offset-2 ring-offset-white transition-all hover:ring-2">
                Read More <IconifyIcon icon="uil:angle-right-b" className="ms-2 inline-block align-middle" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="h-full w-full">
              <img src={fea3} alt="fea" className="mx-auto max-h-full max-w-full" />
            </div>
            <div className="my-auto">
              <h2 className="mb-4 text-3xl font-bold text-gray-800">Mack paynents in minutes.</h2>
              <div className="mb-8 flex flex-col">
                <p className="mb-6 pe-2 text-lg font-medium text-slate-500">
                  Praesent nonummy mi in odio. Nunc interdum lacus sit amet orci vestibulum rutrum, mi nec elementum vehicula.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Vestibulum fringilla pede sit
                  amet augue.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> In turpis Pellentesque
                  posuere.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Suspendisse pulvinar augue ac
                  venenatis.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Condimentum sem libero
                  volutpat nibh.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Nec pellentesque velit pede
                  quis nunc.
                </p>
              </div>
              <button className="relative inline-block rounded-md bg-primary px-6 py-2 text-center align-middle text-base font-semibold tracking-wide text-white ring-0 ring-primary ring-offset-2 ring-offset-white transition-all hover:ring-2">
                Read More <IconifyIcon icon="uil:angle-right-b" className="ms-2 inline-block align-middle" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="h-fullorder-1 w-full lg:order-2">
              <img src={fea4} alt="fea" className="mx-auto max-h-full max-w-full" />
            </div>
            <div className="order-2 my-auto lg:order-1">
              <h2 className="mb-4 text-3xl font-bold text-gray-800">Get paid up to 3x faster.</h2>
              <div className="mb-8 flex flex-col">
                <p className="mb-6 pe-2 text-lg font-medium text-slate-500">
                  Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Maecenas vestibulum mollis
                  diam.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Pellentesque habitant morbi
                  tristique senectus.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> In ac felis quis tortor
                  malesuada pretium.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Pellentesque auctor neque nec
                  urna.
                </p>
                <p className="mb-2 text-base font-medium text-slate-500">
                  <IconifyIcon icon="uil:check-circle" className="me-1 inline-flex align-middle text-xl text-primary" /> Curabitur at lacus ac velit
                  ornare lobortis.
                </p>
              </div>
              <button className="relative inline-block rounded-md bg-primary px-6 py-2 text-center align-middle text-base font-semibold tracking-wide text-white ring-0 ring-primary ring-offset-2 ring-offset-white transition-all hover:ring-2">
                Read More <IconifyIcon icon="uil:angle-right-b" className="ms-2 inline-block align-middle" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Features;