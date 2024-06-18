import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { Pizza, SearchPizzaParams } from "@/store/redux/pizza/types"
export const fetchPosts = createAsyncThunk<Pizza[], SearchPizzaParams>( 'pizza/fetchPizzasStatus', async (params) => {
  const { sortBy, order, category, search, currentPage } = params;

  const {data} = await axios.get<Pizza[]>(`http://localhost:5000/posts`,
    {
      params: {
        page: currentPage,
        limit: 12,
        category,
        order,
        sortBy,
        search,
      },
    })
return data;
});