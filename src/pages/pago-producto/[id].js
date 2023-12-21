import { useRouter } from 'next/router'
import '../../globals.css'
import { products } from './consts'
import { SelectProduct } from './components/SelectProduct/SelectProduct'
import { RootLayout, Container } from '@/components'
export default function Gallery({filteredProducts}){
  const router = useRouter()
  const {id} = router.query
  const newProducts = products.filter((product)=>product.model == id)
  .map(product=>product)
    return(
        <RootLayout>
            <Container>
                <SelectProduct products={newProducts}/>
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