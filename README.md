<h1 align="center">Petful Server</h1>
<h3 align="center">A back-end server that returns information regarding pets to be adopted</h3>

<p align="center">
<img alt="GitHub language count" src="https://img.shields.io/github/languages/count/aniledev/petful-server">
<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/aniledev/petful-server">
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/aniledev/petful-server">
<img alt="GitHub repo size in bytes" src="https://img.shields.io/github/repo-size/aniledev/petful-server">
<img alt="GitHub issues" src="https://img.shields.io/github/issues/aniledev/petful-server?color=red">
<img alt="GitHub closed issues" src="https://img.shields.io/github/issues-closed/aniledev/petful-server?color=blueviolet">
</p>

## Contents

<details open="open">
  <summary>Contents</summary>
  <ol>
    <li><a href="#application-summary">Application Summary</a></li>
    <li><a href="#api-documentation">API Documentation</a></li>
    <li><a href="#local-dev-setup">Local Dev Setup</a></li>
    <li><a href="#configuring-postgresql">Configuring PostgreSQL</a></li>
    <li><a href="#scripts">Scripts</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#technical-aspects">Technical Aspects</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
    <li><a href="#connect-with-me">Connect With Me</a></li>
  </ol>
</details>

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
