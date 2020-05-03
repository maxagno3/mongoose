// Answer here for tasks.md

// Q1 Answer here..
// let mongoose = require('mongoose');
// let Schema = mongoose.Schema;

// let user = new Schema({
//     name: String,
//     email: String,
//     age: Number
// })

// Q2 Answer here...
// let mongoose = require('mongoose');
// let Schema = mongoose.Schema;

// let user = new Schema({
//     name: String,
//     email: {
//         type: String,
//         lowercase: true
//     },
//     age: {
//         type: Number,
//         default: 0
//     }
// })

// Q3 Answer here...
// let mongoose = require('mongoose');
// let Schema = mongoose.Schema;

// let user = new Schema({
//     name: String,
//     email: {
//         type: String,
//         lowercase: true
//     },
//     age: {
//         type: Number,
//         default: 0
//     },
//     password: {
//         type: String,
//         minlength: 5
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now()
//     }
// })

// Q4 Answer here...
// let mongoose = require('mongoose');
// let Schema = mongoose.Schema;

// let addressSchema = new Schema({
//     village: String,
//     city: String,
//     state: String,
//     pin: Number,
//     user: Schema.Types.ObjectId
// })

// Q5 Answer here...
// let mongoose = require('mongoose');
// let Schema = mongoose.Schema;

// let addressSchema = new Schema({
//     village: String,
//     city: {
//         type: String,
//         required: true
//     },
//     state: {
//         type: String,
//         required: true
//     },
//     pin: Number,
//     user: Schema.Types.ObjectId
// })

// Q6 Answer here...
// let mongoose = require('mongoose');
// let Schema = mongoose.Schema;

// let addressSchema = new Schema({
//     village: String,
//     city: {
//         type: String,
//         required: true
//     },
//     state: {
//         type: String,
//         required: true
//     },
//     pin: Number,
//     user: Schema.Types.ObjectId,
//     favourites: ['Music', 'Sports', 'Travelling']
// })

// Q7 Answer here...
// let user = new Schema({
//     name: String,
//     email: {
//         type: String,
//         lowercase: true
//     },
//     age: {
//         type: Number,
//         default: 0
//     },
//     password: {
//         type: String,
//         minlength: 5
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now()
//     }
// },{timestamps:true});

// let addressSchema = new Schema({
//     village: String,
//     city: {
//         type: String,
//         required: true
//     },
//     state: {
//         type: String,
//         required: true
//     },
//     pin: Number,
//     user: Schema.Types.ObjectId,
//     favourites: ['Music', 'Sports', 'Travelling']
// },{timestamps:true});

// module.exports = user;
// module.exports = addressSchema;

// Q8 Answer here...
// let express = require('express');
// let app = express();
// let mongoose = require('mongoose');

// let user = new Schema({
//     name: String,
//     email: {
//         type: String,
//         lowercase: true
//     },
//     age: {
//         type: Number,
//         default: 0
//     },
//     password: {
//         type: String,
//         minlength: 5
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now()
//     }
// },{timestamps:true});

// let addressSchema = new Schema({
//     village: String,
//     city: {
//         type: String,
//         required: true
//     },
//     state: {
//         type: String,
//         required: true
//     },
//     pin: Number,
//     user: Schema.Types.ObjectId,
//     favourites: ['Music', 'Sports', 'Travelling']
// },{timestamps:true});
// let User = mongoose.model('User', user);
// let Address = mongoose.model("Address", addressSchema);

// 9
// Getting the essentials.
// let express = require('express');
// let mongoose = require('mongoose');
// let app = express();
// let User = require('./models/users');

// // Connecting to mongodb database.
// mongoose.connect(
//   "mongodb://localhost/mongoose",
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     console.log("Connected:", err ? false : true);
//   }
// );

// // Handling json data.
// app.use(express.json());

// // Handling form data.
// app.use(express.urlencoded({extended:false}));

// // Inserting into database.
// app.post('/', (req,res,next) => {
//     console.log(req.body);
//     User.create(req.body, (err,data) => {
//         if(err) return next(err);
//         console.log('Data sent!');
//     })
// })

// app.use((req,res) => {
//     res.status(404).send('Page not found.')
// })

// // Starting the server.
// app.listen(5000, () => console.log('Port is working..'));

// 10.
// let express = require('express');
// let app = express();
// let mongoose = require('mongoose');
// let User = require('./models/users');

// mongoose.connect('mongodb://localhost/mongoose', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
//     console.log('Connected:', err ? false : true);
// })

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// Model.find.
// app.get('/:id', (req,res,next) => {
//     let objId = req.params.id;
//     User.find({_id: objId},(err,data) => {
//         if(err) return next(err);
//         res.json(data);
//     })
// })

// Model.findOne.
// app.get('/:id', (req,res,next) => {
//     let userID = req.params.id;
//     User.findOne({_id: userID}, (err,data) => {
//         if(err) return next(err);
//         res.json(data);
//     })
// })

// Model.findById.
// app.get('/:id', (req,res,next) => {
//     let userID = req.params.id;
//     User.findById({_id: userID}, (err, data) => {
//         if(err) return next(err);
//         res.json(data);
//     })
// })

// app.use((req,res) => {
//     res.status(404).send('Page does not exist');
// })

// app.listen(5000, () => console.log('Server running...'));

// 11.
// let express = require('express');
// let app = express();
// let mongoose = require('mongoose');
// let User = require('./models/users');

// mongoose.connect(
//   "mongodb://localhost/mongoose",
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   (err) => {
//     console.log("Connected?", err ? "Not yet" : "Yes.");
//   }
// );

// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

// Model.updateOne.
// app.post('/:id', (req,res,next) => {
//     let id = req.params.id;
//     User.updateOne(req.body, (err,data) => {
//         if(err) return next(err);
//         res.status(200).json(data);
//     })
// })

// Model.findByIdAndUpdate.
// app.post('/:id', (req,res,next) => {
//     let id = req.params.id;
//     User.findByIdAndUpdate(id, req.body, (err, data) => {
//         if(err) return next(err);
//         res.json({data});
//     })
// })

// app.listen(5000, () => console.log('Working on 5000.'));

// 12.
// let express = require('express');
// let mongoose = require('mongoose');
// let app = express();
// let User = require('./models/users');

// mongoose.connect('mongodb://localhost/mongoose', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
//     console.log('Connected:', err ? false : true);
// })

// app.use(express.json());
// app.use(express.urlencoded({extended:false}));

// app.get('/:id', (req,res, next) => {
//     User.findByIdAndDelete(req.params.id, (err,data) => {
//         if(err) return next(err);
//         console.log('Deleted!');
//     })
// })

// app.listen(5000, () => console.log('Working fine!'));