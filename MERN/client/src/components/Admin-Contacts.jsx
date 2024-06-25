import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

import "../components/layouts/admin.css";
function AdminContacts() {
  const [contactsData, setContactsData] = useState([]);
  const { authorizationToken } = useAuth();
  const getAllContactsData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/contacts", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(`users ${data}`);
      setContactsData(data);
    } catch (error) {
      console.log(error);
    }
  };
  // Delete the User
  const deleteContact = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/contacts/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        getAllContactsData();
        toast.success("Delete Contact Successfully");
      } else {
        toast.error("Contact Not Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllContactsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1 className="">Admin Contacts Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {contactsData.map((curContactData, index) => {
                const { username, email, message, _id } = curContactData;
                return (
                  <tr key={index}>
                    <td> {username}</td>
                    <td> {email}</td>
                    <td> {message}</td>
                    <td className="updateLink">
                      <Link to={`/admin/contacts/${_id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button onClick={() => deleteContact(_id)}>Delete</button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default AdminContacts;
