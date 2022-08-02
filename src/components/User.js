const User = ({ id, name, username, email, deleteUser }) => {
  const handleDelete = () => {
    deleteUser(id);
  };
  return (
    <ul>
      <li>
        <p>Name : {name}</p>
        <p>Username : {username}</p>
        <p>Email : {email}</p>
      </li>
      <button onClick={handleDelete}>delete</button>
    </ul>
  );
};

export default User;
