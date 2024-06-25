// import { useState } from "react";
import { useAuth } from "../store/auth";

export default function About() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { user } = useAuth();

  // const [userData, setUserData] = useState(true);

  return (
    <>
      <section className="sertion-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-content">
            <p>
              Welcome,
              {user ? `${user.username} to our website` : "To our website"}
            </p>

            <h1>Why Choose Us?</h1>
            <br />

            <p>
              Expertise: Our team consists of experienced IT professionals who
              are passionate about staying up-to-date with the latest industry
              trends.
            </p>
            <br />

            <p>
              Customization: We understand that every business is unique. Thats
              why we create solutions that are tailored to your specific needs
              and goals.
            </p>
            <br />

            <p>
              Customer-Centric Approach: We prioritize your satisfaction and
              provide top-notch support to address your IT concerns.
            </p>
            <br />

            <p>
              Affordability: We offer competitive pricing without compromising
              on the qulity of our services.
            </p>
            <br />

            <p>
              Reliability: Count on us to be there when you need us. We are
              committed to ensuring your It environment is reliable and
              available 24/7.
            </p>
            <br />

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
              width="450"
              height="550"
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
