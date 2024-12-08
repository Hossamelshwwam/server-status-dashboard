import { baseApi } from "../baseApi";

const faqApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFaqs: build.query({
      query: () => "faq/get",
    }),
    addFaq: build.mutation({
      query: (data) => ({
        url: "faq/add",
        method: "POST",
        body: data,
      }),
    }),
    editFaq: build.mutation({
      query: (faq) => {
        return {
          url: `faq/edit/${faq.id}`,
          body: faq.data,
          method: "PUT",
        };
      },
    }),
    deleteFaq: build.mutation({
      query: (id) => ({
        url: `faq/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddFaqMutation,
  useDeleteFaqMutation,
  useEditFaqMutation,
  useGetFaqsQuery,
} = faqApi;
