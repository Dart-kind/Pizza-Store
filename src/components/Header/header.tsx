import pizza from "@/assets/Icon/pizza.png"
import search from "@/assets/Icon/search.png"
import logo from "@/assets/Icon/logo.png"
import styles from "./styles.module.scss"
import {  useSelector } from "react-redux"
import { RootState } from "@/store/store"

  export const Header = () => {
    const cartCount = useSelector((state: RootState) => state.cart.count)

    console.log(cartCount)

  return (
    <header className={styles.header}>
      <div className={styles.header__container}>
        <a href="">
        <div className={styles.header__tracking}>
          <img src={search} alt="Search" />
            <p className={styles.tracking__text}>Track Order</p>
        </div>
        </a>
          <img src={logo} alt="logo" className={styles.header__logo}/>

      <div>
        <div className={styles.header__cart}>
          <a href="" className={styles.cart__link}>
        <img src={pizza} alt="Pizza" className={styles.cart__pizza} />
            <p className={styles.cart__text}>My Cart </p>
          </a>
        <div className={styles.square}>
          {cartCount > 0 && <p>{cartCount} </p> || <p>0</p>}
        </div>
        </div>
      </div>

      </div>
    </header>
  )
}


