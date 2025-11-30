import TopNavbar from '@/components/TopNavbar';
import { navLinks } from './data';
import Hero from './components/Hero';
import LandingPages from './components/LandingPages';
import ExtraPages from './components/ExtraPages';
import AccountPages from './components/AccountPages';
import Features from './components/Features';
import Footer from '@/components/Footer';
const Home = () => {
  return <>
      <TopNavbar navLinks={navLinks} />
      <Hero />
      <LandingPages />
      <ExtraPages />
      <AccountPages />
      <Features />
      <Footer />
    </>;
};
export default Home;