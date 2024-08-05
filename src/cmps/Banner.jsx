import { NavLink } from 'react-router-dom'
import BannerIcon from '../assets/images/bg-pattern-home-6-about-5.svg'

export function Banner() {
  return (
    <div className="banner">
      <h1 className="banner-title">Ready to get started?</h1>
      <NavLink to="/" className="banner-link">
        contact us
      </NavLink>
      <img src={BannerIcon} alt="" className="banner-icon" />
    </div>
  )
}
