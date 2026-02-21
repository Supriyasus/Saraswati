import './index.css'
import AboutUs from './sections/AboutUs';
import Hero from './sections/Hero';
import Locations from './sections/Locations';
import LogoMarquee from './sections/LogoMarquee';
import Navbar from './sections/Navbar'
import Team from './sections/Team';
import Timeline from './sections/Timeline';
import Work from './sections/Work';
import FooterBar from './sections/FooterBar';


export default function App() {
  return (
    <>
    <Navbar />
    <Hero />
    <LogoMarquee />
    <AboutUs />
    <Work />
    <Timeline />
    <Team />
    <Locations />
    <FooterBar />
    </>
  );
}
