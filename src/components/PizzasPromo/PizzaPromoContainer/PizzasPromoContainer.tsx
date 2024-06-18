import { CartFreeFood } from "@/components/PizzasPromo/CartFreeFood/CartFreeFood"
import { CartFreeDelivery } from "@/components/PizzasPromo/CartFreeDelivery/CartFreeDelivery"
import { CartPizzaPromo } from "@/components/PizzasPromo/CartPizzaPromo/CartPizzaPromo"
import styles from "./styles.module.scss"
export const PizzaPromoContainer = () => {
  return (
      <div className={styles.cart}>
        <div className={styles.element__1}>
          <CartPizzaPromo/>
        </div>
        <div className={styles.element__2}>
          <CartFreeDelivery />
          <CartFreeFood />
        </div>
      </div>
  )
}