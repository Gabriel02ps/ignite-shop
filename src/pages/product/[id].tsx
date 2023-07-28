import { useRouter } from 'next/router'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

export default function Product() {
  const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          tempora delectus culpa pariatur vitae? Totam enim consectetur non
          atque nesciunt deleniti qui, ex distinctio asperiores voluptatem
          placeat, provident consequuntur pariatur?
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
