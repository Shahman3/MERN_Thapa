import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

function AdminUpdate() {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });
  const navigate = useNavigate();
  const params = useParams();

  // console.log("params single user"+params);
  const { authorizationToken } = useAuth();
  const getSingleUsersData = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );
      const data = await response.json();
      // console.log(`Single User Data ${data}`);
      setData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUsersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  // TO Update THE Data Dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken,
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Update Successfully");
        navigate("/admin/users");
      } else {
        toast.error("NOT Updated");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading pd-left  mb-3">Update Users Data</h1>
        </div>
        <div className="container grid grid-two-cols">
          {/* Registration form  */}
          <div className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  name="username"
                  value={data.username}
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
                  value={data.email}
                  onChange={handleInput}
                  // placeholder="enter your email"
                  id="email"
                  autoComplete="off"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone">Mobile</label>
                <input
                  type="text"
                  name="phone"
                  value={data.phone}
                  onChange={handleInput}
                  // placeholder="enter your email"
                  id="phone"
                  autoComplete="off"
                  required
                />
              </div>

              <button type="submit" className="btn w-btn btn-submit">
                Update
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default AdminUpdate;
