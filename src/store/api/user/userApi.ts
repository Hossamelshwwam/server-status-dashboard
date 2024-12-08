import { baseApi } from "../baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addUser: builder.mutation({
      query: (user) => ({
        url: "auth/adduser",
        method: "POST",
        body: user,
      }),
    }),
    getWebsiteAccounts: builder.query({
      query: () => "auth/getAllWebsiteUsers",
    }),
    getDashboardAccounts: builder.query({
      query: () => "auth/getAllDashboardUsers",
    }),
    changeRoleUser: builder.mutation({
      query: (user) => ({
        url: "auth/changeRole",
        method: "PATCH",
        body: user,
      }),
    }),
    DeleteUser: builder.mutation({
      query: (id) => ({
        url: `auth/deleteUser/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddUserMutation,
  useGetWebsiteAccountsQuery,
  useGetDashboardAccountsQuery,
  useChangeRoleUserMutation,
  useDeleteUserMutation,
} = userApi;
