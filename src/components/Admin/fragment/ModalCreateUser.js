import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalCreateUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
        Thêm khách hàng
      </Button>

      <Modal show={show} onHide={handleClose} size="xl" backdrop="static">
        {/* Thêm size xl cho nó lớn nhất */}
        {/* Thêm backdrop="static" để nhấn ra ngoài k bị mất modal */}
        <Modal.Header closeButton>
          <Modal.Title>Thêm khách hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select className="form-select">
                <option selected value="USER">
                  USER
                </option>
                <option value="AMIN">ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label">Avatar</label>
              <input type="file" />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="success" onClick={handleClose}>
            Thêm mới
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateUser;
