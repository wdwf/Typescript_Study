import React from "react";

interface IUser {
  name: string;
  email: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <div>
      <p><strong>Nome: </strong> {user.name}</p>
      <p><strong>Email: </strong> {user.email}</p><br/>
    </div>
  )
}

export default User;