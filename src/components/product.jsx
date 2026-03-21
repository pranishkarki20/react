import { motion } from 'framer-motion'
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import './Product.css'
export default function Product(){
    const product = [
        {id : 1 , name: "Macbook"  , image: "/mac.jpg"},
        {id : 2 , name : "Iphone" ,   image: "/mac.jpg"},
        {id : 3 , name : "Suit",  image: "/mac.jpg"},
        {id : 4 , name : "Check shirt",image:"/checkshirt.jpg" },
        {id: 5 , name : "Bag" , image:"/bag.jpg"}
    ]
    return(
    <section id="Products" className="Products">
    <div className = "product">
        <h1>Featured Product </h1>
        <div
        whileHover={{ scale: 1.1 }}
        className = "Productitems">
            {product.map((iteam) =>(
                <motion.div
                key={iteam.id}
                whileHover ={{scale : 1.1}} 
                className = "Card">
                     <img src={iteam.image}  alt={iteam.name} className='imges' />
                <div className = "text">{iteam.name}</div>
                <Button 
                className='button'
                variant='contained' startIcon = {<ShoppingCartIcon/>} 
                style={{
                    margin: "0 auto",
                    display :"flex",
                    justifyItems : "center",
                    color:"black",
                    background :"white",
                    width : "160px",
                    p : "70px"
                }}
                >
                Add to Cart 
                </Button>
                </motion.div>
            ))
            }
                </div>
        </div>
    </section>
    )
}
