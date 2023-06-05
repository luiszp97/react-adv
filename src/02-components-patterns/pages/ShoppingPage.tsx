import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components";
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img:'./coffee-mug.png'
}

export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shopping Store</h1>
        <hr/>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap:'wrap'
        }}>

            <ProductCard className="bg-dark" product={ product }>

              <ProductImage className = 'custom-image' />
              <ProductTitle title="Hola Mundo" className = 'text-white'/>
              <ProductButtons className = 'btn-white text-white'/>

            </ProductCard>

            <ProductCard product={ product }>

              <ProductCard.Image />
              <ProductCard.Title />
              <ProductCard.Buttons />

            </ProductCard>

        </div>
    </div>
  )
}
