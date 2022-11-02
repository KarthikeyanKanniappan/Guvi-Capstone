import React from "react";

const Description = () => {
  return (
    <>
      <div
        className="card"
        style={{ width: "93%", borderLeft: "solid #1976D2" }}
      >
        <div className="row mx-3 mt-3">
          <div className="col-md-6">
            <b>Project Name</b>
            <p>School Management system Development</p>
          </div>
          <div className="col-md-6">
            <b>Start Date</b>
            <p>November 02,2022</p>
          </div>
          <div className="col-md-6">
            <b>Description</b>
            <p>
              This is the development of an Advanced school Management system we
              have to create
            </p>
          </div>
          <div className="col-md-6">
            <b>End Date</b>
            <p>November 10,2022</p>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <b>Status</b>
            <p>
              <span className="badge bg-success">Success</span>
            </p>
          </div>
          <div className="col-md-6"></div>
          <div className="col-md-6">
            <b>Project Manager</b>
            <p>vikki</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
