import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import DarkOrLight from '../darkorlight/darkorlight.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import {ReactComponent as Logo} from '../../assets/crown.svg';

import './header.styles.scss';

class Header extends React.Component {

  componentDidUpdate() {
    const { currentUser} = this.props;
    currentUser ? localStorage.setItem('signedIn', true) : localStorage.setItem('signedIn', false);
  }
  render() {
    const { currentUser, hidden } = this.props;
    return(
    <header className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <DarkOrLight/>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
          {
          currentUser ? (
            <div className='option' onClick={() => auth.signOut()}>
              SIGN OUT
            </div>
            ) : (
            <Link className='option' to='/signin'>
              SIGN IN
            </Link>
          )
          }
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </header>
    )
  }
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);
