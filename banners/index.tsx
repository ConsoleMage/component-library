import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from "./Banner"

function App() {
  return (
      <Banner variant="success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</Banner>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);