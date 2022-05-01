import { useState } from "react";

let initialState = {
    cart: [],
    productIDs: [],
    toggleModal: false,  
    checkouts: [],
    selectedOrder: 0,
}

const useInitialState = () =>{
    if(localStorage.getItem("state")){
        let value = localStorage.getItem("state");
        value = JSON.parse(value);
        initialState = value;
    }
    const[state, setState] = useState(initialState);

    const addToCart = (payload) =>{
        setState({
            ...state,
            cart: [...state.cart, payload],
            productIDs: [...state.productIDs, payload.id],
        });
    
    };
    const removeFromCart = (indexValue) =>{
        setState({
            ...state,
            productIDs: state.productIDs.filter((el) => el !== state.cart[indexValue].id),
            cart: state.cart.filter((product,index)=> index!==indexValue),
            
        });
       
    };

    const addCheckout = (checkout) => {
        setState({
            ...state,
           checkouts: [...state.checkouts, checkout],
           cart: [],
           productIDs: []
            
        });
    };

    const setOrder = (order) => {
        setState({
            ...state,
            selectedOrder: order

        });
    }

    const handleModal = () =>{
        setState({
            ...state,
            toggleModal: !state.toggleModal,
        });
  };

  localStorage.setItem("state", JSON.stringify(state));
  initialState = state;

    return{
        state,
        addToCart,
        removeFromCart,
        handleModal,
        addCheckout,
        setOrder
    }

}

export default useInitialState;