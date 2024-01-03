import React, { useEffect, useState } from 'react';
import { Block } from './components/Block';
import './ThreeBlocks.scss';

export const ThreeBlocks = ({ data }) => {
  const [randomBlocks, setRandomBlocks] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      const getRandomBlocks = () => {
        const shuffledData = [...data].sort(() => Math.random() - 0.5);
        const modifiedData = shuffledData.slice(0, 3).map((block, index) => ({
          ...block,
          id: index + 1,
        }));
        return modifiedData;
      };

      setRandomBlocks(getRandomBlocks());
    }
  }, [data]);

  return (
    <div className="three-blocks">
      {randomBlocks?.slice(0, 3).map(({ id, title }) => (
        <Block key={id} title={title} id={id} />
      ))}
    </div>
  );
};
