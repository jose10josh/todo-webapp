import React from 'react';

type useStorageListenerModel = {
  sincronize:any
}
function useStorageListener(props:useStorageListenerModel) {
  const [storageChange, setStorageChange] = React.useState(false);

  window.addEventListener('storage', (change) => {
    if(change.key === 'TODOS_V1') {
      setStorageChange(true);
    }
  })

  const toggleShow = () => {
    props.sincronize();
    setStorageChange(false);
  }

  return {
    show:storageChange,
    toggleShow:toggleShow
  }
  ;
}

function withStorageListener(WrappedComponent:any) {
  return function WrappedComponentWithStorageListener(props:any) {
    const [storageChange, setStorageChange] = React.useState(false);

    window.addEventListener('storage', (change) => {
      if(change.key === 'TODOS_V1') {
        setStorageChange(true);
      }
    })

    const toggleShow = () => {
      props.sincronize();
      setStorageChange(false);
    }

    return (
      <WrappedComponent
        show={storageChange}
        toggleShow={toggleShow}
      />
    );
  }
}

export { withStorageListener };