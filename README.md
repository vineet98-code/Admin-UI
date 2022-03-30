# ADMIN UI PROJECT

An interface for Admin users to see, edit and delete users. The users will be provided via an API.

## Endpoints Routes Reference

#### Get all users

```http
  GET http://localhost:5000/users
```

#### Pagination - Use \_page and optionally \_limit to paginate returned data.

```http
  GET http://localhost:5000/users?_page=4
  GET http://localhost:5000/users?_page=4limit=20

```

#### Filter

```http
  GET http://localhost:5000/users?id=1
  GET http://localhost:5000/users?name=Mikhail Bill
  GET http://localhost:5000/users?email=ozgur@mailinator.com
  GET http://localhost:5000/users?role=admin
  GET http://localhost:5000/users?role=member

```

#### Slice - Add \_start and \_end or \_limit

```http
  GET http://localhost:5000/users?_start=20&_end=30
```

#### Database

```http
  GET http://localhost:5000/db
```

## Authors

- [@vineet98-code](https://github.com/vineet98-code)

## Run Locally

Clone the project

```bash
  git clone git@github.com:vineet98-code/Admin-ui.git
```

Navigate to the project

```bash
  cd .\Admin-ui\
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run both
```

view client in the browser

Local: http://localhost:3000

## Features

- Edit/Delete Button
- Pagination
- Search By Name Email & Role
- Export file

## 🚀 About Me

I’m actively looking for a Full Stack / Front End Developers Role.
I’m currently learning and upgrading my skills in web development & mobile development.
Love to work with ReactJS and ExpressJS.

## Tech Stack

**Client:** React, Material UI

**Server:** json-server
