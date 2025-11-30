import { Link } from 'react-router-dom';
import { extraPages } from '../data';
const ExtraPages = () => {
  return <section className="bg-slate-50 py-20">
      <div className="container">
        <div className="mb-14 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <span className="mb-2 inline-block rounded-full border-x-2 border-x-primary bg-primary/20 px-2 text-base font-semibold text-primary">
              Extra Pages
            </span>
            <h2 className="mb-1 text-3xl/snug font-bold capitalize text-gray-800">Coming Soon Pages</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {extraPages.map((page, idx) => <Link to={page.url} target="_blank" key={idx}>
              <div className="rounded-lg bg-white p-2">
                <div>
                  <img src={page.image} className="rounded-md" alt="extra" />
                </div>
                <h4 className="mt-4 text-center text-lg font-bold">Coming Soon</h4>
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
};
export default ExtraPages;