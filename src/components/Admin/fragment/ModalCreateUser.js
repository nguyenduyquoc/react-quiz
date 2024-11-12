import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { toast } from "react-toastify";

const ModalCreateUser = (props) => {
  const { show, setShow } = props;
  const handleClose = () => {
    setShow(false);
    setEmail("");
    setUsername("");
    setPassword("");
    setImage("");
    setRole("USER");
    setPreviewImage("");
  };

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [role, setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState("");

  const handelUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
      console.log("upload file ");
    } else {
      //   setPreviewImage("");
      console.log("not upload file ");
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitCreateUser = async () => {
    // validate dữ liệu
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("invalid email");
      return;
    }
    if (!password) {
      toast.error("invalid password");
      return;
    }

    // call api
    const data = new FormData();
    data.append("email", email);
    data.append("password", password);
    data.append("username", username);
    data.append("role", role);
    data.append("userImage", image);

    try {
      let response = await axios.post(
        "http://localhost:8081/api/v1/participant",
        data
      );
      console.log(">>> check response : ", response.data);
      if (response.data && response.data.EC === 0) {
        toast.success(response.data.EM);
        handleClose();
      }

      if (response.data && response.data.EC !== 0) {
        toast.error(response.data.EM);
      }
    } catch (error) {
      console.error("Error calling API:", error);
      toast.error("An error occurred while creating the user.");
    }
  };

  return (
    <>
      {/* <Button variant="dark" onClick={handleShow}>
        Thêm khách hàng
      </Button> */}

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        {/* Thêm size xl cho nó lớn nhất */}
        {/* Thêm backdrop="static" để nhấn ra ngoài k bị mất modal */}
        <Modal.Header closeButton>
          <Modal.Title>Thêm khách hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                autoComplete="username"
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                autoComplete="password"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                onChange={(event) => setRole(event.target.value)}
              >
                <option value="USER">USER</option>
                <option value="AMIN">ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label htmlFor="upload-image" className="form-label label-upload">
                <div className="plus">+</div>
                Upload File Image
              </label>
              <input
                type="file"
                hidden
                id="upload-image"
                onChange={(event) => handelUploadImage(event)}
              />
              <div className="col-md-12 img-preview">
                {previewImage ? (
                  <img src={previewImage} alt="" />
                ) : (
                  <span>Preview image</span>
                )}
              </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            Đóng
          </Button>
          <Button variant="success" onClick={() => handleSubmitCreateUser()}>
            Thêm mới
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalCreateUser;
