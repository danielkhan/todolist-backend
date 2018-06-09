This exists purely for demonstration- and training-purposes.

# Installation

1. Clone the repository
2. Run `npm install`
3. Run `npm test`
4. Run `npm start`

# Exercise
Implement a backend for a todo list using this template.

## General Requirements
* The todo-list should support [multiple-tenants](https://en.wikipedia.org/wiki/Multitenancy) (Userregistration and JWT authentication are already included)
* All APIs need to be documented and testable using swagger (swagger parser and UI already included)
* All API methods need to do some basic sanity checks for the user inputs and should return an error 400 for invalid date

## Data Model
A todo list item consists of the following fields. 
* `task`: The task that needs to be done
* `duedate`: The due date
* `priority`: The priority (numeric, like 1 to 10)
* `done`: To be set when the task is done
* `user_id`: The id of the user the item was created for
* Mongoose fields createdAt and updatedAt

## API Methods
* `POST /api/v1/todo`: Creates a new item and returns it in a fields `data` with HTTP status 201
* `PUT /api/v1/todo/{todoId}`: Updates an item and returns it in a field `data` with HTTP status 202
* `DELETE /api/v1/todo/{todoId}`: Deletes an item and returns `{data: 'ok'}` with HTTP status 202
* `GET /api/v1/todo/`: Returns all items sorted by priority (and ideally also by date of creation) with HTTP status 200
* `PUT /api/v1/todo/{todoId}/done`: Marks an item as done and returns it in a fields `data` with HTTP status 202

## Voluntary Extra Task
* Create tests for all /api/v1/todo routes

# Submission
Please upload a ZIP archive _without_ node_modules