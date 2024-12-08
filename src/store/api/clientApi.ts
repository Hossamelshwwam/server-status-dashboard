import { baseApi } from "./baseApi";

const clientApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getClient: builder.query({
      query: () => "client/get",
    }),
    addClient: builder.mutation({
      query: (client) => ({
        url: "client/add",
        method: "POST",
        body: client,
      }),
    }),
    editClient: builder.mutation({
      query: (client) => {
        return {
          url: `client/edit/${client.id}`,
          body: client.data,
          method: "PUT",
        };
      },
    }),
    deleteClient: builder.mutation({
      query: (id) => ({
        url: `client/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddClientMutation,
  useGetClientQuery,
  useEditClientMutation,
  useDeleteClientMutation
} = clientApi;
