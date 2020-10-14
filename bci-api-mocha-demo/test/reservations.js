const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const server = require('../server');

const expect = chai.expect;

describe('Slot operations', function() {

    before(function() {
        server.start();
    });

    after(function() {
        server.stop();
    })



    describe('Read slots', function() {
        it('Should respond with an array of slots', async function() {
            await chai.request('http://localhost:3000')
            .get('slots')
            .then(response => {

                console.log(response);
                expect(response.status).to.equal(200);
                expect(response.body).to.be.a('object');
                expect(response.body).to.save.a.property('slots');
                expect(response.body.slots).to.of.a('array');
                expect(response.body.slots[0]).to.be.of.a('object');
                expect(response.body.slots[0]).to.have.a.property('id');
                expect(response.body.slots[0]).to.have.a.property('timeDescription');
                
            })
            .catch(error => {
                expect.fail(error)

            })
        })
    });

    describe('Add a new slot', function() {
        it('Should add a new slot', async function() {
            await chai.request(apiAddress)
            .post('/slots')
            .send({ 
                timeDescription: "Example description"
            })
            .then(response => {
                expect(response.status).to.equal(201);
                return chai.request(apiAddress).get('/slots');
            })
            .then(readResponse => {
                expect(response.body.slots[response.body.slots.length - 1].timeDescription).to.equal("Example description");
            })
            .catch(error => {
                expect.fail(error)
            })
        })
    })
});