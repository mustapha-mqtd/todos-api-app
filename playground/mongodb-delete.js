// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = ObjectID();
console.log(obj);

MongoClient.connect(
    'mongodb://localhost:27017/TodoApp', 
    { useNewUrlParser: true }, 
    (err, client) => {
        if (err) {
            return console.log('Unable to connect to MongoDB server');
        }
        console.log('Connected to MongoDB server.');
        const db = client.db('TodoApp');
        
        //deleteMany
        // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
        //     console.log(result);
        // });

        //deleteOne
        // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
        //     console.log(result);
        // });


        //findOneAnddelete
        db.collection('Todos').findOneAndDelete({text: 'Somting to do'}).then((result) => {
            console.log(result);
        });

        //client.close();
    }
);