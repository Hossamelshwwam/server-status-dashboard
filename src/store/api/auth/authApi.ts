import { baseApi } from "../baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation({
      query: (login) => ({
        url: "auth/signIn",
        method: "POST",
        body: login,
      }),
    }),
  }),
});

export const { useSignInMutation } = authApi;
