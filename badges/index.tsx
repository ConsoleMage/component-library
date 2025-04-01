import React from 'react';
import ReactDOM from 'react-dom/client';
import Badge from './Badge';

function App() {
  return (
    <main>
      <div>
        <Badge variant="square" color="gray">Badge</Badge>
        <Badge variant="pill" color="gray">Badge</Badge>
      </div>
      <div>
        <Badge variant="square" color="red">Badge</Badge>
        <Badge variant="pill" color="red">Badge</Badge>
      </div>
      <div>
        <Badge variant="square" color="yellow">Badge</Badge>
        <Badge variant="pill" color="yellow">Badge</Badge>
      </div>
      <div>
        <Badge variant="square" color="green">Badge</Badge>
        <Badge variant="pill" color="green">Badge</Badge>
      </div>
      <div>
        <Badge variant="square" color="blue">Badge</Badge>
        <Badge variant="pill" color="blue">Badge</Badge>
      </div>
      <div>
        <Badge variant="square" color="indigo">Badge</Badge>
        <Badge variant="pill" color="indigo">Badge</Badge>
      </div>
      <div>
        <Badge variant="square" color="purple">Badge</Badge>
        <Badge variant="pill" color="purple">Badge</Badge>
      </div>
      <div>
        <Badge variant="square" color="pink">Badge</Badge>
        <Badge variant="pill" color="pink">Badge</Badge>
      </div>
    </main>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);