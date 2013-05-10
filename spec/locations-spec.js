var app = require('../server');
var request = require('supertest');
var should = require('should');
var Location = require('../app/models/location');

describe('Locations', function () {

  var data = {
    name: 'Test',
    address: '132 Test Street',
    lat: 40,
    lng: -70
  };

  describe('GET /api/locations', function () {
    
    var location;
    var url = '/api/locations';

    before(function () {
      location = new Location(data);
      location.save();
    });

    after(function () {
      location.remove();
    });

    it('should return a 200', function (done) {
      request(app).get(url).expect(200, done);
    });

    it('should respond with json', function (done) {
      request(app).get(url).expect('Content-Type', /json/, done);
    });

    it('should return the locations', function (done) {
      request(app).get(url).end(function (err, res) {
        res.body[0].should.include(data);
        done();
      });
    });

  });

  describe('POST /api/locations', function () {

    var url = '/api/locations';

    after(function () {
      Location.remove({}, function () {});
    });

    describe('with all of the correct parameters', function () {
      
      it('should return a 200', function (done) {
        request(app).post(url).send(data).expect(200, done);
      });

      it('should respond wth json', function (done) {
        request(app).post(url).send(data).expect('Content-Type', /json/, done);
      });

      it('should return the location', function (done) {
        request(app).post(url).send(data).end(function (err, res) {
          res.body.should.include(data);
          done();
        });
      });

    });

    describe('with a missing parameter', function () {

      it('should return a 400', function (done) {
        request(app).post(url).send({}).expect(400, done);
      });

      it('should return an error message', function (done) {
        request(app).post(url).send({}).end(function (err, res) {
          should.exist(res.body.error);
          done();
        });
      });

    });

  });

  describe('GET /api/locations/:id', function () {
  
    describe('when the location requested exists', function () {

      var location;
      var url;

      before(function () {
        location = new Location(data);
        location.save();
        url = '/api/locations/' + location.get('id');
      });

      after(function () {
        location.remove();
      });

      it('should return a 200', function (done) {
        request(app).get(url).expect(200, done);
      });

      it('should respond with json', function (done) {
        request(app).get(url).expect('Content-Type', /json/, done);
      });

      it('should return the location', function (done) {
        request(app).get(url).end(function (err, res) {
          var item = res.body;
          item.should.include(data);
          item._id.should.equal(location.get('id'));
          done();
        });
      });

    });

    describe('when the location requests does not exist', function () {

      var url = '/api/locations/123';

      it('should return a 404', function (done) {
        request(app).get(url).expect(404, done);
      });

      it('should respond with an error message', function (done) {
        request(app).get(url).end(function (err, res) {
          should.exist(res.body.error);
          done();
        });
      });

    });

  });

  describe('PUT /api/locations/:id', function () {

    var location;
    var url;
    var newData = { name: 'Changed!', address: '9 Blah Street' };

    before(function () {
      location = new Location(data);
      location.save();
      url = '/api/locations/' + location.get('id');
    });

    after(function () {
      location.remove();
    });
    
    it('should return a 200', function (done) {
      request(app).put(url).send(newData).expect(200, done);
    });

    it('should respond wth json', function (done) {
      request(app).put(url).send(newData).expect('Content-Type', /json/, done);
    });

    it('should return the new location', function (done) {
      request(app).put(url).send(newData).end(function (err, res) {
        res.body.should.include(newData);
        done();
      });
    });

  });

  describe('DELETE /api/locations/:id', function () {

    describe('when the requested location exists', function () {

      var location;
      var url;

      before(function () {
        location = new Location(data);
        location.save();
        url = '/api/locations/' + location.get('id');
      });

      after(function () {
        location.remove();
      });
      
      it('should return a 204', function (done) {
        request(app).del(url).expect(204, done);
      });

    });

    describe('when the requested location does not exist', function () {

      var url = '/api/locations/123';

      it('should return a 400', function (done) {
        request(app).del(url).expect(400, done);
      });

    });

  });

});
