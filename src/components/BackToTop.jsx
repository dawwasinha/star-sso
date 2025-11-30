import { cn } from '@/helpers/cn';
import IconifyIcon from './wrappers/IconifyIcon';
import useScrollEvent from '@/hooks/useScrollEvent';
const BackToTop = () => {
  const {
    scrollY
  } = useScrollEvent();
  return <button onClick={() => window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })} className={cn('fixed bottom-5 end-5 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-center text-xl text-primary', scrollY > 500 ? 'opacity-100' : 'opacity-0')}>
      <IconifyIcon icon={'uil:arrow-up'} className="text-base" />
    </button>;
};
export default BackToTop;