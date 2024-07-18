# BookAPI

This project implements a RESTful API for managing book records. It utilizes Express.js and Sequelize, with SQLite as the database.

## Installation

To get started, clone the repository:

```bash
git clone https://github.com/edabeyza/BookAPI.git
```
Install the necessary packages:

```bash
npm i express dotenv express-async-errors sequelize sqlite3
```

### Package Descriptions

**express:** Web framework for Node.js, providing easy-to-use routing and middleware.
<br>**dotenv:** Loads environment variables from a .env file into process.env.
<br>**express-async-errors:** Simplifies error handling for async/await functions in Express.js.
<br>**sequelize:** Promise-based Node.js ORM for SQL databases, offering data modeling and CRUD operations.
<br>**sqlite3:** SQLite driver for Sequelize, allowing interaction with SQLite databases.

## Environment Variables

Ensure you have an .env file in the project directory with the following configurations:

```env
PORT=8000
SQLITE=/.db.sqlite3
```
## Database Setup

To create the database table, you need to execute the following command in the models/book.js file:

```javascript
// Run sequelize.sync() to synchronize the model with the database
sequelize.sync();
```
This command synchronizes the defined Sequelize model (Book) with your database schema, ensuring the table structure matches your model definitions.

## Running the Server

Start the server with the following command:

```bash
nodemon
```

The server will run on the port specified in the `.env` file (default is 8000).

## API Endpoints

### To Create a Book

```http
POST /api/book
```

#### Request Body

```json
{
  "title": "Hobbit",
  "author": "J.R.R. Tolkien",
  "ISBN": "9789752733732",
  "genre": "Fantasy Fiction",
  "publicationYear": "1937",
  "image": "www.example.com/Books/Hobbit.jpg"
}
```

### To Get All Books

```http
GET /api/book
```

### To Get a Single Book

```http
GET /api/book/:id
```

### To Update a Book

```http
PUT /api/book/:id
```

#### Request Body

```json
{
  "title": "Hobbit",
  "author": "J.R.R. Tolkien",
  "ISBN": "9789752733732",
  "genre": "Fantasy Fiction",
  "publicationYear": "1937",
  "image": "www.example.com/Books/Hobbit.jpg"
}
```

### Delete a Book

```http
DELETE /api/book/:id
```
