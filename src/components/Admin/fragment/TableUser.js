import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/UserService";

const TableUser = (props) => {
  const [listUsers, setListUser] = useState([
    // {
    //   id: 1,
    //   username: "hoangquoc293",
    //   email: "hoangquoc293@gmail.com",
    //   role: "USER",
    // },
    // {
    //   id: 1,
    //   username: "npngan255",
    //   email: "npngan255@gmail.com",
    //   role: "USER",
    // },
  ]);

  const fetchListUser = async () => {
    let data = await getAllUser();
    if (data.EC === 0) {
      setListUser(data.DT);
    }
  };

  // chạy sau khi component được render
  useEffect(() => {
    fetchListUser();
  }, []);

  return (
    <>
      <table className="table table-hover table-custom">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col" className="text-center">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((user, index) => {
              return (
                <tr key={`list-users-${index}`}>
                  <th scope="row">{user.id}</th>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td className="d-flex justify-content-evenly">
                    <button className="btn">
                      <i class="bi bi-display"></i>
                    </button>
                    <button className="btn text-warning">
                      <i class="bi bi-pencil-square"></i>
                    </button>
                    <button className="btn text-danger">
                      <i class="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
          {listUsers && listUsers.length == 0 && (
            <tr>
              <td className="text-center" colSpan="4">
                No data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
