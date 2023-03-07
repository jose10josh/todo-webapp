import React from 'react';
import { withStorageListener } from './WithStorageAlert';
import './ChangeAlert.css';


type ChangeAlertModel = {
  show: boolean,
  toggleShow: () => void
}
function ChangeAlert({ show, toggleShow }:ChangeAlertModel) {
  if (show) {
    return (
      <div className="ChangeAlert-bg">
        <div className="ChangeAlert-container">
          <p>Parece que cambiaste tus TODOs en otra pestaña o ventana del navegador.</p>
          <p>¿Quieres sincronizar tus TODOs?</p>
          <button
            className="TodoForm-button TodoForm-button--add"
            onClick={toggleShow}
          >
            Yes!
          </button>
        </div>
      </div>
    );
  } else {
    return null
  }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export { ChangeAlertWithStorageListener };