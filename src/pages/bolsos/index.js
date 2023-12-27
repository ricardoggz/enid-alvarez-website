import { useFetch } from "@/hooks";
import { Container, RootLayout, GridContainer, Loader } from "@/components";

export default function Gallery(){
    const [loading, data] = useFetch({
        url:  `${process.env.BASE_URL_API}api/products/all-bags`
    })
    /*Existe un filtrado para bolsos*/
    /*let filteredData
    if(data){
        filteredData = data.data.filter((product)=> product.category_id === 1)
    }*/
    return(
        <RootLayout>
            <Container>
                <h1 className="title">
                    Bolsos disponibles
                </h1>
                {
                   !loading ?
                   <GridContainer products={data.data}/>
                   :
                  <Loader /> 
                }
            </Container>
        </RootLayout>
    )
}