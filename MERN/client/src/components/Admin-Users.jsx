import "../components/layouts/admin.css";
import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function AdminUsers() {
  const [users, setUsers] = useState([]);
  const { authorizationToken } = useAuth();
  const getAllUsersData = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/admin/users", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      // console.log(`users ${data}`);
      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  // Delete the User
  const deleteUser = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: authorizationToken,
          },
        }
      );

      if (response.ok) {
        getAllUsersData();
        toast.success("Delete User Successfully");
      } else {
        toast.error("User Not Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllUsersData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <section className="admin-users-section">
        <div className="container">
          <h1 className="">Admin Users Data</h1>
        </div>
        <div className="container admin-users">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((curUser, index) => {
                return (
                  <tr key={index}>
                    <td> {curUser.username}</td>
                    <td> {curUser.email}</td>
                    <td> {curUser.phone}</td>
                    <td className="updateLink">
                      <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                    </td>
                    <td>
                      <button onClick={() => deleteUser(curUser._id)}>
                        Delete
                      </button>
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

export default AdminUsers;
