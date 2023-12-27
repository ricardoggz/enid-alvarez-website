import { useRouter } from 'next/router'
import '../../globals.css'
import { useFetch } from '@/hooks'
import SelectProduct from './components/SelectProduct/SelectProduct'
import { RootLayout, Container } from '@/components'
export default function Gallery({filteredProducts}){
  const [loading, data] = useFetch({
    url: `${process.env.BASE_URL_API}api/products/all-products`
  })
  const router = useRouter()
  const {id} = router.query
  let newProducts
  if(data){
    newProducts=data.data.filter((product)=>product.product_id == id)
    .map(product=>product)
  }
    return(
        <RootLayout>
            <Container>
                {
                  newProducts ?
                  <SelectProduct
                    products={newProducts}
                  />
                  :
                  null
                }
            </Container>
        </RootLayout>
    )
}
export const getStaticPaths = async()=>{
  const response = await fetch(`${process.env.BASE_URL_API}api/products/all-products`)
  const json = await response.json()
  const paths = json.map((product) => ({
    params: { id: product.product_id.toString() },
  }));
  return {
      paths,
      fallback: false
  }
}
export const getStaticProps =async({ params })=> {
  const response = await fetch(`${process.env.BASE_URL_API}api/products/all-products`)
  const json = await response.json()
  const data=json.filter((product)=>product.product_id == params.id)
  .map((product) =>product)
    return {
      props: {
        data,
      },
    };
  }