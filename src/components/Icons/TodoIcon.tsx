import React from 'react';
import './Icon.css';
// import CheckSVG  from './check.svg';
import {CheckIcon} from './CheckIcon';
import {DeleteIcon} from './DeleteIcon';

const iconTypes:Record<string, (color:string)=>JSX.Element> = {
  "check": (color:string) => (
    <CheckIcon iClass="Icon-svg Icon-svg--check" fill={color} />
  ),
  "delete": (color:string) => (
    <DeleteIcon iClass="Icon-svg Icon-svg--delete" fill={color} />
  ),
};

type TodoIconModel = {
  type:string,
  color?:string,
  onClick:any,
}

function TodoIcon({ type, color = 'gray', onClick }:TodoIconModel) {
  return (
    <span
      className={`Icon-container Icon-container--${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };