
import promoFries from "@/assets/Icon/promo-fries.png"
import styles from "./styles.module.scss"

export const CartFreeFood = () => {
  return (
    <div className={styles.cart}>
      <img src={promoFries} alt="Promo img" className={styles.image}/>
      <div className={styles.text}>
        <h1 className={styles.title}>Free Fries Friday </h1>
        <p className={styles.paragraph}>  Every friday we have free fries for every 500 Pesos order.</p>
      </div>
      <div className={styles.DaysCounter}>
    <div className={styles.rectangle}>
      <div className={styles.rectangle__text}>
        <p>IN</p>
        <p>2</p>
        <p>DAYS</p>
      </div>
    </div>
      </div>
    </div>
  )
}