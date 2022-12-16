import { Button, Image } from "react-bootstrap";
import { User } from "../../models/UserModel";

import { Container, Content } from "./styles";

interface CardProps {
  user: User;
  onClickEdit : () => void;
}

export function UserCard({ user, onClickEdit }: CardProps) {
  return (
    <>
      <Container>
        <Image roundedCircle src={user.avatar} />
        <Content>
          <h3>{user.name}</h3>
          <Button
            onClick={onClickEdit}
            style={{ width: "100px" }}
            variant="primary"
          >
            Editar
          </Button>
        </Content>
      </Container>
    </>
  )
}