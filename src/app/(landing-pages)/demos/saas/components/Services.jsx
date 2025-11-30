import { cn } from '@/helpers/cn';
import { applications } from '../data';
const Services = () => {
  return <section id="aplikasi" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container">
        <div className="mb-16 flex items-center justify-center">
          <div className="max-w-3xl text-center">
            <h5 className="mb-3 text-lg font-semibold uppercase tracking-wider text-primary">
              Aplikasi Terintegrasi
            </h5>
            <h2 className="mb-4 text-4xl/snug font-bold text-gray-800 lg:text-5xl/snug">
              Tiga Pilar <span className="text-primary">ART Ecosystem</span>
            </h2>
            <p className="text-lg text-gray-600">
              Solusi komprehensif untuk manajemen aset, pelacakan operasi, dan konfigurasi perubahan dalam satu platform yang powerful
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {applications.map((app, idx) => <div 
              className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl" 
              key={idx}
            >
              <div className="absolute right-0 top-0 h-32 w-32 -translate-y-8 translate-x-8 rounded-full bg-gradient-to-br from-primary/5 to-transparent" />
              
              <span className={cn('relative z-10 mb-6 inline-flex h-20 w-20 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110', app.variant)}>
                {app.icon}
              </span>
              
              <h5 className="mb-2 text-2xl font-bold text-gray-800">{app.title}</h5>
              <p className="mb-4 text-sm font-medium text-primary">{app.subtitle}</p>
              <p className="text-base leading-relaxed text-gray-600">{app.description}</p>
              
              <div className="mt-6 flex items-center font-semibold text-primary transition-all group-hover:translate-x-2">
                <span className="text-sm">Pelajari lebih lanjut</span>
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Services;