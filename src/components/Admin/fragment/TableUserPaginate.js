import ReactPaginate from "react-paginate";
import React, { useEffect, useState } from "react";

const TableUserPaginate = (props) => {
  const { listUsers, fetchListUserWithPaginate, pageCount } = props;

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    console.log(`User requested page number ${event.selected}`);
    fetchListUserWithPaginate(+event.selected + 1);
  };

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
                    <button
                      className="btn text-warning"
                      onClick={() => props.openUpdateUserModal(user)}
                    >
                      <i className="bi bi-pencil-square"></i>
                    </button>
                    <button
                      className="btn text-danger"
                      onClick={() => props.openDeleteUserModal(user)}
                    >
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
      <div className="d-flex justify-content-center align-items-center">
        <ReactPaginate
          nextLabel=" > "
          onPageChange={handlePageClick}
          pageRangeDisplayed={3}
          marginPagesDisplayed={2}
          pageCount={pageCount}
          previousLabel=" < "
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </div>
    </>
  );
};

export default TableUserPaginate;
