# Mern-Stack Goal Tracker

A MERN stack tutorial by Traversy Media where we will create a RESTful API from scratch with Node.js, Express, MongoDB and Mongoose. In this web application the user will be able to register, log in, create, read, update and delete goals.

## How to use:

Step 1:

```
cd backend
npm install
npm run server
```

Step 2:

```
cd ..
cd frontend
npm install
npm run start
```

## How RestAPI works:

![Image](./assets/images/rest-crud.png)

_source:_(https://networkop.co.uk/blog/2016/01/01/rest-for-neteng/)

In the picture above the are using devices in the url, where as ours will be goals.

The operations we want to do in this instance are called **CRUD (CREATE, READ, UPDATE, DELETE)**.

Our **client** will be our React Application which is where all of our UI, all of our components and our state with Redux go.

Our **server** we're going to build with express which is a node.js backend framework and this will be our API

We need these two to communicate, we do that with a restAPI, which includes a bunch of http requests.

**Create:** (HTTP POST /api/goal/payload)
To create a goal you would make a HTTP POST request (POST IS THE METHOD). You alos send a payload of data, because if you are creating something you are going to send some data with it to the HTTP body. That then gets back a 201 status code from the server, which means everything went ok and something was created.

**Read:** (HTTP GET /api/goal/payload)
To read a goal we would make a HTTP GET request. End point is the same as the create but has diffetent methods. Then you just back a 200 status which means everything is ok.

**Update:** (HTTP PUT /api/goal/1 +payload)
To update a goal we would use a PUT request, pretty similar to the create and read but this time you would include the ID in the actual endpoint URL because you need to know which goal is being updated. Also get a 200 status ok back.

**Delete:** (HTTP DELETE /api/goal/1)
To delete a goal is same thing as update however you make a delete request to the URL with the id of the goal. Also get a 200 status ok back.

## MongoDB:

Is our database, we will use mongoose to connect and interact with the database.

## Express:

Is a backend node.js framework.

## React:

## Node:

## Authentication:

Resgister end point and Log in end point. Once we autheticate we will be able to get a json web token, we can use that token to access protective routes.

## Backend/Server:

## Frontend/Client:

Here we have a user interface with a register form, log in form and a dashboard where we have goals.

Tech used is: Redux & Redux tool kit.

### Other tools used:

> Postman: HTTP Client
> MongoDB Atlas: Cloud Database
