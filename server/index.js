var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
});

// GET the list of all activities
app.get('/activities', function (req, res) {
    res.send([{id: 1, title: 'Yoga', desc : 'Stretch body and mind with flexibility workouts and meditation.'} ,{ id: 2, title : 'House Cleaning, desc: Spring is here, time to refresh our quarantine cave!'}, {id: 3, title: 'Working from home', desc : 'Kickstart your productivity on the job with some easy measures.'}]);
});

// GET the checklist for an activity given its id
app.get('/step_by_step/:activity', function (req, res) {
    res.send([{id: 1, desc: 'Hop into something comfy.', equipment :'Comfortable sports clothing.'} ,{ id: 2, desc: 'Breathe lots of love in.', equipment : null}, {id: 3, desc: 'Breathe lots of love out.', equipment : null}]);
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
    res.send({ id: 1, participants : [1, 4], activity_id : 1, active : true,  checklist : [[true, true, false], [true, false, false]] });
});

// GET a specific shared activity by its id
app.post('/shared_activity/', function (req, res) {
    res.send({ id: 1 });
});

// GET a specific shared activity by its id
app.put('/shared_activity/', function (req, res) {
    res.send({ id: 1 });
});

// GET a specific shared activity by its id
app.post('/shared_activity/:activity_id/step/:step_id', function (req, res) {
    res.send({ id: 1 });
});


var server = app.listen(8080, function () {
   console.log("App listening at http://%s:%s", server.address().address, server.address().port);
});