// include Express module
var express = require('express');

// storage obj acts as shopping list database
var Storage = {
  // create add method for Storage prototype so add is available on all future instances (add, edit, remove)
  add: function (name) {
    var item = {name: name, id: this.setId};
    this.items.push(item);
    this.setId += 1;
    return item;
  }
};

var createStorage = function () {
  var storage = Object.create(Storage);
  storage.items = [];
  storage.setId = 1;
  return storage;
};

var storage = createStorage();

storage.add('Broad beans');
storage.add('Tomatoes');
storage.add('Peppers');

var app = express();
// static tells express to serve any static content contained in public folder (i.e. will show index.html file)
app.use(express.static('public'));

// get request to /items url
app.get('/items', function (request, response) {
  response.json(storage.items);
});

app.listen(process.env.PORT || 8080, process.env.IP);

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

app.post('/items', jsonParser, function (request, response) {
  if (!('name' in request.body)) {
    return response.sendStatus(400);
  }
  var item = storage.add(request.body.name);
  response.status(201).json(item);
});

// run through items of arr, remove item if id matches request
app.delete('/items/:id', function (request, response) {
  for (var i = 0; i < storage.items.length; i++) {
    if (storage.items[i].id === request.params.id) {
      storage.items.splice(i, 1);
    }
  }
  response.json(storage.items);
});

// run through items of arr, if id matches request, update id or name
app.put('/items/:id', function (request, response) {
  for (var i = 0; i < storage.items.length; i++) {
    if (storage.items[i].id === request.params.id) {
      if (request.body.id) {
        storage.items[i].id = request.body.id;
      }
      if (request.body.name) {
        storage.items[i].name = request.body.name;
      }
    }
  }
  response.json(storage.items);
});
