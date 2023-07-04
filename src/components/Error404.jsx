import React from 'react';
import { useNavigate, Link} from 'react-router-dom';
import '../assets/404.css';

function Error404() {

  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };


  return (
    <div className='bodys'>
    <div>
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <button className="buttonss" onClick={() => handleButtonClick('/')}>Hackflix</button>
      </div>
      <button className="buttons" onClick={() => handleButtonClick('/')}>Home</button>
    </nav>
    <div className="image-containers">
      <img src="error.jpg" alt="Background Image" className="background-images" />
    </div>
  </div>
  <div className='divButtonN'>
  <button className="buttons" onClick={() => handleButtonClick('/')}>Home</button>
  </div>
  </div>
  );
}

export default Error404;