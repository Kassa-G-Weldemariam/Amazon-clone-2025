import React, {useState, useEffect} from 'react'
import classes from './ProductDetail.module.css'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { productURL } from "./../../Api/EndPoints";
import ProductCard from '../../components/product/ProductCard';
import Loader from '../../components/Loader/';
function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productURL}/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, [])
  
  return (
    <LayOut>
      <div style={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        marginTop:"20px",
      }}>
        {isLoading ? <Loader /> : <ProductCard product={product} 
        flex={true}
        detailDesc={true}
        renderAdd={true}
        />}
      </div>
    </LayOut>
  );
}

export default ProductDetail