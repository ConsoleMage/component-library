import React from 'react';
import ReactDOM from 'react-dom/client';
import Card from './Card';

function App() {
  return (
    <Card 
      title="Easy Deployment" 
      description="Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis."
    />
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);