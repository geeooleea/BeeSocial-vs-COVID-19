require('dotenv').config()

var redis = require('redis');
var db = redis.createClient(process.env.DB_PORT, process.env.DB_HOST);

db.on('connect', function() {
    console.log('Redis client connected');
});

db.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

var express = require('express');
var app = express();

// GET the list of all activities
app.get('/activities', function (req, res) {
    /*
    function get_res(key,results) {
        return new Promise((resolve,reject) => {
            db.get(key, (err,reply) => {
                if (err) reject(err);
                results.push(reply);
                resolve(true);
            });
        });
    }
    for (let i = 0; i < reply[1].length; i++) {
        let c = await get_res(reply[1][i],results);
    }
    res.send(results);
    */
    db.scan('0','MATCH','activity:*', async function(err, reply){
        if(err) throw err;

        var results = [];
        cursor = reply[0];
        console.log(cursor);
        if(cursor === '0'){ // Then we are done
            db.mget(reply[1], (err,reply) => {
                if (err) throw err;
                res.send(reply);
            });
        } else {
            console.log('How could this happen???');
            // SHOULD NOT HAPPEN IN PROTOTYPE
        }
    });
});

// GET the checklist for an activity given its id
app.get('/step_by_step/:activity', function (req, res) {
    res.status(501).send('Our code monkeys are still working on this.');
});

// Fetch if there is an active buddy for the given shared activity
app.get('/buddy/:activity', function (req, res) {
    if (req.params("activity") == 1) res.send({ buddy : 1, ideal: true });
    else res.status(404).send({error : 'No buddy found yet'});
});

// GET a list of all activities for this user
app.get('/buddy/:user_id/shared_activity', function (req, res) {
    res.send([{ id: 1, participants : [1, 4], activity_id : 1, active : true,  checklist : [[true, true, false], [true, false, false]] }]);
});

// GET a specific shared activity by its id
app.get('/shared_activity/:id', function (req, res) {
    db.get(req.params('id'), (err,reply) => {
        res.send(reply);
    });
});

var server = app.listen(8080, function () {
   console.log("App listening at http://%s:%s", server.address().address, server.address().port);
});