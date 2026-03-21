import { motion } from 'framer-motion'
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import './Product.css'
export default function Product(){
    const product = [
        {id : 1 , name: "Macbook"  , image: "/mac.jpg" , price: "$1000"},
        {id : 2 , name : "Iphone" ,   image: "/iphone.jpg" ,price: "$599"},
        {id : 3 , name : "Suit",  image: "/suit.jpg" ,price: "$250"},
        {id : 4 , name : "Check shirt",image:"/checkshirt.jpg" , price: "$100" },
        {id: 5 , name : "Bag" , image:"/bag.jpg" , price: "$89.90"}
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
                <div className='Price'>{iteam.price}</div>
                <Button 
                className='button'
                variant='contained' startIcon = {<ShoppingCartIcon/>} 
                style={{
                    margin: "10px auto",
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
                 <Button variant='outlined'  sx ={{
                    margin:"15px auto",
                    color:"black",
                    bordercolor:"black"
                 }}>
                    View all products
            </Button>
        </div>
    </section>
    )
}
