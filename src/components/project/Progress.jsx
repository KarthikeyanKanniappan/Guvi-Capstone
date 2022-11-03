import React, { useState } from "react";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Modal from "react-bootstrap/Modal";
import TextEditor from "../quill/TextEditor";
import Button from "react-bootstrap/Button";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
const Progress = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="card mt-5" style={{ height: "30vh" }}>
      <p></p>
      <div className="d-flex justify-content-between">
        <b className="card-title ">Members progress/Activity</b>
        <button
          className="d-flex justify-content-between btn btn-primary"
          onClick={handleShow}
        >
          <AddBoxIcon />
          Documenting Activity
        </button>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={show}
          onHide={handleClose}
        >
          <form>
            <Modal.Header closeButton>
              <Modal.Title>
                <CreateNewFolderIcon />
                New Progress
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div class="row">
                <div className="col-md-6">
                  <div className="col mb-3">
                    <div className="form-group ">
                      <label htmlFor="exampleFormControlSelect1">
                        <b>Project Manager</b>
                      </label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>pending</option>
                        <option>success</option>
                      </select>
                    </div>
                  </div>
                  <div class="col">
                    <label htmlFor="exampleFormControlSelect1">
                      <b>Subject</b>
                    </label>
                    <input type="text" class="form-control" />
                  </div>
                  <div class="col">
                    <label htmlFor="exampleFormControlSelect1">
                      <b>Date</b>
                    </label>
                    <input type="date" class="form-control" />
                  </div>
                  <div class="col">
                    <label htmlFor="exampleFormControlSelect1">
                      <b>Start Time</b>
                    </label>
                    <input type="time" class="form-control" />
                  </div>
                  <div class="col">
                    <label htmlFor="exampleFormControlSelect1">
                      <b>End Time</b>
                    </label>
                    <input type="time" class="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <b>Description</b>
                  <TextEditor height={30} />
                </div>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </Modal>
      </div>
    </div>
  );
};

export default Progress;
