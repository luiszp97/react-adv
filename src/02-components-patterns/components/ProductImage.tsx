import { useContext } from 'react';

import { ProductContext } from './ProductCard';

import NotImage from '../assets/no-image.jpg'

import styles from '../styles/styles.module.css';




export const ProductImage = ({ img = ''}) => {

    const { product } = useContext(ProductContext);
    let imageToShow: string;

    if( img ) {
        imageToShow = img
    }else if( product.img ) {
        imageToShow = product.img
    } else {
        imageToShow = NotImage
    }


    return(
        <img className={ styles.productImg } src={ imageToShow } alt='Product' />
    )
};
