import { useFetch } from "@/hooks";
import { products } from "./consts";
import { Container, RootLayout, GridContainer } from "@/components";

export default function Gallery(){
    const [loading, data] = useFetch({
        url: 'http://localhost:3030/api/products/all-products'
    })
    return(
        <RootLayout>
            <Container>
                <h1 className="title">
                    Bolsos disponibles
                </h1>
                {
                   data ?
                   <GridContainer products={data.data}/>
                   :
                   null 
                }
            </Container>
        </RootLayout>
    )
}