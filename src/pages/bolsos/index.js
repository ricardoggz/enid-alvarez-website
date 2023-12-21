import { products } from "./consts";
import { Container, RootLayout, GridContainer } from "@/components";

export default function Gallery(){
    return(
        <RootLayout>
            <Container>
                <h1 className="title">
                    Bolsos disponibles
                </h1>
                <GridContainer products={products}/>
            </Container>
        </RootLayout>
    )
}