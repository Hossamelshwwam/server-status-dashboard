import { baseApi } from "./baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (user) => ({
        url: "admin/addAccount",
        method: "POST",
        body: user,
      }),
    }),
    getAccounts: builder.query({
      query: () => "admin/getAccounts",
    }),
    changeRoleUser: builder.mutation({
      query: (user) => ({
        url: "admin/changeRole",
        method: "PATCH",
        body: user,
      }),
    }),
    DeleteUser: builder.mutation({
      query: (user) => ({
        url: "admin/deleteAccount",
        method: "DELETE",
        body: user,
      }),
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetAccountsQuery,
  useChangeRoleUserMutation,
  useDeleteUserMutation,
} = userApi;
