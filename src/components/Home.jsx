import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const location = useNavigate();
  const handleClick = () => {
    location('/about');
  };
  return (
    <div>
      <h1>Home</h1>
      <button onClick={handleClick} type="submit">about</button>
    </div>
  );
}

export default Home;
