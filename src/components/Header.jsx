import React from "react";
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    
    <div className="ui fixed menu" >
      <div className="ui container center">
      <Link to={'/'}>
        <h2 style={{color : '#EE0063', background: 'white'}}> Eteva Book Shop</h2>
      </Link>
      </div>
    </div>
  );
};

export default Header;
