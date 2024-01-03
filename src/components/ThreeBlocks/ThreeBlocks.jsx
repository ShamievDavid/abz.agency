import React from 'react';
import { Block } from './components/Block';
import './ThreeBlocks.scss';

export const ThreeBlocks = ({ data }) => {
  return (
    <div className="three-blocks">
      {data?.slice(0, 3).map(({ id, title }) => (
        <Block key={id} title={title} id={id} />
      ))}
    </div>
  );
};
