import styles from './styles.module.scss'
import icon from '@/assets/Icon/japaneseIcon.png'
export const DiscountOnFacebook = () => {
  return (
    <div className={styles.discountOnFacebook}>
      <img className={styles.sign} alt="img" src={icon} />
      <div className={styles.discountOnFacebook__content}>
        <h2 className={styles.discountOnFacebook__title}>
          Up to 20% Discount for choice food.
        </h2>
        <div>
          <a href="https://www.facebook.com/" className={styles.discountOnFacebook__link}>
            Find out more in our facebook page post.
          </a>
        </div>
      </div>
    </div>
  );
};