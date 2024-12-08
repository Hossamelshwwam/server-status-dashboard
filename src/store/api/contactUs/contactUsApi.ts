import { baseApi } from "../baseApi";

const contactUsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getContact: build.query({
      query: () => "contact/get",
    }),
    deleteContact: build.mutation({
      query: (id) => ({
        url: `contact/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useGetContactQuery, useDeleteContactMutation } = contactUsApi;
