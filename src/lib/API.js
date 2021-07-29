import useSWR, { mutate } from 'swr';
import axios from 'axios';

export default {
  getProjectById: (id) => useSWR(() => (id != null ? `/api/projects/${id}` : null)),
  getProjects: () => useSWR(`/api/projects`),
  getPersons: () => useSWR(`/api/persons`),
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
