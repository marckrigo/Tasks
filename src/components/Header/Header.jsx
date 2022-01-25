import React from 'react';

import './Header.css';

const Header = (props) => {
    return (
        <h1 className='header-container'>{props.text}</h1>
    );
}
 
export default Header;