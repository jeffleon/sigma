# Quick project ⚡️
## API rest
Api rest for login sigma page this page run in port 8000
# views allowed to check CRUD
    - /users/
    - /users/create
    - /users/:id/update
# API rest endpoints allowed
    - DOCUMENTATION /api/users/api-docs
    - GET /api/users
    - GET /api/users/:id
    - POST /api/users/
    - DELETE /api/users/:id
    - PUT /api/users/:id

### pre-requisite
Before starting, it is important to consider the following programs in order to execute the project
  - Git
  - Node


# start 🚀
To be able to run the application and use it in a local development environment you can follow
the following steps:

Clone the repository to have the local project:
```
git clone https://github.com/jeffleon/sigma.git
```
Before to start you need to install the dependecies
```
go inside two folders and install dependencies
```
cd sigma
```
npm install
```
cd ..
```
cd sigma api
``` 
npm install
```
if database "users.sqlite3" doesn't exist for some reason do the migration for created again in sigma api go inside the folder and do the migration
```
cd sigma api
```
node_modules/.bin/sequelize db:migrate
```
# run aplications
    - for API
        - go inside the folder as mention in before steps 
        - then run "npm start"
    - React app
        - go inside the folder as mention in before steps 
        - then run "yarn start"
### Built with 🛠️
The core language used to develop the application is
- Node.js - 12.16.1

The libraries that will be used to develop the application are:
- yamljs
- react-redux-forms
- Swagger for API documentation
- sqlite3

Frameworks:
- Express
- React


### authors 🗒
- Jefferson Alexander Leon Back-end

