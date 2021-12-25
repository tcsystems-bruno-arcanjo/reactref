import React, { FormEvent } from 'react';
import Input from './components/Input';
import Modal, { ModalHandles } from './components/Modal';

function App() {
  const nameInputRef = React.useRef<HTMLInputElement>(null);
  const acceptTermsRef = React.useRef({ value: false });
  const modalRef = React.useRef<ModalHandles>(null);

  const handleSubmitForm = React.useCallback((e: FormEvent) => {
    e.preventDefault();

    console.log(nameInputRef.current?.value);
    console.log(acceptTermsRef.current.value);
  }, []);

  const handleAcceptTerms = React.useCallback(() => {
    acceptTermsRef.current.value = !acceptTermsRef.current.value;
  }, []);

  const openModal = React.useCallback(() => {
    modalRef.current?.openModal();
  }, []);

  return (
    <form onSubmit={handleSubmitForm}>
      <Input label="Nome completo" name="name" ref={nameInputRef} />
      <button type="button" onClick={handleAcceptTerms}>Aceitar termos</button>
      <button type="submit">Enviar</button>
      <button onClick={openModal} type="button">Abrir modal</button>
      <Modal ref={modalRef} />
    </form>
  );
}

export default App;
