import QuoteIcon from '../assets/images/icon-quotes.svg'
import LeftIcon from '../assets/images/bg-pattern-home-4-about-3.svg'
import RightIcon from '../assets/images/bg-pattern-home-5.svg'
import ReviewrIcon1 from '../assets/images/avatar-kady.jpg'
import ReviewrIcon2 from '../assets/images/avatar-aiysha.jpg'
import ReviewrIcon3 from '../assets/images/avatar-arthur.jpg'

export function Reviews() {
  return (
    <section className="review-container">
      <img src={LeftIcon} alt="Review Left Icon" className="review-left-icon" />
      <div className="reviews">
        <h1 className="review-title">
          Delivering real results for top companies. Some of our{' '}
          <span className="coloredg">success stories.</span>
        </h1>

        <div className="review-list">
          <div className="review">
            <img src={QuoteIcon} alt="Quote Icon" className="quote-icon" />
            <p className="review-text">
              “The team perfectly fit the specialized skill set required. They
              focused on the most essential features helping us launch the
              platform eight months faster than planned.”
            </p>
            <p className="reviewer-name">Kady Baker</p>
            <img
              src={ReviewrIcon1}
              alt="Kady Baker"
              className="reviewer-icon"
            />
          </div>
          <div className="review">
            <img src={QuoteIcon} alt="Quote Icon" className="quote-icon" />
            <p className="review-text">
              “We needed to automate our entire onboarding process. The team
              came in and built out the whole journey. Since going live, user
              retention has gone through the roof!”{' '}
            </p>
            <p className="reviewer-name">Aiysha Reese</p>
            <img
              src={ReviewrIcon2}
              alt="Aiysha Reese"
              className="reviewer-icon"
            />
          </div>
          <div className="review">
            <img src={QuoteIcon} alt="Quote Icon" className="quote-icon" />
            <p className="review-text">
              “Amazing. Our team helped us build an app that delivered a new
              experience for hiring a physio. The launch was an instant success
              with 100k downloads in the first month.”
            </p>
            <p className="reviewer-name">Arthur Clarke</p>
            <img
              src={ReviewrIcon3}
              alt="Arthur Clarke"
              className="reviewer-icon"
            />
          </div>
        </div>
      </div>
      <img src={RightIcon} alt="Review Right Icon" className="review-right-icon" />
    </section>
  )
}
