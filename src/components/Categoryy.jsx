import { link } from 'framer-motion/client';
import './Categoryy.css';
import { motion } from "framer-motion";
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import KitchenIcon from '@mui/icons-material/Kitchen';
import DiamondIcon from '@mui/icons-material/Diamond';
export default function category() {

  const productitems = [
    { id: 1, name: "Electronics" , link :"/" , icon: <LaptopMacIcon sx={{ fontSize: {xs:30 , md:50} }} />},
    { id: 2, name: "Clothes" , link :"/singup" ,icon: <CheckroomIcon sx={{fontSize: {xs:30 , md:50}}}/>},
    { id: 3, name: "Kitchen" , link :"/" , icon: <KitchenIcon sx={{fontSize:{xs:30 , md:50}}}/>},
    { id: 4, name: "Jewellery" , link :"/" , icon : <DiamondIcon sx={{fontSize:{xs:30 , md:50}}}/>}
  ];

  return (
    <section id="product" className="product">
      <div className="product-container">
        <div className="Productsitems">
          <div className = "category">
          {productitems.map((item) => (
            <a href = {item.link}>
            < motion.div className="card"   whileHover ={{scale: 1.1}}
            key={item.id}>
              <div className="card-icon">{item.icon}</div>
              {item.name}</motion.div></a>
          ))}
        </div>
</div>
      </div>
    </section>
  );
}