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
