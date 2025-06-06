# COMP229 – Portfolio Application (Backend)

This is the backend API for the Portfolio Web Application built using Node.js, Express, and MongoDB.

## Features

- RESTful API for `contacts` and `users`
- Full CRUD operations
- MongoDB connection via Mongoose
- `.env` file for configuration (excluded from GitHub)

## Routes

### Contacts
- `GET /api/contacts`
- `GET /api/contacts/:id`
- `POST /api/contacts`
- `PUT /api/contacts/:id`
- `DELETE /api/contacts/:id`
- `DELETE /api/contacts`

### Users
- `GET /api/users`
- `GET /api/users/:id`
- `POST /api/users`
- `PUT /api/users/:id`
- `DELETE /api/users/:id`
- `DELETE /api/users`

## Getting Started

```bash
npm install
npm start

