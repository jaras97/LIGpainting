import Footer from '../components/Footer';
import Header from '../components/Header';
import Contact from '../components/sections/Contact';
import FAQ from '../components/sections/Faq';
import Hero from '../components/sections/Hero';
import Process from '../components/sections/Process';
import Services from '../components/sections/Services';
import Work from '../components/sections/Work';

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Process />
        <Work />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
