import { currentYear, developedBy } from '@/common/constants';
import FallbackLoading from '@/components/FallbackLoading';
import { Suspense } from 'react';
import { Link } from 'react-router-dom';
const ComingSoonLayout = ({
  children
}) => {
  return <>
      <Suspense fallback={<FallbackLoading />}>
        {children}
      </Suspense>
      <footer className="fixed bottom-0 end-0 start-0 py-3">
        <div className="container">
          <p className="text-center text-base font-medium text-gray-400">
            {currentYear} © Opixo -{' '}
            <Link to="">
              Design crafted{' '}
              <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" data-lucide="heart" className="lucide lucide-heart inline h-4 w-4 fill-red-500 text-red-500">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
              </svg>{' '}
              {developedBy}.com
            </Link>
          </p>
        </div>
      </footer>

      {/* modal */}
      <div id="hs-vertically-centered-modal" className="hs-overlay fixed left-0 top-0 z-[60] hidden h-full w-full overflow-y-auto overflow-x-hidden">
        <div className="m-3 mt-0 flex min-h-[calc(100%-3.5rem)] items-center opacity-0 transition-all ease-out hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 sm:mx-auto sm:w-full sm:max-w-screen-md">
          <div className="relative flex w-full flex-col rounded-lg bg-white shadow-sm">
            <div className="flex items-center justify-between">
              <div className="w-full overflow-y-auto p-6">
                <div>
                  <div className='flex justify-between'>

                  <h4 className="mb-2 text-2xl/tight font-bold text-gray-800">Contact us</h4>
                  <button type="button" className="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:hover:bg-neutral-600 dark:text-neutral-400 dark:focus:bg-neutral-600" aria-label="Close" data-hs-overlay="#hs-vertically-centered-modal">
                    <span className="sr-only">Close</span>
                    <svg className="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                  </div>

                  <p className="mb-6 text-base font-medium capitalize text-gray-500">
                    Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!
                  </p>
                </div>
                <form>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="mb-4">
                      <label className="mb-2 block text-base/normal font-semibold text-gray-600" htmlFor="forContactName">
                        Name <span className="text-sm text-primary">*</span>
                      </label>
                      <input id="forContactName" className="block w-full rounded-md border-gray-200 px-3 py-1.5 focus:border-gray-300 focus:ring-transparent" type="text" placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                      <label className="mb-2 block text-base/normal font-semibold text-gray-600" htmlFor="forContactLastName">
                        Last Name <span className="text-sm text-primary">*</span>
                      </label>
                      <input id="forContactLastName" className="block w-full rounded-md border-gray-200 px-3 py-1.5 focus:border-gray-300 focus:ring-transparent" type="text" placeholder="Your Last Name" />
                    </div>
                    <div className="mb-4">
                      <label className="mb-2 block text-base/normal font-semibold text-gray-600" htmlFor="forContactEmail">
                        Email <span className="text-sm text-primary">*</span>
                      </label>
                      <input id="forContactEmail" className="block w-full rounded-md border-gray-200 px-3 py-1.5 focus:border-gray-300 focus:ring-transparent" type="email" placeholder="Your Email" />
                    </div>
                    <div className="mb-4">
                      <label className="mb-2 block text-base/normal font-semibold text-gray-600" htmlFor="forContactSubject">
                        Subject <span className="text-sm text-primary">*</span>
                      </label>
                      <input id="forContactSubject" className="block w-full rounded-md border-gray-200 px-3 py-1.5 focus:border-gray-300 focus:ring-transparent" type="text" placeholder="Your Subject" />
                    </div>
                    <div className="mb-4 lg:col-span-2">
                      <label className="mb-2 block text-base/normal font-semibold text-gray-600" htmlFor="forContactComments">
                        Comments <span className="text-sm text-primary">*</span>
                      </label>
                      <textarea id="forContactComments" className="block w-full rounded-md border-gray-200 px-3 py-1.5 focus:border-gray-300 focus:ring-transparent" rows={4} placeholder="Enter Your Message" defaultValue={''} />
                    </div>
                  </div>
                  <div>
                    <a href="#" className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 font-semibold text-primary transition-all duration-200 hover:bg-primary hover:text-white">
                      Send Message <i className="uil uil-message ms-2" />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>;
};
export default ComingSoonLayout;