import { BrowserRouter as Router } from 'react-router-dom'
import { AppHeader } from './cmps/AppHeader.jsx'
import { MainHeader } from './cmps/MainHeader.jsx'
import { Skills } from './cmps/Skills.jsx'
// import { AppFooter } from './cmps/AppFooter.jsx'

export function RootCmp() {
  return (
    <Router>
      <div className="main-container-root">
        <AppHeader />
        <main>
          <MainHeader/>
          <Skills/>
          {/* <Reviews/> */}
          {/* <Banner/> */}
        </main>
        {/* <AppFooter/> */}
      </div>
    </Router>
  )
}
