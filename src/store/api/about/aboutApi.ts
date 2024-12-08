import { baseApi } from "../baseApi";

const aboutApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    editAbout: builder.mutation({
      query: (about) => ({
        url: "about/edit",
        body: about,
        method: "PUT",
      }),
    }),
  }),
});

export const { useEditAboutMutation } = aboutApi;
