export function Home() {
  return (
    <>
      <section className="sertion-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>We are the World Best IT Company</p>
            <h1>Welcome to Shahman Technical</h1>
            <p>
              Are you ready to take your business to the next level with
              cutting-edge IT solutions? Look no further! At Shahman Technical,
              we specilize in providing innovative IT services and solutions
              tailored t meet your unique needs.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn now</button>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="/images/login.jpg"
              alt=" image"
              width="350"
              height="350"
            />
          </div>
        </div>
      </section>
      <section className="section-analytics">
        <div className="container grid grid-four-cols">
          <div className="div1">
            <h1>50+</h1>
            <p>Registered Companies</p>
          </div>
          <div className="div1">
            <h1>100,00+</h1>
            <p>Happy Client</p>
          </div>
          <div className="div1">
            <h1>500+</h1>
            <p>Well Known Developers</p>
          </div>
          <div className="div1">
            <h1>24/7</h1>
            <p>Service</p>
          </div>
        </div>
      </section>
    </>
  );
}
