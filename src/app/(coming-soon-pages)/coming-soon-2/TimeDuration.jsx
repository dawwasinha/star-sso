import useCountdown from '@/hooks/useCountdown';
const TimeDuration = () => {
  const {
    days,
    hours,
    minutes,
    seconds
  } = useCountdown();
  return <div className="flex flex-wrap items-center justify-center gap-4">
      <div className="flex h-36 w-36 items-end justify-center rounded-xl rounded-t-[80px] bg-white/20 pb-6 backdrop-blur-2xl">
        <div className="text-center">
          <span id="days" className="text-5xl">
            {days}
          </span>
          <p className="mt-2">days</p>
        </div>
      </div>
      <div className="flex h-36 w-36 items-end justify-center rounded-xl rounded-t-[80px] bg-white/20 pb-6 backdrop-blur-2xl">
        <div className="text-center">
          <span id="hours" className="text-5xl">
            {hours}
          </span>
          <p className="mt-2">Hours</p>
        </div>
      </div>
      <div className="flex h-36 w-36 items-end justify-center rounded-xl rounded-t-[80px] bg-white/20 pb-6 backdrop-blur-2xl">
        <div className="text-center">
          <span id="minutes" className="text-5xl">
            {minutes}
          </span>
          <p className="mt-2">Minutes</p>
        </div>
      </div>
      <div className="flex h-36 w-36 items-end justify-center rounded-xl rounded-t-[80px] bg-white/20 pb-6 backdrop-blur-2xl">
        <div className="text-center">
          <span id="seconds" className="text-5xl">
            {seconds}
          </span>
          <p className="mt-2">Seconds</p>
        </div>
      </div>
    </div>;
};
export default TimeDuration;