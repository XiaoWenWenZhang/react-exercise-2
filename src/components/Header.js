import React from 'react';
import Cart from './Cart';

class Header extends React.Component {
    render() {
        const {count} = this.props;
        return (
            <header>
                <h1>Store</h1>
                <Cart count={count}/>
            </header>
        );
    }
}

export default Header;