import { useState } from "react";
import { postApi } from "@/services/PostService";
import styles from './styles.module.scss';
import PostItem from "@/components/PizzasPost/PostItem/PostItem";
import Cart from "@/components/Cart/cart"
import { useSelector } from "react-redux"
import { selectFilter } from "@/store/redux/filter/selectors"

export const PostContainer = () => {
  const { data: post } = postApi.useFetchAllPostQuery(12);

  return (

    <div className={styles.postContainer}>

      <div className={styles.productList}>
        {post && post.map(post =>
          <PostItem post={post} key={post.id} />
        )}
      </div>
      <div className={styles.cartWrapper}>
        <Cart />
      </div>
    </div>
  );
};
