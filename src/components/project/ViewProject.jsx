import React, { useState } from "react";
import Avatar from "./Avatar";
import Description from "./Description";
import AddBoxIcon from "@mui/icons-material/AddBox";
import TaskTable from "./TaskTable";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import TextEditor from "../quill/TextEditor";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";
const ViewProject = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="d-flex justify-content-between mb-3">
        <h3>About Project</h3>
        <button className="btn btn-primary mx-2">
          <AddToPhotosIcon />
          Add Project
        </button>
      </div>
      <Description />
      <div className="row  mx-1">
        <div
          className="col-md-12 col-xl-3 card mt-5"
          style={{ borderTop: "solid #1976D2" }}
        >
          <b className="card-title mt-3">Team Member/s:</b>
          <div className="card-body">
            <Avatar />
            <Avatar />
          </div>
        </div>
        <div
          className="col-md-12 mt-5 col-xl-9 card "
          style={{ borderTop: "solid #1976D2" }}
        >
          <div className="mt-3 d-flex justify-content-between">
            <b className="card-title ">Task List:</b>
            <button
              className="d-flex justify-content-between btn btn-primary"
              onClick={handleShow}
            >
              <AddBoxIcon />
              New Task
            </button>
            <>
              <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={show}
                onHide={handleClose}
              >
                <form>
                  <Modal.Header closeButton>
                    <Modal.Title>New Task for Management System</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <input
                      className="form-control form-control-sm"
                      type="text"
                      placeholder="Task"
                    />
                    <p className="mt-3">Description</p>
                    <TextEditor />
                    <div className="form-group mt-3">
                      <label htmlFor="exampleFormControlSelect1">Status</label>
                      <select
                        className="form-control"
                        id="exampleFormControlSelect1"
                      >
                        <option>pending</option>
                        <option>success</option>
                      </select>
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
            </>
          </div>
          <div className="card-body">
            <TaskTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
