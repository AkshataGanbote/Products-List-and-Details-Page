import React from "react";
import { useSelector } from "react-redux";
import {Link} from 'react-router-dom';

const ProductComponent = () => {
  const books = useSelector((state) => state.allBooks.books);

  const renderList = books.map((book) =>{
  const {id, title, image_url, num_pages,} = book; 
    
  return (
      <div className="four wide column"  key={id}>
        <Link to={`/book/${id}`}>
          <div className="ui link cards" >
              <div className="card" style = {{background: '#F5F7FA'}}>
                <div className="image" style = {{background: '#F5F7FA'}}>
                  <img src={image_url} alt={title} />
                </div>
                <div className="content">
                  <div className="header">{title}</div>
                  <div className="meta price">Rs. {num_pages}</div>
                </div>
              </div>
          </div>
        </Link>
    </div>
    )
  });
  

  return (
    <>{renderList}</>
  );
};

export default ProductComponent;
