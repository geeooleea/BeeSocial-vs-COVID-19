require('dotenv').config()

var redis = require('redis');
var client = redis.createClient(process.env.DB_PORT, process.env.DB_HOST);

client.on('connect', function() {
    console.log('Redis client connected');
});

client.on('error', function (err) {
    console.log('Something went wrong ' + err);
});

client.flushall();
////////////////////////////////////////////
////////////// SET CHECKLISTS //////////////
////////////////////////////////////////////
client.incr('checklist_key', redis.print);
var key4 = "checklist:".concat(client.get('checklist'));
var val = { id: key4, desc: 'If you want, share some sensations with your buddy.', equipment : null }
client.set(key4, JSON.stringify(val), redis.print);

///////////////// FOR YOGA /////////////////
client.incr('checklist_key', redis.print);
var key1 = "checklist:".concat(client.get('checklist'));
var val = {id: key1, desc: 'Hop into something comfy.', equipment :'Comfortable sports clothing'}
client.set(key1, JSON.stringify(val), redis.print);

client.incr('checklist_key', redis.print);
var key2 = "checklist:".concat(client.get('checklist'));
var val = {id: key2, desc: 'Grab your yoga mat.', equipment :'Yoga mat, sports mat, blanket or towel'}
client.set(key2, JSON.stringify(val), redis.print);

client.incr('checklist_key', redis.print);
var key3 = "checklist:".concat(client.get('checklist'));
var val = {id: key3, desc: 'Check out some yoga video on Youtube', equipment :'We suggest you check out <a href=\"https://youtu.be/dF7O6-QabIo\">this one</a> to start'}
client.set(key3, JSON.stringify(val), redis.print);

///////////// FOR CLEANING ////////////////
client.incr('checklist_key', redis.print);
var key5 = "checklist:".concat(client.get('checklist'));
var val = { id: key5, desc: 'Choose one room you want to start with.', equipment : null }
client.set(key5, JSON.stringify(val), redis.print);

client.incr('checklist_key', redis.print);
var key6 = "checklist:".concat(client.get('checklist'));
var val = { id: key6, desc: 'Start by taking out the cleaning equipment.', equipment : "Cleaning cloths, vacuum, mop, ..." }
client.set(key6, JSON.stringify(val), redis.print);

client.incr('checklist_key', redis.print);
var key7 = "checklist:".concat(client.get('checklist'));
var val = { id: key7, desc: 'Put on some music, if you like.', equipment : "Stereo, phone, headphones, ..." }
client.set(key7, JSON.stringify(val), redis.print);

client.incr('checklist_key', redis.print);
var key8 = "checklist:".concat(client.get('checklist'));
var val = { id: key8, desc: 'Is there anything in your way? Sort things out.', equipment : "Storage items (boxes), trash bag/can, ..." }
client.set(key8, JSON.stringify(val), redis.print);

client.incr('checklist_key', redis.print);
var key9 = "checklist:".concat(client.get('checklist'));
var val = { id: key9, desc: 'Do the actual cleaning: the hardest part is already behind you', equipment : null }
client.set(key9, JSON.stringify(val), redis.print);

////////////// FOR WORKING /////////////////
client.incr('checklist_key', redis.print);
var key10 = "checklist:".concat(client.get('checklist'));
var val = { id: key10, desc: 'Clean your desk or table.', equipment : null }
client.set(key10, JSON.stringify(val), redis.print);

client.incr('checklist_key', redis.print);
var key11 = "checklist:".concat(client.get('checklist'));
var val = { id: key11, desc: 'If you enjoy it, make some coffee or tea.', equipment : "Your favourite mug" }
client.set(key11, JSON.stringify(val), redis.print);

client.incr('checklist_key', redis.print);
var key12 = "checklist:".concat(client.get('checklist'));
var val = { id: key12, desc: 'Decide what you want to do and try being focused for about 25/30 minutes.', equipment : 'Do you already know about <a href=\"https://francescocirillo.com/pages/pomodoro-technique\">the Pomodoro Technique<a>?' }
client.set(key12, JSON.stringify(val), redis.print);

client.incr('checklist_key', redis.print);
var key13 = "checklist:".concat(client.get('checklist'));
var val = { id: key13, desc: 'Take a short break. Maybe check in with your buddy and see how you are doing.', equipment : null }
client.set(key13, JSON.stringify(val), redis.print);

client.incr('checklist_key', redis.print);
var key14 = "checklist:".concat(client.get('checklist'));
var val = { id: key14, desc: 'Repeat until you are satisfied with your work for the day.', equipment : null }
client.set(key14, JSON.stringify(val), redis.print);

/////////////// FOR WORKOUTS ///////////////
client.incr('checklist_key', redis.print);
var key15 = "checklist:".concat(client.get('checklist'));
var val = { id: key15, desc: 'If you are in the house, make sure you have enough room around you.', equipment : null }
client.set(key15, JSON.stringify(val), redis.print);

client.incr('checklist_key', redis.print);
var key16 = "checklist:".concat(client.get('checklist'));
var val = { id: key16, desc: 'Choose a workout.', equipment : 'We reccomend <a href=\"https://youtu.be/Mvo2snJGhtM\">this simple workout</a> to get started.' }
client.set(key16, JSON.stringify(val), redis.print);

////////////////////////////////////////////
////////////// SET ACTIVITIES //////////////
////////////////////////////////////////////
client.incr('activity_key', redis.print);
var key = "activity:".concat(client.get('activity_key'));
var yoga = {id: key, title: 'Yoga', desc : 'Stretch body and mind with flexibility workouts and meditation.', steps : [ key1, key2, key3, key4 ]};
client.set(key, JSON.stringify(yoga), redis.print);

client.incr('activity_key', redis.print);
key = "activity:".concat(client.get('activity_key'));
var cleaning = { id: key, title : 'House Cleaning', desc: 'Spring is here, time to refresh our quarantine cave!', steps : [key5, key6, key7, key8, key9, key4 ]};
client.set(key, JSON.stringify(cleaning), redis.print);

client.incr('activity_key', redis.print);
var key = "activity:".concat(client.get('activity_key'));
var working = {id: key, title: 'Working from home', desc : 'Kickstart your productivity on the job with some easy measures.', steps : [key10, key11, key12, key13, key14, key4 ]};
client.set(key, JSON.stringify(working), redis.print);

client.incr('activity_key', redis.print);
var key = "activity:".concat(client.get('activity_key'));
var workout = { id: key, title : 'Workout', desc: 'Activate your body while staying in your home or backyard.', steps: [key1, key15, key16, key4 ] }
client.set(key, JSON.stringify(workout), redis.print);