import TopNavbar from '@/components/TopNavbar';
import { navLinks } from './data';
import Hero from './components/Hero';
import Services from './components/Services';
import Features from './components/Features';
import Footer2 from '@/components/Footer2';
const Saas = () => {
  return <>
      <TopNavbar navLinks={navLinks} isDark />
      <Hero />
      <Services />
      <Features />
      <Footer2 />
    </>;
};
export default Saas;