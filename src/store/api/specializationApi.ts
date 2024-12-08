import { baseApi } from "./baseApi";

const specializationApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getSpecializations: builder.query({
      query: () => "specialization/get",
    }),
    addSpecialization: builder.mutation({
      query: (specialization) => ({
        url: "specialization/add",
        method: "POST",
        body: specialization,
      }),
    }),
    editSpecialization: builder.mutation({
      query: (specialization) => {
        return {
          url: `specialization/edit/${specialization.id}`,
          body: specialization.data,
          method: "PUT",
        };
      },
    }),
    deleteSpecialization: builder.mutation({
      query: (id) => ({
        url: `specialization/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetSpecializationsQuery,
  useAddSpecializationMutation,
  useDeleteSpecializationMutation,
  useEditSpecializationMutation,
} = specializationApi;
