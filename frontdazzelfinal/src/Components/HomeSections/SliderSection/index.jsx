import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Slider = () => {
  return (
    <>
        <Splide
        options={ {
            type  : 'fade',
             rewind: true,
          } } aria-label="My Favorite Images">
  <SplideSlide>
    <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide03.jpg" alt="Image 1"/>
  </SplideSlide>
  <SplideSlide>
    <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide02.jpg" alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img src="https://149842022.v2.pressablecdn.com/dazzling/wp-content/uploads/sites/54/2013/01/slide01.jpg" alt="Image 3"/>
  </SplideSlide>
</Splide>
    </>
  )
}

export default Slider