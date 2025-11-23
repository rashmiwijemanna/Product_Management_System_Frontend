import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/product/getAll')
      .then(res => setProducts(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-header">
                <h5 className="card-title mb-0">{product.name}</h5>
              </div>
              <div className="card-body">
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: RS. {}</p>
                <p className="card-text">Quantity: {product.qtyOnHand}</p>
                <button className="btn btn-primary w-100">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
