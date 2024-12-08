import { baseApi } from "../baseApi";

export const companyDataApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editCompany: builder.mutation({
      query: (data: FormData) => ({
        url: `charity/edit`,
        method: "PUT",
        body: data,
      }),
    }),
    getCompany: builder.query({
      query: () => "comapnyData/get",
    }),
  }),
  overrideExisting: false,
});

export const { useEditCompanyMutation, useGetCompanyQuery } = companyDataApi;
