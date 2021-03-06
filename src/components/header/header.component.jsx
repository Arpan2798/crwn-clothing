import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo} from '../../assests/crown.svg';
import { auth } from '../../firebase/firebase.utils';
//import Authentication from '../../pages/user-authentication/user-authenticaiton.component';

const Header = ({currentUser}) => (
    <div className="header">
        <Link to="/" className="logo-container">
            <Logo className="logo"/>
        </Link>

        <div className="options">
            <Link to="/shop" className="option">
                SHOP
            </Link>
            <Link className="option">
                CONTACT
            </Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/authentication'>SIGN IN</Link>
            }
        </div>
        
    </div>
)

export default Header;