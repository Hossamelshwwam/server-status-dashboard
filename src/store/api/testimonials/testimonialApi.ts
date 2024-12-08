import { baseApi } from "../baseApi";

const testimonialApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getTestimonials: build.query({
      query: () => "reviewsDashboard/get",
    }),
    deleteTestimonial: build.mutation({
      query: (id) => ({
        url: `reviewsDashboard/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetTestimonialsQuery, useDeleteTestimonialMutation } =
  testimonialApi;
