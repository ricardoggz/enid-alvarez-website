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

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container pink>
        <h3 className='title'>
            Testimonios
        </h3>
            <Slider {...settings}>
                {testimonials.map((testimonial) => (
                    <div className={`${styles.testimonialWrapper}`}>
                      <p>{testimonial.title}</p>
                      <p>- {testimonial.author}</p>
                    </div>
                ))}
            </Slider>
    </Container>
  );
};