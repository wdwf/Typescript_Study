import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { api } from "../../api/api";
import { User } from "../../models/UserModel";
import { EditModal } from "../EditModal/EditModel";
import { UserCard } from "../UserCard/UserCard";
import { Container } from "./styles";

export function UserList() {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  // const [userList, setUserList] = useState<User[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);

  const { data, isLoading, isError } = useQuery('user-list', api.getUsers)

  // useEffect(() => {
  //   fetchUsers();
  // }, []);

  // async function fetchUsers() {
  //   try {
  //     setIsLoading(true);
  //     const users = await api.getUsers();
  //     setUserList(users);
  //   } catch (error) {
  //     console.log(error);
  //     setIsError(true)
  //   } finally {
  //     setIsLoading(false);
  //   }
  // }

  function onClickEdit() {}

  return (
    <Container>
      <h1>Lista de usuarios</h1>
      {isLoading && <h3>Carregando...</h3>}
      {isError && <h3>Ocorreu um erro 🚧👨‍🔧</h3>}
      {data?.map((user) => (
        <UserCard user={user} onClickEdit={() => setSelectedUser(user)} />
      ))}
      { selectedUser && <EditModal user={selectedUser} show={!!selectedUser} handleClose={() => setSelectedUser(null)} />  }
    </Container>
  );
}
