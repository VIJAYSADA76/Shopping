import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Action } from "@remix-run/router"; // This import may not be necessary if not used
import Cart from "./Cart"; // Ensure Cart is being used if imported
import './Store.css';

const productsSlice = createSlice({
    name: "products",
    initialState: {
        Veg: [
            { name: "Tomato", price: 150.33 },
            { name: "Potato", price: 60.5 },
            { name: "Capsicum", price: 64.5 }, // Corrected spelling
            { name: "Cabbage", price: 60.3 } // Corrected spelling
        ],

        NonVeg: [
            { name: "Chicken", price: 240.4 },
            { name: "Mutton", price: 440.5 }, // Corrected spelling
            { name: "Desi Chicken", price: 340.5 }, // Corrected spelling
            { name: "Crab", price: 660.5 }
        ]
    },
    reducers: {
       
    }
});

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: { // Corrected from 'reducer' to 'reducers'
        addToCart: (state, action) => {
            const item = state.find(item => item.name === action.payload.name); // Corrected syntax
            if (item) {
                item.quantity += 1;
            } else {
                state.push({ ...action.payload, quantity: 1 }); // Add quantity when adding a new item
            }

           
        },
        increment:(state,action)=>{

            const item=state.find(item=>item.name===action.payload.name)
                if(item){
                    item.quantity +=1;
                }
            },

            decrement:(state,action)=>{

                const item=state.find(item=>item.name===action.payload.name)
                    if(item && item.quantity>1){
                        item.quantity -=1;
                    }
                    else{
                        return state.filter(item=>item.name!==action.payload.name);
                    }
                },
                remove:(state,action)=>{
                    return state.filter(item=>item.name!==action.payload.name);


                    
                    },
    

        
    }
});

export const { addToCart,increment,decrement,remove} = cartSlice.actions;

const store = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartSlice.reducer
    }
});

export default store;
