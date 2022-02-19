# Node + Express + Mongo : API CRUD
This kata use express to setup a server over nodejs exposing http routes to perform crud operations in local mongodb database.

## Main Features
* connect to mongodb with mongoose
* peroform CRUD operations in mongo
* use proper HTTP verbs to perform proper CRUD actions

## Ingredients
Postman is used to test how data is delivery through json and how the response is received.

## Packages
* Main Packages
  * express
  * mongo

* Secondary Packages
  * colors
  * nodemon


## `mongod` commands
Use this commandas in Mongo Shell

Select a database to work with
~~~
> use db
~~~

Show Collections
~~~
> show collections
~~~

See into collections (use .pretty() to see formated results)
~~~
> db.userprofiles.find()
> db.userprofiles.find().pretty()
~~~

Remove all documents from the collection
~~~
> db.userprofiles.remove({})
~~~
