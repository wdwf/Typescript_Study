import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useMutation, useQueryClient } from "react-query";
import { api } from "../../api/api";
// import { useMutation, useQueryClient } from "react-query";
import { User } from "../../models/UserModel";

interface Props {
  show: boolean;
  user: User;
  handleClose: () => void;
}
export function EditModal({ show, handleClose, user }: Props) {
  const [value, setValue] = useState(user.name);
  // const [isLoading, setIsLoading] = useState(false)

  const queryClient = useQueryClient()

  const {isLoading, mutate} = useMutation(() => 
    api.updateUserName(user.id, value), {
      onSuccess: () => {
        queryClient.invalidateQueries('user-list')
        handleClose()
      },

    }
  )


  // async function handleSubmit() {
  //   try {
  //     setIsLoading(true)
  //     await api.updateUserName(user.id, value);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsLoading(false)
  //   }

  //   handleClose(); 
  // }


  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Atualizar Usuário</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form.Label>Nome</Form.Label>
        <Form.Control
          onChange={(e) => setValue(e.target.value)}
          type="text"
          value={value}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Fechar
        </Button>
        <Button variant="primary" onClick={() => mutate()}>
          { isLoading ? 'Carregando...' : 'Salvar' }
        </Button>
      </Modal.Footer>
    </Modal>
  );
}