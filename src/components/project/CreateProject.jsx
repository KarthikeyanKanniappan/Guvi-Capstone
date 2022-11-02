import React, { useState } from "react";
import Multiselect from "multiselect-react-dropdown";
import TextEditor from "../quill/TextEditor";
const CreateProject = () => {
  const [employee, setEmployee] = useState(["nikki", "vikki", "kk", "arun"]);
  return (
    <>
      <h3> New Project</h3>
      <div className="card p-4">
        <form>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="inputState">
                <b>First Name</b>
              </label>
              <input type="text" id="inputState" className="form-control" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputState">
                <b>State</b>
              </label>
              <select id="inputState" className="form-control">
                <option selected>start</option>
                <option>pending</option>
                <option>hold</option>
                <option>success</option>
              </select>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="inputState">
                <b>Start Date</b>
              </label>
              <input
                type="date"
                className="form-control"
                placeholder="Start Date"
              />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputState">
                <b>End Date</b>
              </label>
              <input type="date" className="form-control" label="End Date" />
            </div>
            <div className="col-md-6">
              <label htmlFor="inputState">
                <b>Project Manager</b>
              </label>
              <select id="inputState" className="form-control">
                <option value="1">...</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="inputState">
                <b>Project Team Member</b>
              </label>
              <Multiselect
                options={employee}
                selectedValues={["vikki"]}
                // onSelect={(e) => {
                //   console.log(e);
                // }}
                // onRemove={(e) => {
                //   console.log(e);
                // }}
                isObject={false}
              />
            </div>
            <div className="col-md-12 mt-3 mb-5">
              <label htmlFor="inputState">
                <b>Description</b>
              </label>
              <TextEditor height={20} />
            </div>
          </div>
          <div className="mt-3">
            <button className="btn btn-secondary">Cancel</button>
            <button className="btn btn-primary mx-3">Save</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProject;
