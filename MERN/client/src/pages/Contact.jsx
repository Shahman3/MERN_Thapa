import { useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: "",
  });
  const { user } = useAuth();

  // console.log("frontend user ", user.email);

  const [userData, setUserData] = useState(true);

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    });
    setUserData(false);
  }

  // handling the input values
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setContact({
      ...contact,
      [name]: value,
    });
    // [name] is a dynamic , with [] name is dynamicly set, we change in username,email or other input field his name is dynamic set here. (because we have 4 names.)
    //? second method for handle input values
    // setContact((prev) => ({
    //   ...prev,
    //   [name]: value,
    // }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(contact);
    try {
      const response = await fetch(`http://localhost:5000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact({ username: user.username, email: user.email, message: "" });
        //  const data = await response.json();
        //  console.log(data);
        toast.success("Message send successfully");
      }
      // console.log(response);
    } catch (error) {
      console.log("Contact-Form", error);
      toast.error("Message not send");
    }
  };

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading pd-left  mb-3">Contact Us</h1>
        </div>
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="/images/login.jpg"
              alt="we are always ready to help"
              height="350"
              width="350"
            />
          </div>
          {/* Registration form  */}
          <div className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={contact.username}
                  onChange={handleInput}
                  // placeholder="name"
                  id="username"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  name="email"
                  value={contact.email}
                  onChange={handleInput}
                  // placeholder="enter your email"
                  id="email"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <br />
                <textarea
                  name="message"
                  value={contact.message}
                  onChange={handleInput}
                  // placeholder="enter your message"
                  id="message"
                  cols="30"
                  rows="5"
                  autoComplete="off"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn w-btn btn-submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13625.324492120037!2d73.04270822699776!3d31.37743213846971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39225d3ccbc4e9f3%3A0x139d4e842c675adb!2sMuzaffar%20Colony%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1715617707245!5m2!1sen!2s"
        width="100%"
        height="450"
        // style="border:0;"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default Contact;
