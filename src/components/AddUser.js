import React from "react";

const AddUser = ({ onAdd }) => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.username.value, e.target.email.value);
    e.target.name.value = "";
    e.target.username.value = "";
    e.target.email.value = "";
  };

  return (
    <div className="addUser">
      <form onSubmit={handleOnSubmit}>
        <h3 className="App">Add User</h3>
        <input className="input" placeholder="Name" name="name" />
        <input className="input" placeholder="Username" name="username" />
        <input className="input" placeholder="Email" name="email" />
        <button className="btn" onSubmit={handleOnSubmit}>
          Add
        </button>
        <hr />
      </form>
    </div>
  );
};

export default AddUser;
