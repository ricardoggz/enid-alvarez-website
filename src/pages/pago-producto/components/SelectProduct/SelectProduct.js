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
      <h1>{currentProduct.model}</h1>
      <h2>{currentProduct.price}</h2>
    <div className={styles.productImage}>
      <img src={currentProduct.image} alt="Producto"/>
    </div>
    <div className={styles.productButtons}>
      {
        products.map((product, index)=>(
            <label>
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
      <span>--Espacio para descripción--</span>
      </div>
  );
};

export {SelectProduct};
