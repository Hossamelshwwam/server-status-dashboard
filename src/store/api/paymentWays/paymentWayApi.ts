import { baseApi } from "../baseApi";

const paymentWayApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPaymentWays: build.query({
      query: () => "payment/get",
    }),
    addPaymentWay: build.mutation({
      query: (data) => ({
        url: "payment/add",
        method: "POST",
        body: data,
      }),
    }),
    editPaymentWay: build.mutation({
      query: (way) => {
        return {
          url: `payment/edit/${way.id}`,
          body: way.data,
          method: "PUT",
        };
      },
    }),
    deletePaymentWay: build.mutation({
      query: (id) => ({
        url: `payment/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetPaymentWaysQuery,
  useAddPaymentWayMutation,
  useEditPaymentWayMutation,
  useDeletePaymentWayMutation,
} = paymentWayApi;
