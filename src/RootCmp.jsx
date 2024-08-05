import { BrowserRouter as Router } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx'
import { HeroSection } from './cmps/HeroSection.jsx'
import { Skills } from './cmps/Skills.jsx'
import { Reviews } from './cmps/Reviews.jsx'
import { Banner } from './cmps/Banner.jsx'
import { AppFooter } from './cmps/AppFooter.jsx'

export function RootCmp() {
  return (
    <Router>
      <div className="main-layout">
        <AppHeader />
        <main>
          <HeroSection />
          <Skills />
          <Reviews />
          <Banner />
        </main>
        <AppFooter />
      </div>
    </Router>
  )
}
