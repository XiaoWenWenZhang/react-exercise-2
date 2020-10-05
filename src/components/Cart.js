import React from 'react';
import cartUrl from '../assets/cart.jpg';

class Cart extends React.Component {
    render() {
        const {count} = this.props;
        return (
            <div className="cart">
                <img src={cartUrl} alt="cart"></img>
                <span>{count}</span>
            </div>
        );
    }
}

export default Cart;