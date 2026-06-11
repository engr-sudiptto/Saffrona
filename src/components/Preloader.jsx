import React from 'react';

const Preloader = ({ isLoading }) => {
  if (!isLoading) return null;

  return <div>Preloader</div>;
};

export default Preloader;
