const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();
chai.use(chaiHttp);

describe('/POST /api/user/login', () => {
    it('should authenticate the user with correct email and password', (done) => {


         chai.request(server)
            .post('/api/v1/login')
            .send({
              'email': 'leninlawrence@gmail.com',
              'password': 'password'
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('token');
                res.body.should.have.property('user');
                res.body.user.should.have.property('_id');
                res.body.user.should.have.property('firstname');
                res.body.user.should.have.property('lastname');
                res.body.user.should.have.property('email');
                done();
            });
    });

    it('should send 400 status with error message when any of the required fields are missing in Login parameters', (done) => {


         chai.request(server)
            .post('/api/v1/register')
            .send({
              'email': 'leninlawrence4@gmail.com'
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                done();
            });
    });
});
describe('/POST /api/user/register', () => {
    it('should register the users with all the correct credentials', (done) => {


         chai.request(server)
            .post('/api/v1/register')
            .send({
              'email': 'leninlawrence2@gmail.com',  // please replace the username when you do testing
              'password': 'password',
              'firstname':'Lenin',
              'lastname':'Lawrence'
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message');
                done();
            });
    });

    it('should send 400 status with error message when any of the required fields are missing', (done) => {


         chai.request(server)
            .post('/api/v1/register')
            .send({
              'email': 'leninlawrence4@gmail.com',
              'firstname':'Lenin',  // password is missing
              'lastname':'Lawrence'
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.be.a('object');
                res.body.should.have.property('errors');
                done();
            });
    });
    it('should return 409 status if the user with email ID already exists', (done) => {


         chai.request(server)
            .post('/api/v1/register')
            .send({
              'email': 'leninlawrence2@gmail.com',
              'password': 'password',
              'firstname':'Lenin',
              'lastname':'Lawrence'
            })
            .end((err, res) => {
                res.should.have.status(409);
                res.body.should.be.a('object');
                res.body.should.have.property('errmsg');
                done();
            });
    });
});
