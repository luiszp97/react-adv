import { ProductCard as ProductCardHOC} from './ProductCard';

import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';
import { ProductTitle } from './ProductTitle';

export * from './ProductImage';
export * from './ProductButtons';
export * from './ProductTitle';

export const ProductCard = Object.assign( ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
} )