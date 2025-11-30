import { Link } from 'react-router-dom';
import { accountPages } from '../data';
const AccountPages = () => {
  return <section className="py-20">
      <div className="container">
        <div className="mb-14 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <span className="mb-2 inline-block rounded-full border-x-2 border-x-primary bg-primary/20 px-2 text-base font-semibold text-primary">
              Account Pages
            </span>
            <h2 className="mb-1 text-3xl/snug font-bold capitalize text-gray-800">Auth Pages</h2>
            <p className="text-base font-medium text-gray-600">Landing Auth pages available for authentication</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {accountPages.map((page, idx) => <Link to={page.url} target="_blank" key={idx}>
              <div className="rounded-lg bg-slate-100 p-2">
                <div>
                  <img src={page.image} className="rounded-md" alt="account" />
                </div>
                <h4 className="mt-4 text-center text-lg font-bold">{page.name}</h4>
              </div>
            </Link>)}
        </div>
      </div>
    </section>;
};
export default AccountPages;