import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
import { blogs } from '../data';
const BlogCard = ({
  date,
  description,
  image,
  title
}) => {
  return <div className="group space-y-6 overflow-hidden rounded-lg bg-white p-3">
      <div className="relative overflow-hidden rounded-lg">
        <img className="ransition mx-auto h-full w-full object-cover object-top duration-500 group-hover:scale-105" src={image} alt="woman" loading="lazy" width={640} height={805} />
        <div className="absolute inset-0">
          <div className="h-full w-full rounded bg-black/60">
            <div className="flex h-full items-end p-4">
              <div>
                <p className="mb-2 font-semibold text-white">{date}</p>
                <h5 className="mb-2 text-3xl font-bold text-white">{title}</h5>
                <p className="mb-8 truncate whitespace-nowrap text-base font-semibold text-gray-100 md:whitespace-normal"> {description}</p>
                <Link to="" className="border-b border-dashed border-gray-200 pb-1 text-white">
                  Read More <IconifyIcon icon="lucide:move-right" className="ms-2 inline h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
const Blogs = () => {
  return <section id="blog" className="30 relative bg-primary/5 bg-[url('../images/landing/directory/cta-bg.png')] bg-cover bg-no-repeat py-20">
      <div className="container">
        <div className="relative z-30">
          <div className="mb-14 flex items-center justify-center">
            <div className="max-w-2xl text-center">
              <h2 className="mb-1 text-3xl/snug font-bold capitalize text-gray-800">Latest Blog</h2>
              <p className="text-base text-gray-600">
                Sed ut perspiciatis unde ominis iste natus error voluptatem accusantium doloremque rem aperiam.
              </p>
            </div>
          </div>
          <div className="grid gap-4 px-4 sm:px-0 lg:grid-cols-2">
            {blogs.map((blog, idx) => <BlogCard {...blog} key={idx} />)}
          </div>
          <div className="mt-14 flex items-center justify-center">
            <button className="inline-flex items-center justify-center rounded-md border border-dashed border-primary px-4 py-2 font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white">
              Load More <IconifyIcon icon="lucide:loader" className="ms-2 inline h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>;
};
export default Blogs;