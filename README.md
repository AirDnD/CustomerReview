# Project Name

> Systems Design application with a goal of hitting at least 1000 requests per second once uploaded onto AWS and load balanced. The final implementation went up to 4700 RPS.



## Related Projects

  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo
  - https://github.com/teamName/repo

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4.	[CRUD]

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

###	CRUD




Update / PUT - update an item
Delete / DELETE - delete an item



Create / POST - create a new review
```sh
POST: curl -H "Content-Type: application/json" -X GET -d '{"listing_id:12, user_id:100, accuracy:3, communication:3, cleanliness:3, location:4, check_in:3.5, 
            _value:3, _date: 2018-08-20, content: great location "}' http://localhost:3002/api/reviews/user/:user_id/accuracy/:accuracy/communication/:communication/cleanliness/:cleanliness/location/:location/checkin/:check_in/value/:_value/date/:_date, content)
```

Read / GET - read an review
```sh
GET: curl -H "Content-Type: application/json" -X GET -d '{"review_id: 100"}' http://localhost:3002/api/reviews/:reviewID 
```

Update / PUT - update a review
```sh
PUT: curl -H "Content-Type: application/json" -X PUT -d '{"value: 4"}' http://localhost:3002/api/value/:value
```

Delete / DELETE - delete an item
```sh
DELETE: curl -H "Content-Type: application/json" -X GET -d '{"review_id: 100"}' http://localhost:3002/api/reviews/:reviewID 
```
