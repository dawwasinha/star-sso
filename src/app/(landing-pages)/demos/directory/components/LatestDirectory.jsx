import BlogCard from '@/components/common/BlogCard';
import { latestDirectories } from '../data';
const LatestDirectory = () => {
  return <section id="about" className="py-24">
      <div className="container">
        <div className="mb-14 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h2 className="mb-1 text-3xl/snug font-bold capitalize text-gray-800">Latest Directory</h2>
            <p className="text-base text-gray-600">
              Itaque earum rerum tenetur sapiente delectus aut reiciendis voluptatibus doloribus asperiores repellat.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {latestDirectories.map((directory, idx) => <BlogCard {...directory} key={idx} />)}
        </div>
      </div>
    </section>;
};
export default LatestDirectory;