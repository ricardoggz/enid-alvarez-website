'use client'
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
                            <a href='/' className={styles.card} key={index}>
                                <figure>
                                    <img src={product.image}/>
                                </figure>
                                <div className={styles.cardDescription}>
                                    <span>
                                        Modelo: {product.model}
                                    </span>
                                    <span>Precio: ${product.price}</span>
                                </div>
                            </a>
                        </>
                    ))
                }
                </div>
            }
        </>
    )
}