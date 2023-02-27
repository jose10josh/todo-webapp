import React from 'react';

type HeaderModel = {
  children:React.ReactNode
}
const Header = ({children}:HeaderModel) => {
  return (
    <header>
      {children}
    </header>
  );
};

export {Header};