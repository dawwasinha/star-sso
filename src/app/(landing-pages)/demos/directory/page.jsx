import TopNavbar from '@/components/TopNavbar';
import { navLinks } from './data';
import Hero from './components/Hero';
import LatestDirectory from './components/LatestDirectory';
import Features from './components/Features';
import CTA from './components/CTA';
import Testimonial from './components/Testimonial';
import Blogs from './components/Blogs';
import Footer2 from '@/components/Footer2';
const Directory = () => {
  return <>
      <TopNavbar navLinks={navLinks} />
      <Hero />
      <LatestDirectory />
      <Features />
      <CTA />
      <Testimonial />
      <Blogs />
      <Footer2 />
    </>;
};
export default Directory;