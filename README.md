# Mtree Assignment API

This is a REST API made with nodejs . It is a simple Todo API that performs basic CRUD operations i.e Create, Read, Update and Delete helping users to keep track of daily tasks . It has features like user authentication through JWT.

These are the following routes
### For users

- /users-POST-Create user
- /users/login-POST-Login users
- /user/logout-POST-Logout users
- /users/logoutAll-POST-Logout Users removing all tokens
- /users/me-GET-Fetch User Profile
- /users/me-DELETE-Remove Account of Users

### For note

- /notes-POST-Fetching notes form User
- /notes-GET-Fetch all the completed notes of the current user
- /notes/:id-GET-Fetch particular Note of the current user
- /notes/:id-PATCH-Small update Particular note
- /notes/:id-DELETE-Delete a particular note

## Prerequisites

- NodeJS
- Npm
- Postman - [Installing Postman](https://www.getpostman.com/)
- MongoDB - [Installing MongoDB](https://www.mongodb.com/download-center/community)

## Local Installation

Clone the project

```sh
git clone https://github.com/bhanu812/mtree-assignment.git
cd mtree-assignment
```

Installing node modules (dependencies)

```sh
npm install
```
Making environment file

**Make an environment file in the config directory named as dev.env similar to example.dev.env**

Running the project (development)

```sh
npm run dev
```

Now you can open the project on `localhost:3000`
