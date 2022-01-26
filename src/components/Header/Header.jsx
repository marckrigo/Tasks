import React from 'react';

import { HeaderContainer } from './styled';

const Header = (props) => {
    return (
        <HeaderContainer>{props.text}</HeaderContainer>
    );
}
 
export default Header;