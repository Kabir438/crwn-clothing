export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItems =  cartItems.find(cartItem => cartItem.id == cartItemToAdd.id);
    if(existingCartItems) {
        return cartItems.mpa(cartItem=>{
            cartItem.id === cartItemToAdd.id ? {...cartItem, quantity: cartItem.quantity} : cartItem
        })
    }
    return [...cartItems, {...cartItemToAdd, quantity: cartItem.quantity + 1}]
}