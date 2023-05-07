import { useEffect, useState } from 'react';
import axios from 'axios';

const Shop = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/shop')
      .then(res => {
        setCustomers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Customers</h1>
      {customers.map((e, i) => (
        <div key={i}>
          <p>{e.name}</p>
          <p>{e.industry}</p>
        </div>
      ))}
    </>
  );
};

export default Shop;
