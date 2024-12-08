import { baseApi } from "../baseApi";

const categoryApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query({
      query: () => "category/get",
    }),
    addCategory: build.mutation({
      query: (data) => ({
        url: "category/add",
        method: "POST",
        body: data,
      }),
    }),
    editCategory: build.mutation({
      query: (category) => {
        return {
          url: `category/edit/${category.id}`,
          body: category.data,
          method: "PUT",
        };
      },
    }),
    deleteCategory: build.mutation({
      query: (id) => ({
        url: `category/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddCategoryMutation,
  useDeleteCategoryMutation,
  useEditCategoryMutation,
  useGetCategoriesQuery,
} = categoryApi;
