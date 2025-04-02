import React from 'react';
import ReactDOM from 'react-dom/client';
import Testimonial from './Testimonial';

function App() {
  return (
    <Testimonial
      logo="brand\Logo.png"
      text="
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa 
        sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”
      "
      name="May Andersons"
      divider="brand\Divider.png"
      position="Workcation, CTO"
    />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);