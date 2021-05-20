import "./App.css";
import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import Products from './products';
import Services from './Services';
function App() {
  const [products, setCount] = useState(true);
  return (
    <div className="App">
      <br /><br />
      <Button variant="contained" color="primary" onClick={() => setCount(!products)}>
        {products ? (
          <p>products</p>
        ) : (
            <p>service</p>
          )}
      </Button>
      <br /><br />
      {products ? (
        <Products />
      ) : (
          <Services />
        )}
    </div>
  );
}

export default App;
