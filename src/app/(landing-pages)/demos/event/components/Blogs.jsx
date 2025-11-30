import BlogCard from '@/components/common/BlogCard';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { blogs } from '../data';
const Blogs = () => {
  return <section id="blog" className="relative bg-slate-50 bg-[url('../images/landing/directory/cta-bg.png')] bg-cover bg-no-repeat py-20">
      <div className="container">
        <div className="relative z-30">
          <div className="mb-16 flex items-center justify-center">
            <div className="max-w-2xl text-center">
              <h5 className="mb-2 text-lg font-medium capitalize text-gray-800">
                Event <span className="font-semibold text-primary">Blogs</span>
              </h5>
              <h2 className="mb-1.5 text-3xl/snug font-bold capitalize text-gray-800">Latest Blog</h2>
              <p className="max-w-xl text-base font-medium text-gray-500">
                Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque rem aperiam.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
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