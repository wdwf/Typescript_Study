// Armazena todos os items que podem ir no modal como
// funçoes componentes e outros elementos assim tendo um controle individual de cada elemento.

import { ModalAction } from "./ModalAction";
import { ModalActions } from "./ModalActions";
import { ModalContent } from "./ModalContent";
import { ModalHeader } from "./ModalHeader";
import { ModalRoot } from "./ModalRoot";
import { ModalTitle } from "./ModalTitle";

export const ModalComposition = {
  Root: ModalRoot,
  Content: ModalContent,
  Header: ModalHeader,
  Title: ModalTitle,
  Actions: ModalActions,
  Action: ModalAction
}