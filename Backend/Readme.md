# Backend API Documentation

## User Endpoints

### `/users/register` Endpoint

#### Description

Registers a new user by creating a user account with the provided information.

#### HTTP Method

`POST`

#### Request Body

The request body should be in JSON format and include the following fields:

- `fullName` (object):
  - `firstName` (string, required): User's first name (minimum 3 characters).
  - `lastName` (string, optional): User's last name (minimum 3 characters).
- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

```json
{
  "email": "hardik@gmail.com",
  "fullName": {
    "firstName": "Hardik",
    "lastName": "Devaliya"
  },
  "password": "hardik"
}
```

#### Example Response

- `user` (object):
  - `fullName` (object):
    - `firstName` (string): User's first name.
    - `lastName` (string): User's last name.
  - `email` (string): User's email address.
  - `_id` (string): User's ID.
  - `__v` (number): Version.
- `token` (string): JWT Token

```json
{
  "user": {
    "fullName": {
      "firstName": "Hardik",
      "lastName": "Devaliya"
    },
    "email": "hardik@gmail.com",
    "_id": "69d8b08f3ce9b4ae3e7c58f5",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### `/users/login` Endpoint

#### Description

Authenticates a user using their email and password, returning a JWT token upon successful login.

#### HTTP Method

`POST`

#### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): User's email address (must be a valid email).
- `password` (string, required): User's password (minimum 6 characters).

```json
{
  "email": "hardik@gmail.com",
  "password": "hardik"
}
```

#### Example Response

- `user` (object):
  - `fullName` (object):
    - `firstName` (string): User's first name.
    - `lastName` (string): User's last name.
  - `email` (string): User's email address.
  - `_id` (string): User's ID.
  - `__v` (number): Version.
- `token` (string): JWT Token

```json
{
  "user": {
    "fullName": {
      "firstName": "Hardik",
      "lastName": "Devaliya"
    },
    "email": "hardik@gmail.com",
    "_id": "69d8b08f3ce9b4ae3e7c58f5",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### `/users/profile` Endpoint

#### Description

Retrieves the profile information of the currently authenticated user.

#### HTTP Method

`GET`

#### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

#### Example Response

- `user` (object):
  - `fullName` (object):
    - `firstName` (string): User's first name.
    - `lastName` (string): User's last name.
  - `email` (string): User's email address.
  - `_id` (string): User's ID.
  - `__v` (number): Version.

### `/users/logout` Endpoint

#### Description

Logs out the current user and blacklists the token provided in the Authorization header.

#### HTTP Method

`GET`

#### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

#### Example Response

```json
{
  "message": "Logout User"
}
```

## Captain Endpoints

### `/captains/register` Endpoint

#### Description

Registers a new captain by creating a captain account with the provided information.

#### HTTP Method

`POST`

#### Request Body

The request body should be in JSON format and include the following fields:

- `fullName` (object):
  - `firstName` (string, required): Captain's first name (minimum 3 characters).
  - `lastName` (string, optional): Captain's last name (minimum 3 characters).
- `email` (string, required): Captain's email address (must be a valid email).
- `password` (string, required): Captain's password (minimum 6 characters).
- `vehicle` (object):
  - `color` (string, required): Vehicle color (minimum 3 characters).
  - `plate` (string, required): Vehicle plate number (minimum 3 characters).
  - `capacity` (number, required): Vehicle capacity (minimum 1).
  - `vehicleType` (string, required): Vehicle type (one of: "car", "motorcycle", "auto", "carXL").

```json
{
  "email": "captain@gmail.com",
  "fullName": {
    "firstName": "Captain",
    "lastName": "One"
  },
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

#### Example Response

- `captain` (object):
  - `fullName` (object):
    - `firstName` (string): Captain's first name.
    - `lastName` (string): Captain's last name.
  - `email` (string): Captain's email address.
  - `vehicle` (object): Vehicle details.
  - `_id` (string): Captain's ID.
  - `__v` (number): Version.
- `token` (string): JWT Token

```json
{
  "captain": {
    "fullName": {
      "firstName": "Captain",
      "lastName": "One"
    },
    "email": "captain@gmail.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "_id": "69d8b08f3ce9b4ae3e7c58f6",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### `/captains/login` Endpoint

#### Description

Authenticates a captain using their email and password, returning a JWT token upon successful login.

#### HTTP Method

`POST`

#### Request Body

The request body should be in JSON format and include the following fields:

- `email` (string, required): Captain's email address (must be a valid email).
- `password` (string, required): Captain's password (minimum 6 characters).

```json
{
  "email": "captain@gmail.com",
  "password": "password123"
}
```

#### Example Response

- `captain` (object):
  - `fullName` (object):
    - `firstName` (string): Captain's first name.
    - `lastName` (string): Captain's last name.
  - `email` (string): Captain's email address.
  - `vehicle` (object): Vehicle details.
  - `_id` (string): Captain's ID.
  - `__v` (number): Version.
- `token` (string): JWT Token

```json
{
  "captain": {
    "fullName": {
      "firstName": "Captain",
      "lastName": "One"
    },
    "email": "captain@gmail.com",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    },
    "_id": "69d8b08f3ce9b4ae3e7c58f6",
    "__v": 0
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### `/captains/profile` Endpoint

#### Description

Retrieves the profile information of the currently authenticated captain.

#### HTTP Method

`GET`

#### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

#### Example Response

- `captain` (object):
  - `fullName` (object):
    - `firstName` (string): Captain's first name.
    - `lastName` (string): Captain's last name.
  - `email` (string): Captain's email address.
  - `vehicle` (object): Vehicle details.
  - `_id` (string): Captain's ID.
  - `__v` (number): Version.

### `/captains/logout` Endpoint

#### Description

Logs out the current captain and blacklists the token provided in the Authorization header.

#### HTTP Method

`GET`

#### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

#### Example Response

```json
{
  "message": "Logout Captain"
}
```

## Map Endpoints

### `/maps/get-coordinates` Endpoint

#### Description

Retrieves the GPS coordinates for a given address.

#### HTTP Method

`GET`

#### Query Parameters

- `address` (string, required): The address to get coordinates for (minimum 3 characters).

#### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

#### Example Response

```json
{
  "latitude": 40.7128,
  "longitude": -74.0060
}
```

### `/maps/get-distance-time` Endpoint

#### Description

Calculates the distance and travel time between two locations.

#### HTTP Method

`GET`

#### Query Parameters

- `origin` (string, required): The starting address (minimum 3 characters).
- `destination` (string, required): The destination address (minimum 3 characters).

#### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

#### Example Response

```json
{
  "distance": {
    "text": "10.5 km",
    "value": 10500
  },
  "duration": {
    "text": "25 mins",
    "value": 1500
  }
}
```

### `/maps/get-suggetions` Endpoint

#### Description

Provides autocomplete suggestions for addresses based on user input.

#### HTTP Method

`GET`

#### Query Parameters

- `input` (string, required): The partial address input (minimum 3 characters).

#### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

#### Example Response

```json
[
  {
    "text": "New York, NY, USA",
    "subtext": "New York"
  },
  {
    "text": "Newark, NJ, USA",
    "subtext": "New Jersey"
  }
]
```

## Ride Endpoints

### `/rides/create` Endpoint

#### Description

Creates a new ride request for the authenticated user.

#### HTTP Method

`POST`

#### Request Body

The request body should be in JSON format and include the following fields:

- `pickup` (string, required): Pickup address (minimum 3 characters).
- `destination` (string, required): Destination address (minimum 3 characters).
- `vehicleType` (string, required): Type of vehicle (one of: "car", "moto", "auto", "carXL").

```json
{
  "pickup": "123 Main St, New York, NY",
  "destination": "456 Elm St, New York, NY",
  "vehicleType": "car"
}
```

#### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

#### Example Response

- `ride` (object):
  - `user` (string): User ID.
  - `pickup` (string): Pickup address.
  - `destination` (string): Destination address.
  - `fare` (number): Calculated fare.
  - `status` (string): Ride status (default: "pending").
  - `distance` (number): Distance in km.
  - `duration` (number): Duration in minutes.
  - `otp` (string): One-time password for the ride.
  - `_id` (string): Ride ID.
  - `__v` (number): Version.

```json
{
  "user": "69d8b08f3ce9b4ae3e7c58f5",
  "pickup": "123 Main St, New York, NY",
  "destination": "456 Elm St, New York, NY",
  "fare": 75,
  "status": "pending",
  "distance": 10.5,
  "duration": 25,
  "otp": "123456",
  "_id": "69d8b08f3ce9b4ae3e7c58f7",
  "__v": 0
}
```

### `/rides/getFare` Endpoint

#### Description

Calculates the fare for a ride between two locations for all vehicle types.

#### HTTP Method

`GET`

#### Query Parameters

- `pickup` (string, required): Pickup address (minimum 3 characters).
- `destination` (string, required): Destination address (minimum 3 characters).

#### Authentication

Requires a valid JWT token in the Authorization header:
`Authorization: Bearer <token>`

#### Example Response

```json
{
  "distance": 10.5,
  "duration": 25,
  "fare": {
    "auto": 45,
    "moto": 35,
    "car": 75,
    "carXL": 105
  }
}
```
