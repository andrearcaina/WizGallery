<h1 align="center">
  <img src="frontend/public/logo.jpg" alt="logo" width="100%">
</h1>

<h2 align="center">WizGallery is...</h2>
<p align="center">a Flask application powered by Next.js, designed to showcase my collection of Wizard101 game photos sourced from a local MySQL database. Utilized Docker to simplify testing, processing, and deploying the application locally.</h4>

<pre align="center"> For any fellow Wizard101 Fans or OG's, try guessing the location of the logo above :P </pre>

<hr>

## Tech Stack + Languages

[![JAVASCRIPT](https://img.shields.io/badge/javascript-101010?style=for-the-badge&logo=javascript&logoColor=ffdd54)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![NEXT.JS](https://img.shields.io/badge/NEXT-0769AD?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/) 
[![TAILWINDCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) \
The frontend is developed using `JavaScript` and the Next.js framework, with Tailwind CSS as the chosen `CSS` framework.

[![PYTHON](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)](https://www.python.org/)
[![FLASK](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/en/3.0.x/) 
[![MYSQL](https://img.shields.io/badge/MYSQL-14354C?style=for-the-badge&logo=mysql&logoColor=white)](https://www.mysql.com/) \
The backend framework chosen for this project is Flask, a `Python`-based framework. In Flask, I create API endpoints to communicate with the frontend (the client). 
These endpoints are designed for retrieving data from a MySQL database structure, which was made using the MySQL Community Edition Server (from their website).
This entire process resembles a RESTful API, employing HTTP methods such as GET for querying the database, and then returning JSON objects to the client.

Here is a breakdown:
- The API is structured around resources, with each endpoint representing a specific resource or set of data
  - An example of an 'endpoint' from the server is `http://localhost:5000/api/data`, which returns data in JSON format to the client
  - For the Flask API to receive information from the client, the client would send a query parameter on top of the endpoint like: `http://localhost:5000/api/search?location='{location}'`.
- Flask provides an easy way to map HTTP methods with specific functions and decorators
  - An example is: `@app.route('api/data', methods=['GET'])`. This is a decorator to signify that at the endpoint `api/data`, there is data to retrieve from the database using the `GET` method  
  - The returned output to the client of the data is a JSON object. Flask simplifies this by: `return jsonify(some_data)`
  - For more information check out [api/server.py](https://github.com/andrearcaina/WizGallery/blob/main/backend/api/server.py)

[![GIT](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/) 
[![DOCKER](https://img.shields.io/badge/DOCKER-0db7ed?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/) \
Git serves as the primary version control system for the project, enabling efficient tracking of code changes. 
Docker, on the other hand, allows ease of access to local testing, processing, and deployment with containerization. 
This ensures a seamless and reproducible environment.

<hr>

## Functionality

**Coming Soon!**

## How To Use

To clone and run this application, you'll need: 
* [Git](https://git-scm.com)
* [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com))
* [Python](https://www.python.org/downloads/)
* [Virtual Environment](https://flask.palletsprojects.com/en/3.0.x/installation/)
* [Docker](https://www.docker.com/)

**Coming soon!**
