import React from 'react'
import { useStateValue } from "../StateProvider";
import "./checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import subtotal from "./subtotal";



function Checkout({ item }) {
    const [{
        basket
    }] = useStateValue();

    return (
        <div className='checkout' >
            <div className="checkout_left">
                <img className="checkout_ad"
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="" />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your Shoppingbasket is empty</h2>
                        <p>"put the lotion into the basket"</p>
                    </div>
                ) : (
                    <div>
                        <h2>Your Shoppingbasket</h2>
                        {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            <div className="checkout_right">
                <subtotal />
            </div>
        </div>
    );

}

export default Checkout;