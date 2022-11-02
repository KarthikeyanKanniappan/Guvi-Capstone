import React from "react";

const Avatar = () => {
  return (
    <div className="d-flex d-inline mb-3 align-items-center">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        class="rounded-circle"
        style={{ width: "50px" }}
        alt="Avatar"
      />
      <b className="mx-2">Vikki</b>
    </div>
  );
};

export default Avatar;
