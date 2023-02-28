import React from 'react';

type EmptyListModel = {
  children: React.ReactNode
}
function EmptyList(props:EmptyListModel) {
  return (
    <div>
      {props.children}
    </div>
  )
}

export { EmptyList };