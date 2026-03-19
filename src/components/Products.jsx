import { link } from 'framer-motion/client';
import './product.css';
import { motion } from "framer-motion";

export default function Product() {

  const productitems = [
    { id: 1, name: "Electronics" , link :"/"},
    { id: 2, name: "Clothes" , link :"/" },
    { id: 3, name: "Kitchen" , link :"/" },
    { id: 4, name: "Jewellery" , link :"/" }
  ];

  return (
    <section id="product" className="product">
      <div className="product-container">
        
        <h1>Featured Products</h1>

        <div className="Productsitems">
          <div className = "category">
          {productitems.map((item) => (
            <a href = {item.link}>
            < motion.div className="card"   whileHover ={{scale: 1.1}}
            key={item.id}>{item.name}</motion.div></a>
          ))}
        </div>
</div>
      </div>
    </section>
  );
}