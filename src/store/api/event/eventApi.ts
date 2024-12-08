import { baseApi } from "../baseApi";

const eventApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getEvents: build.query({
      query: () => "event/get",
    }),
    addEvent: build.mutation({
      query: (data) => ({
        url: "event/add",
        method: "POST",
        body: data,
      }),
    }),
    editEvent: build.mutation({
      query: (event) => {
        return {
          url: `event/edit/${event.id}`,
          body: event.data,
          method: "PUT",
        };
      },
    }),
    deleteEvent: build.mutation({
      query: (id) => ({
        url: `event/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddEventMutation,
  useDeleteEventMutation,
  useEditEventMutation,
  useGetEventsQuery,
} = eventApi;
