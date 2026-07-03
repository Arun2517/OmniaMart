import logo from "../../assets/images/logo.png";

function Hero() {
  return (
    <section className="hero">
      <svg
        id="thread-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="threadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1B3A8C" />
            <stop offset="100%" stopColor="#2F6FED" />
          </linearGradient>
        </defs>

        <path
          className="thread-path"
          id="heroThread"
          d="M -50,650 C 300,780 550,780 760,600 C 970,420 1150,420 1500,520"
        />
      </svg>

      <div className="hero-grid">
        <div className="hero-inner">
          <p className="label">
            Style <span className="dot">•</span> Tech{" "}
            <span className="dot">•</span> Everyday Essentials
          </p>

          <h1>
            One mart. <span className="accent">Everything</span> you actually
            use.
          </h1>

          <p>
            Browse, add to cart, and check out right here — real inventory,
            real orders, updated live.
          </p>

          <div className="hero-actions">
            <button className="btn">Shop Now</button>

            <button className="btn btn-ghost">
              Why Omnia Mart
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <b>12K+</b>
              <span>Products curated</span>
            </div>

            <div className="stat">
              <b>48h</b>
              <span>Average delivery</span>
            </div>

            <div className="stat">
              <b>4.8/5</b>
              <span>Customer rating</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="ring"></div>

          <div className="ring r2"></div>

          <div className="hero-logo-wrap">
            <img src={logo} alt="Omnia Mart" />
          </div>

          <div className="chip c1">
            <span className="sw"></span>
            New Tech Drop
          </div>

          <div className="chip c2">
            <span className="sw"></span>
            Style Edit
          </div>

          <div className="chip c3">
            <span className="sw"></span>
            Daily Essentials
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;