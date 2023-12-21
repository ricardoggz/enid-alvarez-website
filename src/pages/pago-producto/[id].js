import { useRouter } from 'next/router'
import '../../globals.css'
import { products } from './consts'
import { SelectProduct } from './components/SelectProduct/SelectProduct'
import { RootLayout, Container } from '@/components'
export default function Gallery({products}){
  const router = useRouter()
  console.log(products)
  const {id} = router.query
  console.log(id)
    return(
        <RootLayout>
            <Container>
                <SelectProduct products={products}/>
            </Container>
        </RootLayout>
    )
}

export async function getServerSideProps({ params }) {
    // Lógica para obtener datos basados en el parámetro de la ruta dinámica
    /*const data = await fetchData(params.id);
  
    // Los datos obtenidos se pasan como props a la página
    */
    return {
      props: {
        products,
      },
    };
  }