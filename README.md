# MovieSphere Web Application

Welcome to MovieSphere! This is a web application where users can explore a collection of movies, view details about each movie, sign up, log in, and manage their profiles.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Setup](#setup)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [License](#license)

## Introduction

MovieSphere is a React-based web application that allows users to browse through a curated collection of movies. Users can register for an account, log in, view details about each movie, and update their profiles.

## Features

- **User Authentication**: Users can sign up for an account or log in if they already have one.
- **Movie Browsing**: Users can explore a list of movies with their details like title, genre, description, and director.
- **Movie Details**: Users can view detailed information about each movie by clicking on it.
- **Profile Management**: Registered users can manage their profiles, including updating personal information.

## Setup

1. Clone this repository to your local machine.
2. Install the necessary dependencies using `npm install`.
3. Run the application using `npm start`.
4. Open your browser and navigate to `http://localhost:3000` to access MovieSphere.

## Dependencies

- React: JavaScript library for building user interfaces.
- React Router DOM: Declarative routing for React applications.
- React Bootstrap: Bootstrap components built with React.
- Heroku: Cloud application platform for deployment.

## Tech Stack

Outline the technologies and frameworks used in your project.

- Frontend: React, Bootstrap
- Backend: Node.js, Express, MongoDB
- Authentication: JWT (JSON Web Tokens)
- Database: Mongo DB Atlas

## Usage

1. **Sign Up or Log In**: If you are a new user, sign up for an account using the provided form. If you already have an account, log in using your credentials.
2. **Browse Movies**: Explore the list of available movies on the home page. Click on a movie card to view its details.
3. **View Movie Details**: Click on a movie card to view detailed information about that movie, including its title, genre, description, and director.
4. **Manage Profile**: Registered users can access their profile page to update personal information such as username, password, and email.

## API Endpoints

User Endpoints:

- GET /users: Get a list of all users (requires authentication)
- GET /users/:Username: Get user information by username (requires authentication)
- PUT /users/:Username: Update user information (requires authentication)
- DELETE /users/:Username: Delete a user account (requires authentication)

Movie Endpoints:

- GET /movies: Get a list of all movies (requires authentication)
- GET /movies/:Title: Get movie details by title (requires authentication)
- GET /movies/genres/:genreName: Get movies by genre (requires authentication)
- GET /movies/directors/:directorName: Get movies by director (requires authentication)

Favorite Movies Endpoints:

- POST /users/:Username/movies/:MovieID: Add a movie to a user's list of favorites (requires authentication)
- DELETE /users/:Username/movies/:MovieID: Remove a movie from a user's list of favorites (requires authentication)
