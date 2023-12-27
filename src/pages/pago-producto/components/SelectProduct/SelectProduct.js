'use client'
import { useState } from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlinePayment } from "react-icons/md";
import PaymentButton from '../PaymentButton/PaymentButton'
import styles from './selectProduct.module.css'

const SelectProduct = ({products=[]}) => {
  // Estado para la imagen actual del producto
  const [currentProduct, setCurrentProduct] = useState(products[0]);
  //Debe exisitir un filtrado para productos del mismo modelo
  /*let filteredData
  if(products){
    filteredData = products.filter(product=>product.product_id === 1)
  }*/
  let images
  if(products.length!==0){
    images = JSON.parse(currentProduct.images)
  }
  // Función para cambiar la imagen según el color seleccionado
  const handleColorChange = (color) => {
    const selectedProduct = products.find((product) => product.product_color === color);
    if (selectedProduct) {
      setCurrentProduct(selectedProduct);
    }
  };
  return (
    <>
      {
        products.length!==0
        ?
        <>
      <div className={styles.mainContainer}>
      <div className={styles.productImage}>
      {
        currentProduct.bag_image ?
        <img src={currentProduct.bag_image} alt="Producto"/>
        :
        null
      }
      {
        currentProduct.thread_image ?
        <img src={currentProduct.thread_image} alt="Producto"/>
        :
        null
      }
      </div>
      <div className={styles.productDescription}>
      <h1>Modelo: {currentProduct.product_name}</h1>
      {
        currentProduct.bag_price ?
        <h2>Precio: ${currentProduct.bag_price}</h2>
        :
        null
      }
      {
        currentProduct.thread_price ?
        <h2>Precio: ${currentProduct.thread_price}</h2>
        :
        null
      }
      <span>Colores disponibles</span>
      <div className={styles.productButtons}>
        {
          !products 
          ? null
          :
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
      <div className={styles.paymentDetails}>
        <div>
          <CiDeliveryTruck />
          <span>Envíos de 6 a 7 días hábiles</span>
        </div>
        <div>
          <MdOutlinePayment />
          <span>Pagos 100% seguros</span>
        </div>
      </div>
      </div>
    </div>
    <div className={`flexContainer ${styles.relatedImages}`}>
    {
      products ?
      images.map((image)=>(
        <figure>
          <img
          src={image.imagen_ruta}
          alt="Producto"
          key={image.imagen_id}
          />
        </figure>
      ))
      :
      null
    }
    </div>
    </>
    :
    null
  }
    </>
  );
};

export default SelectProduct
