# Base URL
http://localhost:3000/api

# Endpoints
## Product Management

## Create a new product
```
URL: /products
Method: POST
Request Body:
name (string, required): The name of the product.
description (string, required): The description of the product.
price (number, required): The price of the product.
quantity (number, required): The quantity of the product.
```
### Example Request

```POST /api/products
Content-Type: application/json

{
  "name": "Product 1",
  "description": "This is the first product",
  "price": 9.99,
  "quantity": 10
}
```
### Example Response
```
HTTP/1.1 201 Created
Content-Type: application/json

{
  "_id": "60dfc0a4e827a51e1c745fab",
  "name": "Product 1",
  "description": "This is the first product",
  "price": 9.99,
  "quantity": 10,
  "__v": 0
}
```
## Retrieve a list of all products
```
URL: /products
Method: GET
```

### Example Request
```
GET /api/products
```

### Example Response

```
HTTP/1.1 200 OK
Content-Type: application/json

[
  {
    "_id": "60dfc0a4e827a51e1c745fab",
    "name": "Product 1",
    "description": "This is the first product",
    "price": 9.99,
    "quantity": 10,
    "__v": 0
  },
  {
    "_id": "60dfc0bce827a51e1c745fac",
    "name": "Product 2",
    "description": "This is the second product",
    "price": 14.99,
    "quantity": 5,
    "__v": 0
  }
  // ... more products
]
```

## Retrieve details of a specific product
```
URL: /products/:id
Method: GET
URL Parameters:
id (string): The ID of the product.
```

### Example Request
```
GET /api/products/60dfc0a4e827a51e1c745fab
```

### Example Response

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "_id": "60dfc0a4e827a51e1c745fab",
  "name": "Product 1",
  "description": "This is the first product",
  "price": 9.99,
  "quantity": 10,
  "__v": 0
}
```

## Update the details of an existing product
```
URL: /products/:id
Method: PUT
URL Parameters:
id (string): The ID of the product.
Request Body:
name (string, required): The updated name of the product.
description (string, required): The updated description of the product.
price (number, required): The updated price of the product.
quantity (number, required): The updated quantity of the product.
```

### Example Request
```
PUT /api/products/60dfc0a4e827a51e1c745fab
Content-Type: application/json

{
  "name": "Updated Product 1",
  "description": "This is the updated first product",
  "price": 19.99,
  "quantity": 5
}
```

### Example Response

```
HTTP/1.1 200 OK
Content-Type: application/json

{
  "_id": "60dfc0a4e827a51e1c745fab",
  "name": "Updated Product 1",
  "description": "This is the updated first product",
  "price": 19.99,
  "quantity": 5,
  "__v": 0
}
```

## Delete a product
```
URL: /products/:id
Method: DELETE
URL Parameters:
id (string): The ID of the product.
```

### Example Request
```
DELETE /api/products/60dfc0a4e827a51e1c745fab
```

### Example Response
```
HTTP/1.1 204 No Content
```

# User API

## Create a new user
Create a new user with attributes like name, email, password, and address.
```
URL: /api/users
Method: POST
Authentication: Not required
```
```
Request Body:

{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "address": "123 Example Street"
}

Response:
Status Code: 201 (Created)
Body:
{
  "_id": "user-id",
  "name": "John Doe",
  "email": "john@example.com",
  "address": "123 Example Street"
}
```

## Retrieve a list of all users
```
Retrieve a list of all registered users.

URL: /api/users
Method: GET
Authentication: Not required
```
```
Response:
Status Code: 200 (OK)
Body:
[
  {
    "_id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "address": "123 Example Street"
  },
  {
    "_id": "another-user-id",
    "name": "Jane Smith",
    "email": "jane@example.com",
    "address": "456 Example Street"
  }
]
```

## Retrieve details of a specific user
```
URL: /api/users/:id
Method: GET
Authentication: Not required
Parameters:
id: The ID of the user
```
```
Response:
Status Code: 200 (OK)
Body:
{
  "_id": "user-id",
  "name": "John Doe",
  "email": "john@example.com",
  "address": "123 Example Street"
}
```

## Update the details of an existing user
```
URL: /api/users/:id
Method: PUT
Authentication: Required
Parameters:
id: The ID of the user
```
```
Request Body:
{
  "name": "Updated Name",
  "email": "updated@example.com",
  "address": "456 Updated Street"
}
Response:
Status Code: 200 (OK)
Body:
{
  "_id": "user-id",
  "name": "Updated Name",
  "email": "updated@example.com",
  "address": "456 Updated Street"
}
```

## Delete a user
```
URL: /api/users/:id
Method: DELETE
Authentication: Required
Parameters:
id: The ID of the user
Response:
Status Code: 204 (No Content)
```