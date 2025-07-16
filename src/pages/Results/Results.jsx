import React, {useState, useEffect} from 'react'
import classes from './results.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { productURL } from '../../Api/EndPoints'
import Product from '../../components/product/Product'
import ProductCard from '../../components/product/ProductCard'
function Results() {
  const [results, setResults] = useState([])
  const { categoryName } = useParams();
  useEffect(() => { 
    axios.get(`${productURL}/products/category/${categoryName}`)
      .then(response => {
      setResults(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [])
  
  return (
    <LayOut>
      <section>
        <h1 style={{padding:"30px"}}>Results</h1>
        <p style={{padding:"30px"}}>Category / {categoryName}</p>
        <hr/>
        <div className={classes.product_container}>
          {
            results.map((product) => (
              <ProductCard 
                key={product.id}
                product={product}/> 
            ))
          }
        </div>
      </section>
    </LayOut>
  );
}

export default Results