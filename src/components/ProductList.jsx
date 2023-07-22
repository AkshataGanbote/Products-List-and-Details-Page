import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import ProductComponent from "./ProductComponent";
import {setBooks} from '../redux/actions/bookActions'

const ProductList = () => {
    const books = useSelector((state) => state);
    const dispatch = useDispatch();

    const fetchBooks = async () => {
        const response = await axios
        .get('https://example-data.draftbit.com/books')
        .catch((error) => {
            console.log("Error", error);
        });
        dispatch(setBooks(response.data));
    }
    
    useEffect(() => {
        fetchBooks();
    }, []);

    console.log('Books', books);
    

    return (
        <div className="ui grid container" style={{background: '#F5F7FA'}}>
            <ProductComponent/>
        </div>
    );
};

export default ProductList;
