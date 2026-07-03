import logo from "../../assets/images/logo.png";

function Footer() {
  return (
    <>
      <section className="trust" id="trust">
        {/* We'll move the trust items into a separate component later */}
      </section>

      <section style={{ paddingTop: 0, paddingBottom: 0 }}>
        <div className="news">
          <div>
            <h2>Get first pick of new drops.</h2>

            <p>
              New arrivals across Style, Tech, and Essentials, plus early
              access to restocks.
            </p>
          </div>

          <form
            className="news-form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="you@email.com"
            />

            <button className="btn">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <footer>
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="brand">
              <img
                src={logo}
                alt="Omnia Mart"
                style={{
                  height: "38px",
                  width: "38px",
                  objectFit: "contain",
                }}
              />

              <div className="brand-name">
                OMNIA <span>MART</span>
              </div>
            </div>

            <p>
              Style, tech, and everyday essentials —
              curated and delivered under one thread.
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Omnia Mart. All rights reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;