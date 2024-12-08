import { baseApi } from "../baseApi";

const companyImagApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getHeroImage: builder.query({
      query: () => "heroImage/get",
    }),
    addHeroImage: builder.mutation({
      query: (hero) => ({
        url: "heroImage/add",
        body: hero,
        method: "POST",
      }),
    }),
    editHeroImage: builder.mutation({
      query: (hero) => {
        return {
          url: `heroImage/edit/${hero.id}`,
          body: hero.data,
          method: "PUT",
        };
      },
    }),
    deleteHeroImage: builder.mutation({
      query: (id) => ({
        url: `heroImage/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddHeroImageMutation,
  useEditHeroImageMutation,
  useGetHeroImageQuery,
  useDeleteHeroImageMutation,
} = companyImagApi;
