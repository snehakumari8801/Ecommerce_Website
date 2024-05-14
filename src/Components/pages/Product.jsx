import React from 'react'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import BreadCrums from '../BreadCrums/BreadCrums'
import DescriptionBox from '../DescriptionBox/DescriptionBox';
import RelatedProduct from '../RelatedProduct/RelatedProduct';

function Product() {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();
  const product =  all_product.find((e) => e.id === Number(productId));
 
  
  return (
    <div>
      <BreadCrums product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
