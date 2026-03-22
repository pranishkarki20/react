import './Css.css';
import{motion} from "framer-motion";
export default function Home(){
return (
    <div>
    <section id = "home" className = "home">
    <motion.div className="home-container"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 2 }}
    >
           <video autoPlay loop muted playsInline className="bg-video">
        <source src = "/product.mp4"/>
    </video>
    <h1>Products</h1>
    <motion.button
    whileHover={{
        scale: 1.1
    }}
    whileTap={{
        scale: 0.9
    }}
    className='btn' >Shop</motion.button>
    </motion.div>
    
    </section></div>
)
}