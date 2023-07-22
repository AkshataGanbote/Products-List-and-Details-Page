import React, {useEffect} from "react";
import axios from "axios";
import {useParams} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {selectedBook, removeSelectedBook} from '../redux/actions/bookActions'

const ProductDetails = () => {
    
    const book = useSelector((state) => state.book);
    const {bookId} = useParams();
    const dispatch = useDispatch();
    const {id, title, image_url, num_pages, authors, description} = book;

    console.log(book);

    const fetchBookDetails = async () => {
        const response = await axios
        .get(`https://example-data.draftbit.com/books/${bookId}`)
        .catch((error) => {
            console.log("Error", error);
        });
        dispatch(selectedBook(response.data));
    }
    
    useEffect(() => {
        if(bookId && bookId !== "") fetchBookDetails();
        return () => {
            dispatch(removeSelectedBook());
        }
    }, [bookId] );

     
    return (
        <div className="ui grid container">
            {Object.keys(book).length === 0 ? (
                <div style={{alignItems : 'center'}}>...Loading</div>
            ) : (
            <div className="ui placeholder segment">
                <div className="ui two column stackable left aligned grid">
                    <div className="middle aligned row">
                    <div className="column lp">
                        <img className="ui fluid image"src={image_url} alt={title}/>
                    </div>
                    <div className="column rp">
                        <h1>{title}</h1>
                        <h3 className="ui brown header left aligned">{authors}</h3>
                        <h2>
                            <a className="" alt={title}> Rs. {num_pages}</a>
                        </h2>
                        <h4>{description}</h4>
                        <div className="large ui vertical animated button" tabIndex="0">
                        <div className="hidden content">
                            <i className="shop icon"></i>
                        </div>
                        <div className="visible content">Add to Cart</div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            )}
        </div>
    );
};

export default ProductDetails;
