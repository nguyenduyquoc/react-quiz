const TableUser = (props) => {
  const { listUsers } = props;

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
                      <i className="bi bi-display"></i>
                    </button>
                    <button className="btn text-warning">
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button className="btn text-danger">
                      <i className="bi bi-trash"></i>
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
