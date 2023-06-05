import { useState } from "react";
import { ProductInCart, onChangeArgs } from "../interfaces/productInterfaces";

export const useShoppingCart = ()=> {

    const [shoppingCart, setShoppingCart] = useState<{ [key:string]: ProductInCart }> ({})

  const onProductCountChange = ( { count, product }: onChangeArgs ) => {
    
    setShoppingCart( oldShoppingCard => {

      if( count === 0  ){
        const { [product.id]: toDelete,  ...rest } = oldShoppingCard;
        return rest;
      }
      return{ 
        ...oldShoppingCard,
        [product.id] : { ...product, count  }
      }
    } )
  }

  return {
    shoppingCart,
    onProductCountChange,
  }

}