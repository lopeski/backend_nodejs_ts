const chai = require('chai')
const chaiHttp = require('chai-http')

var expect = chai.expect, should = chai.should();

chai.use(chaiHttp)

describe('Iniciando teste', function() {
  let defaultConteudoPropie = {
    title: `${Date.now()}`,
    codeNumber:  `${Date.now()}`,
    typeOfHome:  `${Date.now()}`,
    propertyFeatures:  `${Date.now()}`,
    value: 1,
    discription:  `${Date.now()}`,
    characteristic :  `${Date.now()}`,
    district:  `${Date.now()}`,
    city:  `${Date.now()}`,
    state:  `${Date.now()}`,
    country:  `${Date.now()}`,
  }
  let conteudoProperty = {}

    describe('Teste Property', function() {
        it('create', function(done) {
          chai.request('http://localhost:9090')
            .post('/properties')
            .set('Content-Type', 'application/json')
            .send(defaultConteudoPropie)
            .end(function(err, res) {
              conteudoProperty = res.body;
              console.log('eu sou a lei', res.body);
              expect(res).to.have.status(200);
              done();                               // <= Call done to signal callback end
            });
        });
        it('get', function(done) {
          chai.request('http://localhost:9090')
            .get('/properties')
            .set('Content-Type', 'application/json')
            .send({ id: conteudoProperty.id })
            .end(function(err, res) {
              expect(res).to.have.status(200);
              done();                               // <= Call done to signal callback end
            });
        });
        it('update', function(done) {
          chai.request('http://localhost:9090')
            .put('/properties')
            .set('Content-Type', 'application/json')
            .send({
              id: conteudoProperty.id,
              title: "novo titulo",
            })
            .end(function(err, res) {
              expect(res).to.have.status(200);
              done();                               // <= Call done to signal callback end
            });
        });
        it('delete', function(done) {
          chai.request('http://localhost:9090')
            .delete('/properties')
            .set('Content-Type', 'application/json')
            .send({id: conteudoProperty.id})
            .end(function(err, res) {
              expect(res).to.have.status(200);
              done();                               // <= Call done to signal callback end
            });
        });
    });


});

describe('Iniciando teste', function() {
  let defaultConteudoAddres = {
    district:  `${Date.now()}`,
    city:  `${Date.now()}`,
    state:  `${Date.now()}`,
    country:  `${Date.now()}`,
  }
  let conteudoAddres = {}

  describe('Teste addres', function() {

      it('create', function(done) {
        chai.request('http://localhost:9090')
          .post('/addres')
          .set('Content-Type', 'application/json')
          .send(defaultConteudoAddres)
          .end(function(err, res) {
            conteudoAddres = res.body;
            console.log('eu sou a lei', res.body);
            expect(res).to.have.status(200);
            done();                               // <= Call done to signal callback end
          });
      });
      it('get', function(done) {
        chai.request('http://localhost:9090')
          .get('/addres')
          .set('Content-Type', 'application/json')
          .send({ id: 1 })
          .end(function(err, res) {
            expect(res).to.have.status(200);
            done();                               // <= Call done to signal callback end
          });
      });
      it('update', function(done) {
        chai.request('http://localhost:9090')
          .put('/addres')
          .set('Content-Type', 'application/json')
          .send({
            id: 1,
            state: "novo titulo",
          })
          .end(function(err, res) {
            expect(res).to.have.status(200);
            done();                               // <= Call done to signal callback end
          });
      });
      it('delete', function(done) {
        chai.request('http://localhost:9090')
          .delete('/addres')
          .set('Content-Type', 'application/json')
          .send({id: 1})
          .end(function(err, res) {
            expect(res).to.have.status(200);
            done();                               // <= Call done to signal callback end
          });
      });
  });
});
