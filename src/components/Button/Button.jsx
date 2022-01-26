import React from 'react';

import { ButtonClass } from './styled';

const Button = ( {children, onClick} ) => {
    return (
        <ButtonClass onClick={onClick}>{children}</ButtonClass>
    );
}
 
export default Button;