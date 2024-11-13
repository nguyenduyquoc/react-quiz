import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDeleteUser = (props) => {
  const { show, setShow, userDelete } = props;

  const handleClose = () => setShow(false);

  const handleSubmitDeleteUser = () => {
    // xóa
  };
  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Xác nhận xóa khách hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center text-danger ">
          Bạn có muốn xóa người dùng có email "
          <strong>
            "{userDelete && userDelete.email ? userDelete.email : ""}"
          </strong>{" "}
          không?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="danger" onClick={() => handleSubmitDeleteUser()}>
            Xóa
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
