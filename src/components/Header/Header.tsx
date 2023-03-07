import React, { ReactElement } from 'react';

type HeaderModel = {
  children:ReactElement<any>[] | ReactElement<any>
  loading:boolean,
}

const Header = ({children, loading}:HeaderModel) => {

  return (
    <header>
      {React.Children
        .toArray(children)
        .map(child => (
          React.cloneElement(child as ReactElement<any>, {loading})
        ))
      }
    </header>
  );
};

export {Header};