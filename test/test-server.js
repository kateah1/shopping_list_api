describe('Shopping List', function () {
  it('should list items on get');
  it('should add an item on post');
  it('should edit an item on put');
  it('should delete an item on delete');
  it('should post to an id that exists');
  it('should post without body data');
  it('should post with something other than valid json');
  it('should put without an id in the endpoint');
  it('should put with different id in the endpoint than the body');
  it('should put to an id that does not exist');
  it('should put without body data');
  it('should put with something other than valid json');
  it('should delete an id that does not exist');
  it('should delete without an id in the endpoint');
});

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../server.js');

var should = chai.should();
var app = server.app;
var storage = server.storage;

chai.use(chaiHttp);

describe('Shopping List', function () {
  it('should list items on get');
  it('should add an item on post');
  it('should edit an item on put');
  it('should delete an item on delete');
});

exports.app = app;
exports.storage = storage;
