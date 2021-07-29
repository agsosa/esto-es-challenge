/* Wrapper for useSWR to interact with our API */

import useSWR, { mutate } from 'swr';
import axios from 'axios';

export default {
  // Get a project by id
  getProjectById: (id) => useSWR(() => (id != null ? `/api/projects/${id}` : null)),

  // Get all projects by page and optional search term (project name)
  getProjects: (page = 1, search = "") => useSWR(`/api/projects?page=${page}&&search=${search}`),

  // Get the list of persons
  getPersons: () => useSWR(`/api/persons`),

  // Delete a project by id
  deleteProject: (id) =>
    new Promise((resolve) => {
      axios
        .delete(`/api/projects/${id}`)
        .then((result) => {
          if (!result.error) {
            mutate('/api/projects');
            resolve(true);
          } else resolve(false);
        })
        .catch((err) => resolve(false));
    }),

  // Create a project
  createProject: (data) =>
    new Promise((resolve) => {
      axios
        .post(`/api/projects`, data)
        .then((result) => {
          if (!result.error) {
            mutate('/api/projects');
            resolve(true);
          } else resolve(false);
        })
        .catch((err) => resolve(false));
    }),

  // Update a project
  updateProject: (data) =>
    new Promise((resolve) => {
      axios
        .patch(`/api/projects/${data.id}`, data)
        .then((result) => {
          if (!result.error) {
            mutate(`/api/projects/${data.id}`);
            resolve(true);
          } else resolve(false);
        })
        .catch((err) => { console.log(err); resolve(false)});
    }),
};
