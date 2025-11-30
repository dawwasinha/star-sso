import TopNavbar from '@/components/TopNavbar';
import { navLinks } from './data';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Features from './components/Features';
import Platform from './components/Platform';
import Faqs from '@/components/common/Faqs';
import Footer2 from '@/components/Footer2';
const Payment = () => {
  return <>
      <TopNavbar navLinks={navLinks} isDark />
      <Hero />
      <Steps />
      <Features />
      <Platform />
      <Faqs bgDark />
      <Footer2 />
    </>;
};
export default Payment;