import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../services/UserService";
import { toast } from "react-toastify";

const ModalDeleteUser = (props) => {
  const { show, setShow, userDelete } = props;

  const handleClose = () => setShow(false);

  const handleSubmitDeleteUser = async () => {
    try {
      let data = await deleteUser(userDelete.id);
      console.log(">>> check data response : ", data);
      if (data && data.EC === 0) {
        toast.success(data.EM);
        handleClose();
        // await props.fetchListUser();
        props.setCurrentPage(1);
        await props.fetchListUserWithPaginate(1);
      }

      if (data && data.EC !== 0) {
        toast.error(data.EM);
      }
    } catch (error) {
      console.error("Error calling API:", error);
      toast.error("An error occurred while creating the user.");
    }
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
