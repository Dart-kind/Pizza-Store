import { FC, useEffect, useState } from "react"
import styles from './styles.module.scss';
import { ProductCard } from "@/store/models/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItemsById } from "@/store/redux/cart/selectors";
import { CartItem } from "@/store/redux/cart/types";
import { addItem } from "@/store/redux/cart/slice";

interface PostItemProps {
  post: ProductCard;
}

const PostItem: FC<PostItemProps> = ({ post }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartItemsById(post.id));
  const [activeSize, setActiveSize] = useState(0);
  const addedCount = cartItem.reduce((sum, item) => sum + item.count, 0);



  const onClickAdd = () => {
    const item: CartItem = {
      id: post.id,
      name: post.name,
      price: post.price[activeSize],
      image: post.image,
      size: post.size[activeSize],
      count: 1,
    };
    dispatch(addItem(item));
  };




  return (
    <div className={styles.pizzaBlockWrapper}>
      <div className={styles.pizzaBlock}>
        <img className={styles.pizzaBlockImage} src={post.image} alt="Pizza" />
        <h4 className={styles.pizzaBlockTitle}>{post.name}</h4>
        <p className={styles.pizzaBlockDescription}>
          {post.toppings}
        </p>
        <div className={styles.pizzaBlockSelector}>
          <ul className={styles.pizzaBlockSize}>
            {post.size.map((size, i) => (
              <li
                key={size}
                onClick={() => setActiveSize(i)}
                className={activeSize === i ? styles.active : ''}
              >
                {size} <br/> ₱ {post.price[i]}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.pizzaBlockBottom}>
          <button onClick={onClickAdd} className={styles.buttonAdd}>
            <span>Add</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
