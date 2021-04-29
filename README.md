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
    <li><a href="#scripts">Scripts</a></li>
    <li><a href="#built-with">Built With</a></li>
    <li><a href="#technical-aspects">Technical Aspects</a></li>
    <li><a href="#deployment">Deployment</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
    <li><a href="#connect-with-me">Connect With Me</a></li>
  </ol>
</details>

## Application Summary

This backend server is to be used with the aniledev/petful-client and provides support for the First In First Out pet adoption client. This repo directory is organized by source files, files related to the /api/cats endpoint, the /api/dogs endpoint, and the /api/people endpoint.

Each endpoint uses the express.Router class to create modularized route handlers. Additionally, the routers make use of a service to easily preform actions using the queue data structure.

## API Documentation

Full API documentation can be found on Postman. See the complete documentation for endpoint descriptions, example request snippets, and example response snippets in various formats.

### Endpoints

#### Cats

`GET /api/cats`<br/>
`DELETE /api/cats`

#### Dogs

`GET /api/dogs`<br/>
`DELETE /api/dogs`

#### People

`GET /api/people`<br/>
`POST /api/people`<br/>
**This endpoint requires a request body in the form of const { name } = req.body.**
`DELETE /api/people`

### Status Codes

The API here returns the following status codes:

| Status Code | Description           |
| ----------- | --------------------- |
| 200         | Ok                    |
| 201         | Created               |
| 404         | Bad Request           |
| 400         | Not Found             |
| 500         | Internal Server Error |

## Scripts

Start the application `npm run start`

Start nodemon for the application `npm run dev`

Run the tests `npm run test`

## Built With

<p align="left"> <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://heroku.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a> <a href="https://postman.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> </p>

## Technical Aspects

- [cors](https://www.npmjs.com/package/cors)
- [helmet](https://www.npmjs.com/package/helmet)
- [morgan](https://www.npmjs.com/package/morgan)

## Deployment

View the client repo [here](https://github.com/aniledev/petful-client). The live api is hosted on [Heroku](https://fifo-pet-server.herokuapp.com/). The live client is hosted with [Vercel](https://petful-omega.vercel.app/).

## Acknowledgements

- [Font Awesome](https://fontawesome.com)
- [Thinkful Coding Bootcamp](https://www.thinkful.com/)

## Connect With Me

🔭 I’m currently working on **mastering data structures and complex algorithms.**

🌱 I’m currently learning **the fundamentals of Angular.**

🤝 I’m looking for help with **networking as a new dev in the community.**

👨‍💻 All of my projects are available [here](https://aniledev.github.io/dev-portfolio/)

💬 Ask me about **the ease of the PERN stack.**

📫 The best way to reach me is by email: **elinamcgill@gmail.com**

📄 Check out [my resume of experiences](https://docs.google.com/document/d/1bxScP6d6Olv4QE5icvVSBI9L2EXfiZyZ2j2SDJhkoes/edit?usp=sharing)

⚡ Fun fact **Hiatus Kaiyote is my favorite band at the moment.**

<p align="left">
<a href="https://linkedin.com/in/elina-mcgill" target="blank"><img align="center" src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg" alt="elina-mcgill" height="30" width="40" /></a>
</p>

