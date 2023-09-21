import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./Feature/slice/dataSlice";


function App() {
  const dispatch = useDispatch();
  const { data, isSuccess, loading, message } = useSelector((state) => state.data);

  useEffect(() => {
   
    dispatch(getData());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Product List</h1>
      {loading ? (
        <p>Loading...</p>
      ) : isSuccess ? (
        <ul>
          {data.products.map((product) => (
            <li key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price : {product.price}</p>
              <p>Rating : {product.rating}</p>
              <img src={product.thumbnail} alt={product.title} />
            </li>
          ))}
        </ul>
      ) : (
        <p>Error: {message}</p>
      )}
    </div>
  );
}

export default App;
