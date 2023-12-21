import { useFetch } from "@/hooks";
import { products } from "./consts";
import { Container, RootLayout, GridContainer } from "@/components";

export default function Gallery(){
    const [loading, data] = useFetch({
        url: 'http://localhost:3030/api/products/all-products'
    })
    /*Existe un filtrado para bolsos*/
    let filteredData
    if(data){
        filteredData = data.data.filter((product)=> product.category_id === 1)
    }
    return(
        <RootLayout>
            <Container>
                <h1 className="title">
                    Bolsos disponibles
                </h1>
                {
                   data ?
                   <GridContainer products={filteredData}/>
                   :
                   null 
                }
            </Container>
        </RootLayout>
    )
}