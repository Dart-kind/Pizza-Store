import { useDispatch, useSelector } from "react-redux"
import { selectFilter } from "@/store/redux/filter/selectors"
import { Sort } from "@/components/Sort/Sort"
import { useCallback, useEffect } from "react"
import { setCategoryId } from "@/store/redux/filter/slice"
import { fetchPosts } from "@/store/redux/pizza/asyncActions"
import { Categories } from "@/components/PizzasPost/Categories"
export const PizzasHeader = () => {
  const dispatch = useDispatch();
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);

  const onChangeCategory = useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, [dispatch]);

  const getPizzas = async () => {
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const category = categoryId > 0 ? String(categoryId) : '';
    const search = searchValue;

    dispatch(
      fetchPosts({
        sortBy,
        order,
        category,
        search,
        currentPage: String(currentPage),
      }) as any,
    );
    window.scrollTo(0, 0);
  }

  useEffect(() => {
    getPizzas();
  }, [categoryId, sort, currentPage, searchValue]);

  return (
    <div>
      <Sort value={sort}  />
      <Categories value={categoryId} onChangeCategory={onChangeCategory} />

    </div>
  );
}
