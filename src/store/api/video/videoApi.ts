import { baseApi } from "../baseApi";

const videoApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getVideos: build.query({
      query: () => "video/getVideos",
    }),
    addVideo: build.mutation({
      query: (data) => ({
        url: "video/add",
        method: "POST",
        body: data,
      }),
    }),
    editVideo: build.mutation({
      query: (video) => {
        return {
          url: `video/edit/${video.id}`,
          body: video.data,
          method: "PUT",
        };
      },
    }),
    deleteVideo: build.mutation({
      query: (id) => ({
        url: `video/delete/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddVideoMutation,
  useDeleteVideoMutation,
  useEditVideoMutation,
  useGetVideosQuery,
} = videoApi;
