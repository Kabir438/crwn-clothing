import React from 'react';
import CustomButton from '../custom-button/custom-button.component'

import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import { useSnackbar } from 'notistack';

import Card from '@mui/material/Card';

import './collection-item.styles.scss';

const CollectionItem = ({item, addItem}) => {
  const {imageUrl, name, price} = item;
  const { enqueueSnackbar } = useSnackbar();
  const handleClick = (item, variant) => {
    addItem(item)
    enqueueSnackbar(`${item.name} has been added to the cart`, { variant })
  }
  return (
  <>
    <Card className='collection-item'>
      <div className='collection-item'>
        <div
          className='image'
          style={{
            backgroundImage: `url(${imageUrl})`
          }}
        />
        <div className='collection-footer'>
          <span className='name'>{name}</span>
          <span className='price'>${price}</span>
        </div>
        <CustomButton onClick={() => handleClick(item, 'info')}>Add To Cart</CustomButton>
      </div>
    </Card>
  </>
  )
}

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);
