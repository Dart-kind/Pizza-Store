import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store/redux/rootReducer';
import { removeItem, addItem, minusItem } from '@/store/redux/cart/slice';
import styles from './styles.module.scss';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.count, 0);
  const vat = Math.round(totalPrice * 0.14); // Example VAT calculation
  let delivery = 1000

  if (totalPrice > 1000) {
    delivery = 0
  }

    const onRemoveItem = (id: number, size: string) => {
    dispatch(removeItem({ id, size }));
  };

  const onIncrementItem = (id: number, size: string) => {
    dispatch(addItem({ id, size }));
  };

  const onDecrementItem = (id: number, size: string) => {
    dispatch(minusItem({ id, size }));
  };


  return (
    <div className={styles.cart}>
      <h2>My Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id + item.size} className={styles.cartItem}>
            <img src={item.image} alt={item.name} />
            <div className={styles.cartItemDetails}>
              <h4>{item.name}</h4>
              <p>{item.size}</p>
              <p>₱ {item.price}</p>
              <div className={styles.cartItemCount}>
                <button onClick={() => onDecrementItem(item.id, item.size)}>-</button>
                <span>{item.count}</span>
                <button onClick={() => onIncrementItem(item.id, item.size)}>+</button>
              </div>
            </div>
            <button onClick={() => onRemoveItem(item.id, item.size)} className={styles.removeItem}>x</button>
          </li>
        ))}
      </ul>
      <div className={styles.cartTotal}>
        <p>Subtotal: ₱ {totalPrice}</p>
        <p>Delivery Fee: {delivery}</p>
        <p>Total: ₱ {totalPrice + vat + delivery}</p>
      </div>
      <button className={styles.placeOrder}>Place Order</button>
    </div>
  );
};

export default Cart;
