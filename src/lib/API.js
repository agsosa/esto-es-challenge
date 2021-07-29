import useSWR, { mutate } from 'swr';

export default {
  getProjectById: (id) => useSWR(`/api/projects/${id}`),
  getProjects: () => useSWR(`/api/projects`),
};
