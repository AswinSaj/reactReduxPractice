import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { updateUser } from "./userReducer";

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUsers = users.filter((user) => user.id == id);
  const { name, email } = existingUsers[0];
  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(
      updateUser({
        id: id,
        name: uname,
        email: uemail,
      })
    );
    navigate("/");
  };
  return (
    <div>
      <h3>Update User</h3>
      <form onSubmit={handleUpdate}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="enter name"
            value={uname}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="email"
            value={uemail}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <br />
        <button className="btn btn-info">Update</button>
      </form>
    </div>
  );
};

export default Update;
