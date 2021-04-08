# Petful Server

Client Repo:
API Repo:
Live API hosted on Heroku: https://fifo-pet-server.herokuapp.com/

## Application Summary

This backend server is to be used with the aniledev/petful-client and provides support for the First In First Out pet adoption client. This repo directory is organized by source files, files related to the /api/cats endpoint, the /api/dogs endpoint, and the /api/people endpoint.

Each endpoint uses the express.Router class to create modularized route handlers. Additionally, the routers make use of a service to easily preform actions using the queue data structure.

## Technology Used

- Express
- Heroku
- cors
- helmet
- morgan

## Endpoints

### Cats

`GET /api/cats`<br/>
`DELETE /api/cats`

### Dogs

`GET /api/dogs`<br/>
`DELETE /api/dogs`

### People

`GET /api/people`<br/>
`POST /api/people`<br/>
**This endpoint requires a request body in the form of const { name } = req.body.**
`DELETE /api/people`

## Status Codes

The API here returns the following status codes:

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | Ok                    |
| 201         | Created               |
| 404         | Bad Request           |
| 400         | Not Found             |
| 500         | Internal Server Error |

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`
