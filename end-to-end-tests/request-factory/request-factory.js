const chai = require('chai')
let chaiHttp = require('chai-http')
chai.use(chaiHttp)

const testData = JSON.parse(JSON.stringify(require('../config/test-data.json')))

class RequestFactory {
    static async validateLoginPage() {
        return chai.request(testData.url)
        .get('/auth/login')
    }

    static async validateLogin(){
        return chai.request(testData.url)
        .post('/auth/validate')
        .send({"username":"Admin","password":"admin123"})
        .set('Content-Type','application/json')
        .set('Accept','*/*')
    }

    static async validateDashboardPage() {
        return chai.request(testData.url).get('/dashboard/index')
    }

    static async validatePimModule() {
        return chai.request(testData.url).get('/pim/viewEmployeeList')
    }

    static async validateAddEmployee() {
        return chai.request(testData.url).get('/pim/addEmployee')
    }
   
}
module.exports = RequestFactory;