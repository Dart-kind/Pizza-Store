import { useState } from "react"
import { postApi } from "@/services/PostService"
import PromoItem from "@/components/PizzasPromo/PostPromoItem/PromoItem"
import styles from './styles.module.scss'
import { DiscountOnFacebook } from "@/components/PizzasPromo/DicountOnFacebook/DiscountOnFacebook"

export const PostPromoContainer = () => {
  const [limit, setLimit] = useState(3)
  const {data: promo, } = postApi.useFetchAllPromoQuery(limit)

  return (
      <div className={styles.cart}>
        {promo && promo.map(promo =>
          <PromoItem promo={promo}  key={promo.id}/>
        )}
        <DiscountOnFacebook />

      </div>
  )
}