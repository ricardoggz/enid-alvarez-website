'use client'
import { useState } from 'react'
import { products } from '../../consts'
import { PaymentButton } from '../PaymentButton/PaymentButton'
import styles from './selectProduct.module.css'

const SelectProduct = ({products}) => {
  // Estado para la imagen actual del producto
  const [currentProduct, setCurrentProduct] = useState(products[0]);
  // Función para cambiar la imagen según el color seleccionado
  const handleColorChange = (color) => {
    const selectedProduct = products.find((product) => product.color === color);
    if (selectedProduct) {
      setCurrentProduct(selectedProduct);
    }
  };
  let images
  if(products){
    images = JSON.parse(products[0].images)
    console.log(images)
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.productImage}>
      <img src={currentProduct.product_image} alt="Producto"/>
      <div className={styles.relatedImages}>
        {
          products ?
          images.map((image)=>(
            <img
              src={image.imagen_ruta}
              alt="Producto"
              key={image.imagen_id}
              />
          ))
          :
          null
        }
      </div>
      </div>
      <div className={styles.productDescription}>
      <h1>Modelo: {currentProduct.product_name}</h1>
      <h2>Precio: ${currentProduct.product_price}</h2>
      <span>Colores disponibles</span>
      <div className={styles.productButtons}>
        {
          products.map((product, index)=>(
              <label key={index}>
                <button
                  style={{ backgroundColor: product.product_color }}
                  onClick={() => handleColorChange(product.product_color)}
                >
                </button>
            </label>
        ))
        }
      </div>
      <PaymentButton />
      </div>
    </div>
  );
};

export {SelectProduct};
