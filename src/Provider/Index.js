import {useState, createContext, useEffect} from 'react'


export const CartContext = createContext();

 const CartProvider =({children})=>{
    const [cart, setCart]= useState(()=>{
      const stored = localStorage.getItem('cart');
      return stored? JSON.parse(stored): [];
    });
      const addItem =(item)=>{
    const exists = cart.find((each)=> each.id===item.id);
    if(exists){
      setCart(
        cart.map((eachCart)=>(
          eachCart.id === item.id ? {...eachCart, quantity: eachCart.quantity+1} : eachCart
        ))
      )
    }else{
      setCart([...cart, {...item, quantity:1}])
    }

  }

  const removeItem = (item)=>{
    const exists = cart.find((each)=>(
      each.id === item.id
    ))
        if (!exists) return;

    if(exists.quantity === 1){
      setCart(cart.filter((c) => c.id !== item.id))
     
    }else{
      setCart(
        cart.map((eachCart)=>(
          eachCart.id === item.id ? {...eachCart, quantity: eachCart.quantity-1} : eachCart
        ))
      )
    }
  }

  useEffect(()=>{
    localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])


    return(
        <CartContext.Provider value={{cart, setCart,  addItem, removeItem}} >
            {children }
        </CartContext.Provider>
    )
} 

export default CartProvider