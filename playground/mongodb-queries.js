const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5bef43ae3dd03505d9c0b7b4';


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ', todos);
// }).catch((e) => {
//     console.log('ID not found.');
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todos: ', todo);
// }).catch((e) => {
//     console.log('Can\'f fount nothing.');
// });

// Todo.findById(id).then((todo) => {
//     console.log('Todos: ', todo);
// }).catch((e) => {
//     console.log('ID not found.');
// });

User.findById('5bedf9fdbcae890563aba170').then((user) =>{
    if(!user){
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 3));
}, (e) => {
    console.log(e);
})