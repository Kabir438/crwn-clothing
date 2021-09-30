import React from 'react';
import { connect } from 'react-redux';
import { useSnackbar } from 'notistack';

import { ReactComponent as DArrow } from '../../assets/downArrow.svg'
import { ReactComponent as UArrow } from '../../assets/upArrow.svg'
import { clearItemFromCart, removeItem, addItem } from '../../redux/cart/cart.actions';

import './checkout-item.style.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
    const { enqueueSnackbar } = useSnackbar();
    const handleClick = (cartItem, variant) => {
      clearItem(cartItem)
      enqueueSnackbar(`${cartItem.name} has been removed from the cart`, { variant })
    }
    const { name, imageUrl, price, quantity } = cartItem
    return (
    <div className='checkout-item'>
        <div className='image-container'>
        <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <div className="svg" onClick={()=>addItem(cartItem)}>
                <UArrow/>
            </div>
            <div id="quantity-text">
                {quantity}
            </div>
            <div className="svg" onClick={()=>removeItem(cartItem)}>
                <DArrow/>
            </div>
        </span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={() => handleClick(cartItem, 'info')}>&#10005;</div>
    </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);