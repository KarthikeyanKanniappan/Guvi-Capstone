import React, { useState, useRef } from "react";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
const CreateUser = () => {
  const inputRef = useRef(null);
  const [add, setAdd] = useState(
    "https://static.vecteezy.com/system/resources/previews/003/563/444/original/kids-faces-child-expression-faces-little-boys-girls-cartoon-avatars-collection-free-vector.jpg"
  );
  const SetImage = (event) => {
    event.preventDefault();
    setAdd(inputRef.current.value);
  };
  return (
    <form>
      <h1>New User</h1>
      <div className="form-row">
        <div className="row mb-3">
          <div className="form-group col-md-5 mb-3">
            <label htmlFor="inputEmail4">First Name</label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="inputEmail4">Email</label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
        </div>
        <div className="row mb-3">
          <div className="form-group col-md-5 mb-3">
            <label htmlFor="inputEmail4">Last Name</label>
            <input type="text" className="form-control" id="inputEmail4" />
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="inputPassword4">Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="form-group col-md-5 mb-3">
            <label htmlFor="inputState">User Role</label>
            <select id="inputState" className="form-control">
              <option value>Employee</option>
              <option>Admin</option>
              <option>Project Manager</option>
            </select>
          </div>
          <div className="form-group col-md-5">
            <label htmlFor="inputPassword4">Confirm Password</label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
        </div>
        <div className="row mb-3 d-flex align-items-center">
          <div className="form-group col-md-5">
            <label htmlFor="inputEmail4">Avatar</label>
            <input
              type="text"
              ref={inputRef}
              className="form-control mb-2"
              id="inputEmail4"
              placeholder="Add url"
            />
          </div>
          <button
            id="inputEmail4"
            onClick={SetImage}
            className="btn mt-2  col-md-1"
          >
            <AddAPhotoIcon />
          </button>

          <div className=" col-md-5">
            <img
              src={add}
              style={{ width: "100px", height: "100px", borderRadius: "50%" }}
              alt="Avatar"
            />
          </div>
        </div>
      </div>
      <button type="submit" className="btn btn-primary">
        Save
      </button>
      <button type="submit" className="mx-3 btn btn-secondary">
        Cancel
      </button>
    </form>
  );
};

export default CreateUser;
