import TopNavbar from '@/components/TopNavbar';
import { navLinks } from './data';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';
import EventManagement from './components/EventManagement';
import Blogs from './components/Blogs';
import Footer2 from '@/components/Footer2';
const Event = () => {
  return <>
      <TopNavbar navLinks={navLinks} />
      <Hero />
      <About />
      <Schedule />
      <Speakers />
      <Tickets />
      <EventManagement />
      <Blogs />
      <section>
        <iframe className="h-[500px] w-full" src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d6030.418742494061!2d-111.34563870463673!3d26.01036670629853!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2smx!4v1471908546569" frameBorder={0} />
      </section>
      <Footer2 />
    </>;
};
export default Event;