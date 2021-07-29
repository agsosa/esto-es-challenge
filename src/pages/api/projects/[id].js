// Fake projects API

import DB from '../fake_db';

const getProjectById = (id) => {
  id = Number(id);
  if (Number.isNaN(id)) return null;

  return DB.projects[id];
};

// GET /project/:id
const handleGetRequest = (req, res) => {
  const found = getProjectById(req.query.id);
  if (!found || found.deletedAt) return res.status(400).json({ error: true, message: 'Invalid project ID' });

  res.status(200).json({ error: false, result: found });
};

// DELETE /project/:id
const handleDeleteRequest = (req, res) => {
  const found = getProjectById(req.query.id);
  if (!found) return res.status(400).json({ error: true, message: 'Invalid project ID' });

  found.deletedAt = new Date();

  res.status(200).json({ error: false, result: found });
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    handleGetRequest(req, res);
  } else if (req.method === 'DELETE') {
    handleDeleteRequest(req, res);
  } else res.status(405).json({ error: true, message: 'Method not allowed' });
}
