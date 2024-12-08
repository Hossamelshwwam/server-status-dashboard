import { baseApi } from "../baseApi";

const donationCasesApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDonationCases: builder.query({
      query: () => "donationCase/getCases",
    }),
    addDonationCase: builder.mutation({
      query: (donation) => ({
        url: "donationCase/add",
        method: "POST",
        body: donation,
      }),
    }),
    editDonationCase: builder.mutation({
      query: (donation) => {
        return {
          url: `donationCase/edit/${donation.id}`,
          method: "PUT",
          body: donation.data,
        };
      },
    }),
    deleteDonationCase: builder.mutation({
      query: (id) => ({
        url: `donationCase/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddDonationCaseMutation,
  useDeleteDonationCaseMutation,
  useEditDonationCaseMutation,
  useGetDonationCasesQuery,
} = donationCasesApi;
