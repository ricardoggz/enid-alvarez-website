'use client'
import { useState } from 'react'
import { products } from '../../consts'
import { PaymentButton } from '../PaymentButton/PaymentButton'
import styles from './selectProduct.module.css'

const SelectProduct = () => {
  // Estado para la imagen actual del producto
  const [currentProduct, setCurrentProduct] = useState(products[0]);

  // Función para cambiar la imagen según el color seleccionado
  const handleColorChange = (color) => {
    const selectedProduct = products.find((product) => product.color === color);
    if (selectedProduct) {
      setCurrentProduct(selectedProduct);
    }
  };
  const greenButton ={
    background: '#6ab04c'
  }

  const brownButton={
    background: '#cd6133'
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.productImage}>
      <img src={currentProduct.image} alt="Producto"/>
      </div>
      <div className={styles.productDescription}>
      <h1>Modelo: {currentProduct.model}</h1>
      <h2>Precio: ${currentProduct.price}</h2>
      <span>Colores disponibles</span>
      <div className={styles.productButtons}>
        {
          products.map((product, index)=>(
              <label key={index}>
                <button
                  style={{ backgroundColor: product.color }}
                  onClick={() => handleColorChange(product.color)}
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
