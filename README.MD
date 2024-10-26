# TODO APP

This is a simple todo app that allows you to add, delete and mark tasks as done.

## Installation

After cloning the repository, you can run the following command to install the dependencies:

### For API

Todo API is a simple REST API that allows you to manage your tasks.
This API is built using Ruby on Rails.

```bash
cd todo-api

bundle install

rails db:migrate

rails s
```

API will be running on `http://localhost:3001`

### For Web

Todo Web is a simple web application that allows you to manage your tasks.
This web application is built using React.

```bash
cd todo-web

yarn install

yarn start
```

Web application will be running on `http://localhost:3000`
