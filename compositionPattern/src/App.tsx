import { useState } from 'react';
import './App.css'
import { Modal } from './components/ModalWrong/Modal';
import { ModalComposition } from './components/ModalRight';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenComposition, setIsOpenComposition] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  }

  const handleCloseModal = () => {
    setIsOpen(false);
  }

  const handleOpenModalComposition = () => {
    setIsOpenComposition(true);
  }

  const handleCloseModalComposition = () => {
    setIsOpenComposition(false);
  }

  return (
    <div className="bg-black text-white">
      <h1 className="text-3xl font-bold mb-14 text-white">
        Simple React Typescript Tailwind Sample
      </h1>

      <button onClick={handleOpenModal}>Open modal</button>
      <button className='ml-5 border border-gray-400 rounded-xl' onClick={handleOpenModalComposition}>Open modal Composition</button>

      <Modal isOpen={isOpen} onClose={handleCloseModal} hasActions>
        <h2>Important Content</h2>
      </Modal>

      <ModalComposition.Root isOpen={isOpenComposition}>
        <ModalComposition.Header>
          <ModalComposition.Title>Modal title</ModalComposition.Title>
          <ModalComposition.Action onClick={handleCloseModalComposition} title="close">
            &times;
          </ModalComposition.Action>
        </ModalComposition.Header>
        <ModalComposition.Content>
          <h2 className='text-gray-800'>IMPORTANT CONTENT</h2>
        </ModalComposition.Content>

        <ModalComposition.Actions>
          <ModalComposition.Action color='error' onClick={handleCloseModalComposition}>
            Close
          </ModalComposition.Action>
          <ModalComposition.Action color='success'>Salvar</ModalComposition.Action>
        </ModalComposition.Actions>
      </ModalComposition.Root>
    </div>
  )
}

export default App
