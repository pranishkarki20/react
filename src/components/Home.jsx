import './Css.css';
import{motion} from "framer-motion";
export default function Home(){
return (
    <section id = "home" className = "home">
    <div className="home-container">
    <h1>Products</h1>
    <motion.button
    whileHover={{
        scale: 1.1
    }}
    whileTap={{
        scale: 0.9
    }}
    className='btn' >Shop</motion.button>
    </div>
    </section>
)
}