// CRUD Operations

// Destructuring above code
const { MongoClient, ObjectID } = require('mongodb');


// Mongo URL  and name we are naming the database
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
  if (error) {
    return console.log('Unable to connect to database');
  }
  // No need to create database through GUI. Simply doing [client.db(AND SOME NAME)] is enough to create it
  const db = client.db(databaseName)




})







// ================ OLD CODE EXAMPLES =================

  // Find multiple documents.
  // db.collection('users').find({age: 35}).toArray((error, users) => {
  //   console.log('users: ', users);
  // })

  // Get document from users collection. Find one will alawys find first that meets requirements if multiple
  // db.collection('users').findOne({name: 'Whitney'}, (error, user) => {
  //   if (error) {
  //     return console.log('Unable to fetch user')
  //   }
  //   console.log('user: ', user)
  // })

  // Create a single document into a Users collection
  // db.collection('users').insertOne({
  //   name: 'Blah',
  //   age: 33
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert user')
  //   }

  //   console.log(result.ops);
  // })

  // Create multiple documents at a time.
  // db.collection('users').insertMany([
  //   {
  //     name: 'Whitney',
  //     age: 29
  //   },
  //   {
  //     name: 'Adam',
  //     age: 33
  //   }
  // ], (error, result) => {
  //   if (error) {
  //     console.log('Unable to insert documents')
  //   }

  //   console.log(result.ops)
  // })


  // UPDATING DATA PROMISE EXAMPLE
    // const updatePromise = db.collection('users').updateOne({
  //   _id: new ObjectID('605aaaa023dda22cf4b967dc')
  // }, {
  //   $set: {
  //     name: 'Kenny'
  //   }
  // })

  // updatePromise.then((result) => {
  //   console.log('result: ', result);
  // }).catch((error) =>{
  //   console.log('error: ', error);
  // })

  //UPDATE MANY
    // Don't need to create variable like example. Could change the promise .then() and .catch() after the function
  // Update all task to have completed to true:
  // db.collection('tasks').updateMany({
  //   completed: false
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }).then((result) => console.log('Result: ', result))
  //   .catch((error) => console.log('Error: ', error))

  // DELETING DOCUMENTS
  // db.collection('tasks').deleteOne({
  //   description: 'Complete App one within Node.js course'
  // }).then((result) => console.log('result: ',result))
  //   .catch((error) => console.log('error: ',error))