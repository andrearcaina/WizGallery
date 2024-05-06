<h1 align="center">
  <img src="client/public/images/logo.jpg" alt="logo" width="100%">
</h1>

<h2 align="center">WizGallery is...</h2>
<p align="center"><strong>a Flask application powered by Next.js, designed to showcase my collection of Wizard101 game photos sourced on Supabase. Utilized Docker to simplify testing, processing, and deploying the application locally.</strong></h4>

<pre align="center"> For any fellow Wizard101 Fans or OG's, try guessing the location of the logo above :P </pre>

<hr>

## Tech Stack + How it Works

[![TYPESCRIPT](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![NEXT.JS](https://img.shields.io/badge/NEXT-0769AD?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TAILWINDCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) \
The frontend is developed using `TypeScript` and the Next.js framework, with Tailwind CSS as the chosen `CSS` framework.

[![PYTHON](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)](https://www.python.org/)
[![FLASK](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)](https://flask.palletsprojects.com/en/3.0.x/)
[![POSTGRESQL](https://img.shields.io/badge/POSTGRESQL-14354C?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)
[![SUPABASE](https://shields.io/badge/supabase-black?logo=supabase&style=for-the-badge)](https://supabase.com/)\
The backend framework chosen for this project is Flask, a `Python`-based framework. In Flask, I create API endpoints to communicate with the frontend (the client).
These endpoints are designed for retrieving data from a PostgreSQL database structure, which was made using the MySQL Community Edition Server but then migrated to Supabase.
This entire process resembles a RESTful API, employing HTTP methods such as GET for querying the database, and then returning JSON objects to the client.

Here is a breakdown:

- The API is structured around resources, with each endpoint representing a specific resource or set of data
  - An example of an 'endpoint' from the server is `http://localhost:5000/api/data`, which returns data in JSON format to the client
  - For the Flask API to receive information from the client, the client would send a query parameter on top of the endpoint like: `http://localhost:5000/api/search?location='{location}'`.
- Flask provides an easy way to map HTTP methods with specific functions and decorators
  - An example is: `@app.route('api/data', methods=['GET'])`. This is a decorator to signify that at the endpoint `api/data`, there is data to retrieve from the database using the `GET` method
  - The returned output to the client of the data is a JSON object. Flask simplifies this by: `return jsonify(some_data)`
  - For more information check out [api/server.py](https://github.com/andrearcaina/WizGallery/blob/dev/backend/api/server.py)

[![GIT](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)](https://git-scm.com/)
[![DOCKER](https://img.shields.io/badge/DOCKER-0db7ed?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/) \
Git serves as the primary version control system for the project, enabling efficient tracking of code changes.
Docker, on the other hand, allows ease of access to local testing, processing, and deployment with containerization.
This ensures a seamless and reproducible environment.

<hr>

## Functionality

> WizGallery is a full-stack web application designed to showcase a collection of Wizard101 game photos taken by me (andrearcaina).
> The key functionalities include:

- The app allows users to view a personal collection of Wizard101 game photos
- The app allows users to view based on certain parameters (like photos from a certain world/location)

<hr>

## Future Updates/Ideas

Some updates/ideas to implement into WizGallery:

1. `Hosting`: Host it somewhere (maybe vercel)
2. `User photo submission`: Allow users to insert their own photos into the website
   - To implement this, can create a login and authentication page for security and personalization
   - The images processed need to be actual photos taken in Wizard101
3. `Photo showcase for users`: Allows users to check out their own photos that they uploaded
   - This is the main reason for the second point

<hr>

## Concepts learnt

- `Docker`: How to use, what it does, and containerization
- `API's`: How to use, what it does, and different structures
- `Fetch`: How to use, what it does, and what it can do
- `MySQL + PostgreSQL`: How to use and what it does, alongside creating queries
- `Supabase`: How to use and what it does
