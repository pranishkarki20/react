import './product.css';
import {motion} from "framer-motion";
export default function product() {
    return(
        <section id = "product" className='product'>
           <div className="product-container">
           <h1>Featued Products</h1>
          <motion.button 
          whileHover={{
            scale: 1.1
          }}
          type='submit'
          className='pbtn' >View All Products</motion.button>
         </div>
        </section>
    )
}