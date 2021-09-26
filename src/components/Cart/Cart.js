// importing FontAwesomeIcon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    // using reduce module to calculate total salary 
    const total = props.team.reduce((pre,curr) => pre+curr.salary, 0);
    return (
        <div className="cart-container">
            <h6>{<FontAwesomeIcon icon={faUsers} />} Programmer Added : {props.team.length}</h6>
            <p><b>Total Cost: ${total}</b></p>
            <div>
                {
                    props.team.map(member => <div className="cartItem">
                        <img src={member.img} alt="" />
                        <p><small>{member.name}</small>
                        <br/>${member.salary}</p>
                        </div>)
                }
            </div>
        </div>
    );
};

export default Cart;