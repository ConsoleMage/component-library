import React from 'react';
import ReactDOM from 'react-dom/client';
import Banner from "./Banner"

function App() {

  const allBanners = [
    {
      id: 1,
      variant: "success",
      status: "Congratulations!",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
    },
    {
      id: 2,
      variant: "warning",
      status: "Attention",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    },
    {
      id: 3,
      variant: "error",
      status: "There is a problem with your application",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.",
    },
    {
      id: 4,
      variant: "neutral",
      status: "Update available",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.",
    },
    {
      id: 5,
      variant: "success",
      status: "Congratulations!",
    },
    {
      id: 6,
      variant: "warning",
      status: "Attention",
    },
    {
      id: 7,
      variant: "error",
      status: "There is a problem with your application",
    },
    {
      id: 8,
      variant: "neutral",
      status: "Update available",
    },
  ];
    return (
      <div>
        {allBanners.map((item) => (
          <Banner key={item.id} {...item} />
        ))}
      </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);