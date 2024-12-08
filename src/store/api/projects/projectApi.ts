import { baseApi } from "../baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProjects: builder.query({
      query: () => "project/getProjects",
    }),
    addProject: builder.mutation({
      query: (project) => ({
        url: "project/add",
        method: "POST",
        body: project,
      }),
    }),
    editProject: builder.mutation({
      query: (project) => {
        console.log(project);
        return {
          url: `project/edit/${project.id}`,
          method: "PUT",
          body: project.data,
        };
      },
    }),
    deleteProject: builder.mutation({
      query: (id) => {
        return {
          url: `project/delete/${id}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useAddProjectMutation,
  useGetProjectsQuery,
  useDeleteProjectMutation,
  useEditProjectMutation,
} = projectApi;
