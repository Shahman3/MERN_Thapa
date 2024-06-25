import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { useAuth } from "../store/auth";

import { toast } from "react-toastify";
function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { storeTokenInLS } = useAuth();
  const navigate = useNavigate();
  // handling the input values
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
    // [name] is a dynamic , with [] name is dynamicly set, we change in username,email or other input field his name is dynamic set here. (because we have 4 names.)
  };

  // let handle the form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const res_data = await response.json();
      // console.log("after login: ", res_data);

      if (response.ok) {
        toast.success("Login Successful");

        storeTokenInLS(res_data.token);
        navigate("/");
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.message
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image">
                <img
                  src="/images/login.jpg"
                  alt="A girl is trying to do login"
                  height="350"
                  width="350"
                />
              </div>
              {/* Registration form  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      value={user.email}
                      onChange={handleInput}
                      placeholder="enter your email"
                      id="email"
                      autoComplete="off"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="text"
                      name="password"
                      value={user.password}
                      onChange={handleInput}
                      placeholder="password"
                      id="password"
                      autoComplete="off"
                      required
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn w-btn btn-submit">
                    Login Now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Login;
