import React from 'react';
import './Block.scss';
import classNames from 'classnames';

const colors = ['green', 'blue', 'yellow'];

export const Block = ({ id, title }) => {
  return (
    <div className={classNames('block', `block--${colors[id - 1]}`)}>
      {title}
    </div>
  );
};
