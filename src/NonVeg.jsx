import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";

function NonVeg() {
    const nonVegProducts = useSelector(state => state.products.NonVeg);
    const dispatch = useDispatch();

    const items = nonVegProducts.map((product, index) => (
        <li key={index} style={{ color: 'whitesmoke' }}>
            {product.name} - ${product.price.toFixed(2)}
            <button style={{ color: 'blue' }} onClick={() => dispatch(addToCart(product))} >
                Add to Cart
            </button>
        </li>
    ));

    return (
        <>
            <style>
                {`
                    body {
                        background-image: url('https://th.bing.com/th/id/OIP.suJ8dMysyEUSSKCorI_RRAHaE7?w=800&h=533&rs=1&pid=ImgDetMain');
                        background-size: cover;
                        background-position: center;
                        min-height: 100vh;
                        margin: 0;
                        padding: 0;
                        color: whitesmoke;
                    }
                    h1 {
                        background-color: rgba(0, 0, 0, 0.6);
                        display: inline-block;
                        padding: 10px;
                    }
                `}
            </style>
            <h1>NonVeg Items</h1>
            <ul>
                {items}
            </ul>
        </>
    );
}

export default NonVeg;
