import { baseApi } from "../baseApi";

const tagApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTags: build.query({
      query: () => "tag/get",
    }),
    addTag: build.mutation({
      query: (data) => ({
        url: "tag/add",
        method: "POST",
        body: data,
      }),
    }),
    editTag: build.mutation({
      query: (tag) => {
        return {
          url: `tag/edit/${tag.id}`,
          body: tag.data,
          method: "PUT",
        };
      },
    }),
    deleteTag: build.mutation({
      query: (id) => ({
        url: `tag/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddTagMutation,
  useDeleteTagMutation,
  useEditTagMutation,
  useGetTagsQuery,
} = tagApi;
