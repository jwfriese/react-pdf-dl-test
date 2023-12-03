import {useState} from 'react';
import Modal from 'react-modal';
import BasicDocument from "./BasicDocument";

Modal.setAppElement('#root'); // Prevents screen readers from reading background content

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal}>Show PDF</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="PDF Viewer"
      >
        <BasicDocument/>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
}

export default App;
