import React from "react";
import './Home.css';

function Home() {
  return (
    <>
      <style>
        {`
          body {
            background-image: url('https://www.tendencias.kpmg.es/wp-content/uploads/2018/11/GettyImages-912949110.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 100vh;
            margin: 0;
            color: white;
          }
        `}
      </style>
      <h1 style={{ textAlign: 'center', color: 'white' }}>Welcome to Our Store</h1>
      <h2 style={{ textAlign: 'center', color: 'white' }}>Happy Shopping</h2>
      <p style={{ textAlign: 'center', color: 'white' }}>Explore our products and add them to your cart!</p>
    </>
  );
}

export default Home;
