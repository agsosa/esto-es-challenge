// Fake projects API

import DB from '../fake_db';

const LIMIT_PER_PAGE = 7;

// POST /api/projects
const handlePostRequest = (req, res) => {
  let { projectName, description, assigneeId, managerId, status } = req.body;

  assigneeId = Number.parseInt(assigneeId);
  managerId = Number.parseInt(managerId);

  // Validate input
  if (!projectName || !description || Number.isNaN(assigneeId) || Number.isNaN(managerId) || status == null)
    return res.status(400).send({ error: true, message: 'Invalid params' });

  if (!DB.persons[assigneeId]) return res.status(400).send({ error: true, message: 'Invalid assigneeId' });
  if (!DB.persons[managerId]) return res.status(400).send({ error: true, message: 'Invalid managerId' });

  const assignee = DB.persons[assigneeId];
  const manager = DB.persons[managerId];

  const result = {
    id: DB.projects.length,
    projectName,
    description,
    assignee,
    manager,
    status,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  DB.projects.push(result);

  res.status(201).json({ error: false, result });
};

// GET /api/projects
const handleGetRequest = (req, res) => {
  const page = Number.parseInt(req.query.page) || 1;
  const search = req.query.search || "";

  // Filter projects by deletedAt, projectName and sort by createdAt date
  const filtered = DB.projects.filter((q) => !q.deletedAt && q.projectName.toLowerCase().startsWith(search.toLowerCase())).sort((a, b) => b.createdAt - a.createdAt);

  const totalPages = Math.max(Math.floor(filtered.length / LIMIT_PER_PAGE), 1);
  
  if (page <= 0 || page > totalPages) return res.status(403).json({error: true, message: `Page must be between 1 and ${totalPages}`})

  // Limit projects by page
  const paginated = filtered.slice((page - 1) * LIMIT_PER_PAGE, page * LIMIT_PER_PAGE);

  res
    .status(200)
    .json({
      error: false,
      result: {
        total: filtered.length,
        page,
        totalPages,
        limitPerPage: LIMIT_PER_PAGE,
        list: paginated,
      },
    });
};

export default function handler(req, res) {
  if (req.method === 'GET') handleGetRequest(req, res);
  else if (req.method === 'POST') {
    handlePostRequest(req, res);
  } else res.status(405).json({ error: true, message: 'Method not allowed' });
}
