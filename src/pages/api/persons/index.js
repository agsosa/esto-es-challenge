// Fake projects API

import DB from '../fake_db';

const LIMIT_PER_PAGE = 30;

// GET /api/persons
const handleGetRequest = (req, res) => {
  const page = Number.parseInt(req.query.page) || 1;

  const filtered = DB.persons.filter((q) => !q.deletedAt);
  const totalPages = Math.max(Math.floor(filtered.length / LIMIT_PER_PAGE), 1);

  if (page <= 0 || page > totalPages)
    return res.status(403).json({ error: true, message: `Page must be between 1 and ${totalPages}` });

  const paginated = filtered.slice((page - 1) * LIMIT_PER_PAGE, page * LIMIT_PER_PAGE);

  res.status(200).json({
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
  else res.status(405).json({ error: true, message: 'Method not allowed' });
}
