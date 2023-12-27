import Link from 'next/link'
import { useRouter } from 'next/router'
import { Container } from '@/components'
import styles from './relatedProducts.module.css'

const RelatedProducts = ({products, category_id})=>{
    const router = useRouter()
    const handleClick = () => {
        // Recargar la página
        router.reload();
    };
    let relatedProducts
    if(products){
        relatedProducts = products.filter((product)=>product.category_id === category_id)
        console.log(relatedProducts)
    }
    return (
        <Container>
            <div className="flexContainer">
            <center><h4>Productos relacionados</h4></center>
            <br/>
            {
                !relatedProducts ? 
                <span>Sin productos relacionados</span>
                :
                <div className={styles.relatedProducts}>
                    {
                        relatedProducts.map((product)=>(
                            <Link
                                href='/pago-producto/[id]'
                                as={`/pago-producto/${product.product_id}`}
                                className={styles.relatedProductCard}
                                onClick={handleClick}
                            >
                                {
                                    product.bag_image ?
                                    <figure>
                                        <img src={product.bag_image}/>
                                    </figure>
                                    :
                                    null
                                }
                                {
                                    product.thread_image ?
                                    <figure>
                                        <img src={product.thread_image}/>
                                    </figure>
                                    :
                                    null
                                }
                                {
                                    product.kit_image ?
                                    <figure>
                                        <img src={product.kit_image}/>
                                    </figure>
                                    :
                                    null
                                }
                                <span>{product.product_name}</span>
                                {
                                    product.bag_price ?
                                    <span>${product.bag_price}</span>
                                    :
                                    null
                                }
                                {
                                    product.thread_price ?
                                    <span>${product.thread_price}</span>
                                    :
                                    null
                                }
                                {
                                    product.kit_price ?
                                    <span>${product.kit_price}</span>
                                    :
                                    null
                                }
                            </Link>
                        ))
                    }
                </div>
            }
        </div>
        </Container>
    )
}

export default RelatedProducts