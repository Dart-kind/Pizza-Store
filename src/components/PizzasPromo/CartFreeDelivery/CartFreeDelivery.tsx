import styles from "./styles.module.scss"
export const CartFreeDelivery = () => {
  return (
    <div className={styles.cart}>
      <h1 className={styles.title}>Free delivery for every <br/> P1000 order.</h1>
       <p className={styles.paragraph}>  Any orders that are more than 1000 Pesos have free delivery, only in select locations.</p>
      <a className={styles.link} href="">Learn more</a>
    </div>
  );
}