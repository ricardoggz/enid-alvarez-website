import { products } from "./consts";
import { Container, RootLayout, GridContainer } from "@/components";

export default function Threads(){
    return(
        <RootLayout>
            <Container>
                <h1 className="title">
                    Hilos disponibles
                </h1>
                <GridContainer products={products}/>
            </Container>
        </RootLayout>
    )
}