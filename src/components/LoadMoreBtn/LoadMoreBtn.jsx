import React from 'react';


const LoadMoreBtn = ({ onAddPage }) => {
  return (
    <>
      <button onClick={onAddPage}>Load more</button>
    </>
  );
};

export default LoadMoreBtn;