// Fake DB to simulate a projects API

import faker from 'faker';

const PROJECT_NAMES = [
  'Landing page',
  'E-Commerce Shop',
  'CRM Linkroom',
  'Mobile Game',
  'Social Network',
  'Admin dashboard',
  'Portfolio',
  'Management App',
];

const DB = {
  projects: [],
  persons: [],
};

export default DB;

const getRandomElement = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const seed = () => {
  if (DB.projects.length > 0) return;
  
  // Create fake persons
  for (let i = 0; i < 20; i++) {
    DB.persons.push({
      id: i,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    });
  }

  // Create fake projects
  for (let i = 0; i < 100; i++) {
    DB.projects.push({
      id: i,
      projectName: getRandomElement(PROJECT_NAMES),
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      manager: getRandomElement(DB.persons),
      assignee: getRandomElement(DB.persons),
      status: Math.random() < 0.5,
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent(),
    });
  }
};

seed();
