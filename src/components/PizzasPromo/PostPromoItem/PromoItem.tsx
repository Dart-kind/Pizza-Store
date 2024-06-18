import { ProductPromo } from "@/store/models/ProductPromo"
import { FC } from "react"
import styles from './styles.module.scss'
interface PromoItemProps {
  promo: ProductPromo
}

 const PromoItem: FC<PromoItemProps> = ({promo}) => {
  return (
    <div className={styles.post__promo__item}>
      <div>
      <img src={promo.image} alt="img" className={styles.img} />
        <div >
          <h4 className={styles.nameOfPizza}>{promo.name}</h4>
          <p className={styles.price}>
            ₱<span>{promo.price}</span>  <span className={styles.price__discount}>₱{promo.discount}</span>
          </p>
          <p className={styles.size}>{promo.size}</p>
        </div>
      </div>
    </div>
  )
}

export default PromoItem;
