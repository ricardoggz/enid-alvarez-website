'use client'
import { useState } from 'react';
import styles from './selectProduct.module.css'

const SelectProduct = () => {
  // Estado para la imagen actual del producto
  const [currentImage, setCurrentImage] = useState('bolsa-cafe.jpeg');

  // Función para cambiar la imagen según el color seleccionado
  const handleColorChange = (color) => {
    // Lógica para asignar la imagen correspondiente al color
    let newImage;
    switch (color) {
      case 'green':
        newImage = 'bolsa-verde.jpeg';
        break;
      case 'brown':
        newImage = 'bolsa-cafe.jpeg';
        break;
      // Añade más casos según sea necesario
      default:
        newImage = '../../public/bolsa-cafe.jpeg';
    }

    // Actualizar el estado con la nueva imagen
    setCurrentImage(newImage);
  };
  const greenButton ={
    background: '#6ab04c'
  }

  const brownButton={
    background: '#cd6133'
  }
  return (
    <div className={styles.mainContainer}>
      {/* Mostrar la imagen actual del producto */}
      <div className={styles.productImage}>
        <img src={currentImage} alt="Producto"/>
      </div>

      {/* Seleccionar un color para cambiar la imagen */}
      <div className={styles.productButtons}>
        <label>
          <button
            type="radio"
            name="color"
            value="green"
            style={greenButton}
            onClick={() => handleColorChange('green')}
          >
          </button>
        </label>
        <label>
        <button
            type="radio"
            name="color"
            value="green"
            style={brownButton}
            onClick={() => handleColorChange('brown')}
          >
          </button>
        </label>
        {/* Añade más opciones de color según sea necesario */}
      </div>
      <span>--Espacio para botón de Paypal--</span>
    </div>
  );
};

export {SelectProduct};
