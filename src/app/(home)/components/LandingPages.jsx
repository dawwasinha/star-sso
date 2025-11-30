import { Link } from 'react-router-dom';
import { demoPages } from '../data';
const LandingPages = () => {
  return <section className="py-20" id="demo">
      <div className="container">
        <div className="mb-14 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <span className="mb-2 inline-block rounded-full border-x-2 border-x-primary bg-primary/20 px-2 text-base font-semibold text-primary">
              Demo
            </span>
            <h2 className="mb-1 text-3xl/snug font-bold capitalize text-gray-800">Landing Pages</h2>
            <p className="text-base font-medium text-gray-600">Modern landing pages available for every need</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {demoPages.map((page, idx) => <Link to={page.url} target="_blank" key={idx}>
              <div className="rounded-lg bg-slate-100 p-2">
                <div>
                  <img src={page.image} className="rounded-md" alt="demo" />
                </div>
                <h4 className="mt-4 text-center text-lg font-bold">{page.name}</h4>
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
};
export default LandingPages;