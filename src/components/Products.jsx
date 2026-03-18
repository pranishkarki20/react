import './product.css';
import {motion} from "framer-motion";
export default function product() {
    return(
        <section id = "product" className='product'>
            <div className="product-container">
           <h1>Featued Products</h1>
           <div className = "Productsitems">

             <div className = "product1"> 
                <h1>coke</h1>
                   <motion.button 
                whileHover={{scale: 1.1}}
                type = 'submit'
                className = 'ppbtn'> Buy Now </motion.button>
            </div >
              <div className = "product2">  
                <h1>bana</h1>
                <motion.button 
                whileHover={{scale: 1.1}}
                type = 'submit'
                className = 'ppbtn'> Buy Now </motion.button>
             </div>
             <div className='product3'>
                <h1>Laze</h1>
             <motion.button 
                whileHover={{scale: 1.1}}
                type = 'submit'
                className = 'ppbtn'> Buy Now </motion.button>
             </div>
              <div className='product4'>
                <h1>Bingo</h1>
             <motion.button 
                whileHover={{scale: 1.1}}
                type = 'submit'
                className = 'ppbtn'> Buy Now </motion.button>
             </div>

           </div>
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
