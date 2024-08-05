import HeroRightIcon from '../assets/images/bg-pattern-home-2.svg'
import HeroLeftIcon from '../assets/images/bg-pattern-about-2-contact-1.svg'

export function HeroSection() {
  return (
    <section className="hero-section">
      <img src={HeroLeftIcon} alt="Hero Left Icon" className="hero-left-icon" />
      <div className="hero-container">
        <div className="hero-title-container">
          <h1 className="hero-title">
            Find the best <span className="colored">talent</span>
          </h1>
        </div>
        <div className="hero-text-container">
          <div>line</div>
          <p className="hero-text">
            Finding the right people and building high performing teams can be
            hard. Most companies aren’t tapping into the abundance of global
            talent. We’re about to change that.
          </p>
        </div>
      </div>
      <img
        src={HeroRightIcon}
        alt="Hero Right Icon"
        className="hero-right-icon"
      />
    </section>
  )
}
