import IconifyIcon from '../wrappers/IconifyIcon';
import { currency } from '@/common/constants';
import { Link } from 'react-router-dom';
const BlogCard = ({
  avatar,
  description,
  image,
  name,
  price,
  rating,
  title
}) => {
  return <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="relative h-full w-full overflow-hidden p-2">
          <img src={image} className="h-full w-full rounded-md transition-all duration-700" alt="avatar" />
          <div className="absolute inset-0 bottom-5 left-auto right-5 top-auto flex gap-1">
            {Array(Math.floor(rating)).fill(0).map((_star, idx) => <IconifyIcon icon="lucide:star" className="star-fill inline h-4 w-4 fill-amber-300 text-amber-300" key={idx} />)}
            {!Number.isInteger(rating) && <IconifyIcon icon="lucide:star-half" className="star-fill inline h-4 w-4 fill-amber-300 text-amber-300" />}
            {rating < 5 && Array(5 - Math.ceil(rating)).fill(0).map((_star, idx) => <IconifyIcon icon="lucide:star" className="inline h-4 w-4 text-amber-300" key={idx} />)}
          </div>
        </div>
        <div className="flex h-full flex-col p-4">
          <div>
            <Link to="" className="mb-2.5 text-lg font-bold">
              {title}
            </Link>
            <p className="mb-10 mt-3 text-sm font-medium text-slate-500">{description}</p>
          </div>
          <div className="mt-auto flex flex-col items-start">
            <span className="mb-2.5 inline-flex items-center rounded border-s-2 border-primary bg-primary/20 px-2 py-1.5 text-xs/none font-semibold capitalize text-primary">
              {currency}
              {price} Per person
            </span>
            <div className="flex items-center justify-center">
              <img src={avatar} className="h-10 w-10 rounded-full" alt="avatar" />
              <h5 className="ps-4 text-base font-semibold text-slate-800">{name}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default BlogCard;