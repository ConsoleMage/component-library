import React from 'react';
import ReactDOM from 'react-dom/client';
import Testimonial from './Testimonial';

function App() {
  return (
    <>
      <Testimonial
        img="img\Image.png"
        comma="brand\Icon.png"
        logo="brand\Logo.png"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. 
        Amet feugiat est integer dolor auctor adipiscing nunc urna, sit."
        name="May Andersons"
        role="Workcation, CTO"
      />
      <Testimonial
        logo="brand\Logo.png"
        text="
      “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa 
      sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
    "
        name="May Andersons"
        divider="brand\Divider.png"
        role="Workcation, CTO"
      />
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);