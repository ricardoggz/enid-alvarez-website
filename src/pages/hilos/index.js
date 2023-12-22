import { useFetch } from "@/hooks";
import { Container, RootLayout, GridContainer, Loader } from "@/components";

export default function Threads(){
    const [loading, data] = useFetch({
        url: `${process.env.BASE_URL_API}api/products/all-products`
    })
    /*Existe un filtrado para bolsos*/
    let filteredData
    if(data){
        filteredData = data.data.filter((product)=> product.category_id === 2)
    }
    return(
        <RootLayout>
            <Container>
                <h1 className="title">
                    Hilos disponibles
                </h1>
                {
                    !loading ?
                    <GridContainer products={filteredData}/>
                    :
                    <Loader/>
                }
            </Container>
        </RootLayout>
    )
}