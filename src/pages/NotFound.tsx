import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <h1>Page not found</h1>
      <Link to="/">Go back to Home</Link>
    </>
  );
};

export default NotFound;
