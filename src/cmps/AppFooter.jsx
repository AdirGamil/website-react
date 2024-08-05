export function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="footer-links">
        <a href="/" className="footer-link">
          home
        </a>
        <a href="/about" className="footer-link">
          about
        </a>
      </div>
      <div className="footer-contact">
        <p>
          987 Hillcrest Lane
          <br />
          Irvine, CA
          <br />
          California 92714
          <br />
          Call Us : 949-833-7432
        </p>
      </div>
      <div className="footer-social">
        <a href="https://facebook.com" className="social-icon">
          <img src="" alt="Facebook" />
        </a>
        <a href="https://twitter.com" className="social-icon">
          <img src="" alt="Twitter" />
        </a>
        <a href="https://linkedin.com" className="social-icon">
          <img src="" alt="LinkedIn" />
        </a>
      </div>
      <div className="footer-copyright">
        <p>Copyright 2020. All Rights Reserved</p>
      </div>
    </footer>
  )
}
