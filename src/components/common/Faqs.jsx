import { faqsData } from '@/assets/data';
import IconifyIcon from '../wrappers/IconifyIcon';
import { cn } from '@/helpers/cn';
const Faqs = ({
  bgDark
}) => {
  return <section id="faq" className={cn('py-24', bgDark && 'bg-slate-50')}>
      <div className="container">
        <div className="mb-14 flex items-center justify-center">
          <div className="max-w-2xl text-center">
            <h5 className="mb-2 text-lg font-medium capitalize text-gray-800">
              Help <span className="font-semibold text-primary">Center</span>
            </h5>
            <h2 className="mb-1 text-3xl/snug font-bold text-gray-800">Frequently asked questions</h2>
            <p className="text-base text-gray-600">Nemo enim ipsam voluptatem that quia voluptas aut fugit </p>
          </div>
        </div>
        <div className="mx-auto max-w-2xl">
          <div className="hs-accordion-group space-y-4">
            {faqsData.map((faq, idx) => <div className={cn('hs-accordion overflow-hidden rounded-lg border border-gray-200', {
            active: idx === 0
          })} id="faq-1" key={idx}>
                <button className="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-gray-950 transition-all" aria-controls="faq-accordion-1">
                  <h5 className="text-base font-semibold">
                    <IconifyIcon icon="uil:question-circle" className="me-2 inline-flex align-middle text-xl/none" />
                    {faq.question}
                  </h5>
                  <IconifyIcon icon="lucide:chevron-up" className="h-4 w-4 transition-all duration-500 hs-accordion-active:-rotate-180" />
                </button>
                <div id="faq-accordion-1" className={cn('hs-accordion-content w-full overflow-hidden transition-[height] duration-300', {
              hidden: idx != 0
            })} aria-labelledby="faq-1">
                  <div className="px-6 pb-4 pt-0">
                    <p className="mb-2 text-sm font-medium text-gray-600">{faq.answer}</p>
                    <p className="text-sm font-medium text-gray-600">Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Faqs;