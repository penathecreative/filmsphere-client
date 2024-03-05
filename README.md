# Filmsphere App

Welcome to the Filmshpere Movie App project! This is a full-stack web application for exploring and managing your favorite movies.

## Overview

Filmshpere is a web application that allows users to explore a collection of movies, manage their favorite movies, and update their user profile.

## Features

List the key features of your movie app. For example:

- Browse a list of movies
- View detailed information about each movie
- Add movies to your favorites
- User authentication and authorization
- ...

## Tech Stack

Outline the technologies and frameworks used in your project.

- Frontend: React, Bootstrap
- Backend: Node.js, Express, MongoDB
- Authentication: JWT (JSON Web Tokens)
- Database: Mongo DB Atlas

## Setup

Provide instructions on how to set up the development environment. For example:

1. Clone the repository:
   ```bash
   git clone https://github.com/penathecreative/movie-app.git
   cd movie-app
   ```

API Endpoints
User Endpoints:

GET /users: Get a list of all users (requires authentication)
GET /users/:Username: Get user information by username (requires authentication)
PUT /users/:Username: Update user information (requires authentication)
DELETE /users/:Username: Delete a user account (requires authentication)
Movie Endpoints:

GET /movies: Get a list of all movies (requires authentication)
GET /movies/:Title: Get movie details by title (requires authentication)
GET /movies/genres/:genreName: Get movies by genre (requires authentication)
GET /movies/directors/:directorName: Get movies by director (requires authentication)
Favorite Movies Endpoints:

POST /users/:Username/movies/:MovieID: Add a movie to a user's list of favorites (requires authentication)
DELETE /users/:Username/movies/:MovieID: Remove a movie from a user's list of favorites (requires authentication)
