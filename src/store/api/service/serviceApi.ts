import { baseApi } from "../baseApi";

const serviceApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getServices: build.query({
      query: () => "service/get",
    }),
    addService: build.mutation({
      query: (data) => ({
        url: "service/add",
        method: "POST",
        body: data,
      }),
    }),
    editService: build.mutation({
      query: (service) => {
        return {
          url: `service/edit/${service.id}`,
          body: service.data,
          method: "PUT",
        };
      },
    }),
    deleteService: build.mutation({
      query: (id) => ({
        url: `service/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetServicesQuery,
  useAddServiceMutation,
  useEditServiceMutation,
  useDeleteServiceMutation,
} = serviceApi;
