require('dotenv').config()

var redis = require('redis');
var db = redis.createClient(process.env.DB_PORT, process.env.DB_HOST);
var express = require('express');
var app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

db.on('connect', function() {
    console.log('Redis client connected');
});

db.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

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
                for (let i = 0; i < reply.length; i++) {
                    reply[i] = JSON.parse(reply[i]);                    
                }
                res.json(reply);
            });
        } else {
            console.log('How could this happen???');
            // SHOULD NOT HAPPEN IN PROTOTYPE
        }
    });
});

// GET a specific shared activity by its id
app.get('/shared_activity/:id', function (req, res) {
    db.get(req.params.id, (err,reply) => {
        res.send(reply);
    });
});

app.post('/user', async (req,res) => {
    var user = req.body;
    await db.incr('user_key', (err,reply) => {
        if (err) throw err;
        var key = 'user:'+reply;
        user.id = key;
        db.set(key, JSON.stringify(user), (err,reply) => {
            if (err) throw err;
            res.send(user);
        });
    });
});

// Create a new shared activity: { id: "id of the activity to start", user: "user that intiates the activity" }
app.post('/shared_activity/', function (req,res) {
    var activity = req.body;
    db.get(activity.id, (err,reply) => {
        if (err) res.send(err);
        else if (!reply) res.status(404).send("No activity with this ID found!");
        else db.incr('shared_activity_key', (err,reply_id) => {
            var key = 'shared_activity:'+(activity.id.split(':')[1])+':'+reply_id;
            var shared = { id: key, activity : activity.id, users : [ activity.user ], matched : false };
            db.set(key, JSON.stringify(shared), () => {
                res.send(shared);
            });
        });
    });
});

app.delete('/shared_activity/:id', function (req,res) {
    console.log('Deleting activity' + req.params.id);
    db.del(req.params.id, (err,reply) => {
        if (err) res.status(404).send('Shared activity not found');
        else res.status(200).send();
    });
});

// GET the checklist for an activity given its id
app.get('/step_by_step/:activity', function (req, res) {
    res.status(501).send('Our code monkeys are still working on this.');
});

// Fetch if there is an active buddy for the given shared activity
app.get('/buddy/:activity', function (req, res) {
    res.status(501).send('Our code monkeys are still working on this.');
});

// GET a list of all activities for this user
app.get('/buddy/:user_id/shared_activity', function (req, res) {
    res.status(501).send('Our code monkeys are still working on this.');
});

var server = app.listen(process.env.PORT, function () {
   console.log("App listening at http://%s:%s", server.address().address, server.address().port);
});