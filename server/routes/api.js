const express = require('express');
const router = express.Router();
// declare axios for making http requests
const axios = require('axios');
const MongoClient = require('mongodb').MongoClient;
const bcrypt = require('bcryptjs');
const BCRYPT_SALT_ROUNDS = 12;
var ObjectId = require('mongodb').ObjectId;

var db;
MongoClient.connect('mongodb://admin1:admin1@ds161894.mlab.com:61894/hotelfweb', { useNewUrlParser: true }, (err, database) => {
 if (err) return console.log(err)
 db = database.db('hotelfweb');
});

const API = 'https://jsonplaceholder.typicode.com';
/* GET api listing. */
router.get('/', (req, res) => {
 res.send('api works');
});

router.get('/authuser/:username/:password', (req, res2) => {
    var username = req.params.username;
     var password = req.params.password;
    db.collection('users').findOne({"name": username}, { password: 1, role: 1,
    _id: 1 }, function(err, result) {
    if (result == null) res2.send([{"auth": false}]);
    else
    {
    bcrypt.compare(password, result.password, function(err, res) {
    if(res) {
    res2.send([{"auth": true, "role": result.role, "userid" : result._id}]);
    } else {
     res2.send([{"auth": false}]);
    }
    });
    }
    });
    });
    router.get('/reguser/:name/:email/:password/:role', (req, res) => {
    bcrypt.hash(req.params.password, BCRYPT_SALT_ROUNDS, function(err, hash) {
     db.collection('users').save({"name" : req.params.name, "email": req.params.email, "password" :
    hash, "role" : req.params.role }, (err, result) => {
     });
    });
    })
// Get all posts
router.get('/posts', (req, res) => {
 // Get posts from the mock api
 // This should ideally be replaced with a service that connects to MongoDB
 axios.get(`${API}/posts`)
 .then(posts => {
 res.status(200).json(posts.data);
 })
 .catch(error => {
 res.status(500).send(error)
 });


});

router.get('/bookroom/:fromdate/:enddate/:roomtype/:userid/:special', (req, res) => {
    db.collection('book').insertOne({"fromdate" : req.params.fromdate, "enddate" : req.params.enddate, "roomtype" : req.params.roomtype, "userid" : req.params.userid, "special" : req.params.special});
})

router.get('/retrievebookings/:userid', (req, res3) => {
    db.collection('book').find({"userid" : req.params.userid}, {_id: 1, fromdate : 1, enddate : 1, roomtype : 1}).toArray(function(err, result) {
        res3.send(result);
    });
})

router.get('/deletebooking/:bookingid', (req) => {
    db.collection('book').deleteOne({"_id" : ObjectId(req.params.bookingid)});
});

router.get('/updatebooking/:bookingid/:fromdate/:enddate/:roomtype/:special', (req) => {
    db.collection('book').updateOne({"_id" : ObjectId(req.params.bookingid)}, {$set : {"fromdate" : req.params.fromdate, "enddate" : req.params.enddate, "roomtype" : req.params.roomtype, "special" : req.params.special}}, (err, result) => {});
});

router.get('/getallbookings', (req, res4) => {
    db.collection('book').find().toArray(function(err, result){
        res4.send(result)
    })
})
module.exports = router;