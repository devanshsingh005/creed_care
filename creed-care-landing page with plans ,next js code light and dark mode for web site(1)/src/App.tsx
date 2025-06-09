import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import HowItWorks from "./components/HowItWorks"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"
import TrustSecurity from "./components/TrustSecurity"
import Results from "./components/Results"
import CommunityImpact from "./components/CommunityImpact"
import FAQ from "./components/FAQ"
import ThematicIllustrations from "./components/ThematicIllustrations"
import Testimonials from "./components/Testimonials"
import Pricing from "./components/Pricing"
import MobileApp from "./components/MobileApp"
import Newsletter from "./components/Newsletter"
import LiveSupport from "./components/LiveSupport"
import SecondaryHero from "./components/SecondaryHero"
import ThirdHero from "./components/ThirdHero"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main>
        <Hero />
        <About />
        <HowItWorks />
        <Services />
        <WhyChooseUs />
        <TrustSecurity />
        <Results />
        <CommunityImpact />
        <FAQ />
        <ThematicIllustrations />
        <Testimonials />
        <Pricing />
        <MobileApp />
        <Newsletter />
        <LiveSupport />
        <SecondaryHero />
        <ThirdHero />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
