import { createSelector } from 'reselect';

const selectCart = state => state.cart;
const selectUser = state => state.user;

export const selectCartItems = createSelector(
    [selectCart, selectUser],
    (cart) => cart.cartItems
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => ( 
        cartItems.reduce((accumelatedQuantity, cartItem) => accumelatedQuantity + cartItem.quantity, 0)
    )
)