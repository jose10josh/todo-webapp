import React from 'react';

type EditIconModel = {
  iClass:string,
  fill:string
}
const EditIcon = ({iClass, fill}:EditIconModel) => {
  return (
    <svg className={iClass} viewBox="0 0 24 24" fill={fill} xmlns="https://www.w3.org/2000/svg">
      <path d="M0 18.9993V24H5.00069L19.756 9.24459L14.7553 4.2439L0 18.9993Z"/>
      <path d="M23.6099 3.5038L20.4961 0.390054C19.9761 -0.130018 19.1293 -0.130018 18.6092 0.390054L16.1689 2.83039L21.1695 7.83108L23.6099 5.39074C24.13 4.87067 24.13 4.02387 23.6099 3.5038Z"/>
    </svg>
  );
};

export {EditIcon};