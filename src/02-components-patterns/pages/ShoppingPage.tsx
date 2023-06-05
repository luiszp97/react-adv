
import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"

import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCard";
import '../styles/custom-styles.css';



export const ShoppingPage = () => {

  const {  shoppingCart, onProductCountChange } = useShoppingCart()

  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap:'wrap'
        }}>

          {

            products.map( product => (
             
              <ProductCard 
                key={ product.id } 
                product={ product }
                onChange = { onProductCountChange }
                value={ shoppingCart[product.id]?.count || 0 }
              >
                
                <ProductCard.Image />
                <ProductCard.Title title="Hola Mundo"/>
                <ProductCard.Buttons />

              </ProductCard>
        

            ) )

          }

        </div>

        <div className="shopping-cart" >

         {

          Object.entries( shoppingCart ).map( ([key , product]) => (

            <ProductCard 
              className="bg-dark text-white" 
              product={ product }
              style={{ width: '100px' }}
              key={ key }
              value={ product.count }
              onChange={ onProductCountChange }
            >

              <ProductImage className=" custom-image "/>
              <ProductButtons 
                className="custom-buttons"
                style={{
                  display:'flex',
                  justifyContent:'center'
                }}
              />

            </ProductCard>

          ) )

         }

        </div>
    </div>
  )
}
