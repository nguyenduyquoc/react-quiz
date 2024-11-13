import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import { postCreateNewUser } from "../../../services/UserService";
import _ from "lodash";

const ModalUpdateUser = (props) => {
  const { show, setShow, userUpdate } = props;
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

  useEffect(() => {
    console.log(">>> run useEffect in ModalCreateUser");
    if (!_.isEmpty(userUpdate)) {
      setEmail(userUpdate.email);
      setUsername(userUpdate.username);
      setRole(userUpdate.role);
      if (userUpdate.image) {
        setPreviewImage(`data:image/jpeg;base64,${userUpdate.image}`);
      }
    }
  }, [userUpdate]);

  const handelUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
      //   console.log("upload file ");
    } else {
      //   console.log("not upload file ");
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitUpdateUser = async () => {
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

    try {
      let data = await postCreateNewUser(
        email,
        password,
        username,
        role,
        image
      );
      console.log(">>> check data response : ", data);
      if (data && data.EC === 0) {
        toast.success(data.EM);
        handleClose();
        await props.fetchListUser();
      }

      if (data && data.EC !== 0) {
        toast.error(data.EM);
      }
    } catch (error) {
      console.error("Error calling API:", error);
      toast.error("An error occurred while creating the user.");
    }
  };

  console.log(">>> check render in ModalCreateUser: ", userUpdate);

  return (
    <>
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
          <Modal.Title>Sửa khách hàng</Modal.Title>
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
                disabled
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
                disabled
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
          <Button variant="success" onClick={() => handleSubmitUpdateUser()}>
            Thêm mới
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalUpdateUser;
