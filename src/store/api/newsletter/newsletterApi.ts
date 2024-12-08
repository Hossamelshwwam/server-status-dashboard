import { baseApi } from "../baseApi";

const newsletterApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getNewsletters: build.query({
      query: () => "newsLetter/get",
    }),
    deleteNewsletter: build.mutation({
      query: (id) => ({
        url: `newsLetter/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetNewslettersQuery,
  useDeleteNewsletterMutation,
} = newsletterApi;
