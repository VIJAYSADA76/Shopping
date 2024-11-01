import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import "./Store.css"

function Veg(){

    
    const vegProducts = useSelector(state => state.products.Veg)
    const dispatch=useDispatch()
    const items = vegProducts.map((product,index)=>
        <li key={index}>
            {product.name} -${product.price.toFixed(2)}
            <button style={{color:'blue'}} onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
        </li>
)
    return(
        <  >
         <style >
                {`
                    body {
                        background-image: url('https://thumbs.dreamstime.com/b/colorful-vegetables-background-fresh-vegetables-black-backgr-copy-space-95620353.jpg');
                        background-size: cover;
                        background-position: center;
                        min-height: 100vh;
                        margin: 0;
                        padding: 0;
                    }
                `}
            </style>
           
        <h2 style={{ backgroundColor:"white" , padding:'2px', width:'30%' , margin:'auto'}}>Veg Products</h2>
        
        <ul>
            {items}
        </ul>
    
        </>
    )
}
export default Veg;