import Image from 'next/image'
import HeroSection from './HeroSection'
import Footer from './Footer'
import Navbar from './Navbar'
import TechnologyStack from './TechnologyStack'
import Services from './Services'
import WorkingStyle from './WorkingStyle'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <HeroSection />
      <TechnologyStack />
      <WorkingStyle />
      <Services />
      
    </main>
  )
}
