import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalResult = (props) => {
  const { show, setShow, dataModalResult } = props;

  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Your Result</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center text-danger ">
          <div>Total Question : {dataModalResult?.countTotal ?? "Loading"}</div>
          <div>
            Total Correct Answers : {dataModalResult?.countCorrect ?? "Loading"}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Show Answer
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalResult;
