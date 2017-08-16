//Require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const should = chai.should();


describe('Test device apis', function(){

	beforeEach((done) => { 
	    chai.use(chaiHttp);  
	    done();
	});

	describe('Test for /devices api', function(){
		it('it should return array of device list', (done) => {
			chai.request(app)
			.get('/devices')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body[0].should.be.a('object');
				done();
			});
		});
	});
		
});