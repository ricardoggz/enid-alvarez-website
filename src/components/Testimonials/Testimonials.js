'use client'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './testimonials.module.css'
import { Container } from '../Container/Container';

export const Testimonials = () => {
  const testimonials = [
    {
      id: 2,
      title: 'Esto es increíble!!!',
      text:'He podido darme cuenta de que existe un mundo fascinante cuando se teje. Primero porque una se supera a sí misma con diferentes retos y, segundo, porque esto es realmente divertido y siempre termino muy contenta.',
      author: 'Wendolin Rangel, ejecutiva de ventas',
    },
    {
        id: 2,
        title: 'Esto es increíble!!!',
        text:'He podido darme cuenta de que existe un mundo fascinante cuando se teje. Primero porque una se supera a sí misma con diferentes retos y, segundo, porque esto es realmente divertido y siempre termino muy contenta.',
        author: 'Wendolin Rangel, ejecutiva de ventas',
      },
    // Agrega más testimonios según sea necesario
  ];

  const CustomPrevArrow = (props) => (
    <div {...props} className={styles.customPrevArrow}>
    </div>
  );

  const CustomNextArrow = (props) => (
    <div {...props} className={styles.customPrevArrow}>
    </div>
  );
  const settings = {
    dots: true, // Desactiva los puntos indicadores
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />, // Componente personalizado para la flecha anterior
    nextArrow: <CustomNextArrow />, // Componente personalizado para la flecha siguiente
  };

  return (
    <Container pink>
        <h3 className='title'>
            Testimonios
        </h3>
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <div className={`${styles.testimonialWrapper}`} key={testimonial.id}>
                      <p>{testimonial.title}</p>
                      <p>{testimonial.text}</p>
                      <p>- {testimonial.author}</p>
                    </div>
                ))}
            </Slider>
    </Container>
  );
};