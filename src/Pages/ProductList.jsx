import React, { useContext } from 'react';
import './CSS/ProductList.css';
import { ShopContext } from '../Context/ShopContext';
import { Item } from '../Components/Item/Item';

export const ProductList = () => {
  const { allProduct } = useContext(ShopContext);

  return (
    <div className='shop-category'>
      <div className="productlist-products">
        {allProduct && allProduct.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
}
