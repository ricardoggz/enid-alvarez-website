import { useRouter } from 'next/router'
import '../../globals.css'
import { products } from './consts'
import { useFetch } from '@/hooks'
import { SelectProduct } from './components/SelectProduct/SelectProduct'
import { RootLayout, Container } from '@/components'
export default function Gallery({filteredProducts}){
  const [loading, data] = useFetch({
    url: 'http://localhost:3030/api/products/all-products'
  })
  const router = useRouter()
  const {id} = router.query
  let newProducts
  if(data){
    newProducts=data.data.filter((product)=>product.product_name == id)
    .map(product=>product)
  }
    return(
        <RootLayout>
            <Container>
                {
                  newProducts ?
                  <SelectProduct products={newProducts}/>
                  :
                  null
                }
            </Container>
        </RootLayout>
    )
}

export async function getServerSideProps({ params }) {
    let filteredProducts = products.filter((product)=>{
      product.id == params.id
    })
    .map((product)=>product)
    return {
      props: {
        filteredProducts,
      },
    };
  }