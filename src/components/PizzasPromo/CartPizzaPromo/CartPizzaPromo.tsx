import styles from "./styles.module.scss"
import { PostPromoContainer } from "@/components/PizzasPromo/PostPromoContainer/PostPromoContainer"
export const CartPizzaPromo = () => {
  return (
   <div className={styles.cart}>
     <h1 className={styles.text}>Rainy days promo</h1>
     <div>
       <PostPromoContainer />
     </div>
   </div>
  )
}