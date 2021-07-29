import useSWR, { mutate } from 'swr';
import axios from 'axios';

export default {
  getProjectById: (id) => useSWR(`/api/projects/${id}`),
  getProjects: () => useSWR(`/api/projects`),
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
};
