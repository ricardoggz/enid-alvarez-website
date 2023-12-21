'use client'
import Link from 'next/link'
import styles from './grid.module.css'

export const GridContainer = ({products=[]})=>{
    return (
        <>
            {
                products.length === 0 ?
                <h2>Sin productos disponibles</h2>
                :
                <div className={`flexContainer ${styles.gridWrapper}`}>
                {
                    products.map((product, index)=>(
                        <>
                            <Link
                            href='/pago-producto/[id]'
                            as={`/pago-producto/${product.product_name}`}
                            className={styles.card}
                            key={index}>
                                <figure>
                                    <img src={product.product_image}/>
                                </figure>
                                <div className={styles.cardDescription}>
                                    <span>
                                        Modelo: {product.product_name}
                                    </span>
                                    <span>Precio: ${product.product_price}</span>
                                </div>
                            </Link>
                        </>
                    ))
                }
                </div>
            }
        </>
    )
}