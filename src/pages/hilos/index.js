import { products } from "./consts";
import { useFetch } from "@/hooks";
import { Container, RootLayout, GridContainer } from "@/components";

export default function Threads(){
    const [loading, data] = useFetch({
        url: 'http://localhost:3030/api/products/all-products'
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
                <GridContainer products={filteredData}/>
            </Container>
        </RootLayout>
    )
}