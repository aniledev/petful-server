# Petful Server

## Application Summary

This backend server is to be used with the petful-client and provides support for the First In First Out pet adoption client. This repo directory is organizes by source files, files related to the /api/cats endpoint, the /api/dogs endpoint, and the /api/people endpoint.

Each endpoint uses the express.Router class to create modularized route handlers. Additionally, the routers make use of a service to easily preform actions using the queue data structure.

## User Stories 


## Technology Used
- Express
- cors
- helmet
- morgan

## Endpoints

### Cats
```GET /api/cats```<br/>
```DELETE /api/cats```

### Dogs
```GET /api/dogs```<br/>
```DELETE /api/dogs```

### People
```GET /api/people```<br/>
```POST /api/people```<br/>
```DELETE /api/people```

## Status Codes
The API here returns the following status codes:

| Status Code  | Description |
| ------------- | ------------- |
| 200  | Ok  |
| 201  | Created  |
| 404  | Bad Request  |
| 400  | Not Found  |
| 500  | Internal Server Error  |

## Scripts

Start the application `npm start`

Start nodemon for the application `npm run dev`

Run the tests `npm test`