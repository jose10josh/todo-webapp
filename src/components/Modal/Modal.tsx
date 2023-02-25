import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'


type AddModalProps = {
  children: React.ReactNode
}
const Modal = ({children}:AddModalProps) => {
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    document.getElementById('add-modal')!);
};

export {Modal};