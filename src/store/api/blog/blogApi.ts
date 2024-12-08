import { baseApi } from "../baseApi";

const blogApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => "blog/getBlogs",
    }),
    addBlog: builder.mutation({
      query: (blog) => ({
        url: "blog/add",
        method: "POST",
        body: blog,
      }),
    }),
    editBlog: builder.mutation({
      query: (blog) => {
        return {
          url: `blog/edit/${blog.id}`,
          method: "PUT",
          body: blog.data,
        };
      },
    }),
    deleteBlog: builder.mutation({
      query: (id) => ({
        url: `blog/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetBlogsQuery,
  useAddBlogMutation,
  useDeleteBlogMutation,
  useEditBlogMutation,
} = blogApi;
