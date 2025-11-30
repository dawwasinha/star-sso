import useCountdown from '@/hooks/useCountdown';
const TimeDuration = () => {
  const {
    days,
    hours,
    minutes,
    seconds
  } = useCountdown();
  return <div className="h-full w-full">
      <div className="flex h-full w-full items-center justify-center">
        <div className="z-30 my-10 text-white">
          <div className="grid items-center justify-center gap-4 sm:grid-cols-2">
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/30 backdrop-blur-xl sm:h-44 sm:w-44">
              <div className="text-center">
                <span id="days" className="text-3xl font-bold sm:text-5xl">
                  {days}
                </span>
                <p className="mt-2 text-base font-medium">Days</p>
              </div>
            </div>
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/30 backdrop-blur-xl sm:h-44 sm:w-44">
              <div className="text-center">
                <span id="hours" className="text-3xl font-bold sm:text-5xl">
                  {hours}
                </span>
                <p className="mt-2 text-base font-medium">Hours</p>
              </div>
            </div>
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/30 backdrop-blur-xl sm:h-44 sm:w-44">
              <div className="text-center">
                <span id="minutes" className="text-3xl font-bold sm:text-5xl">
                  {minutes}
                </span>
                <p className="mt-2 text-base font-medium">Minutes</p>
              </div>
            </div>
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-white/30 backdrop-blur-xl sm:h-44 sm:w-44">
              <div className="text-center">
                <span id="seconds" className="text-3xl font-bold sm:text-5xl">
                  {seconds}
                </span>
                <p className="mt-2 text-base font-medium">Seconds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default TimeDuration;