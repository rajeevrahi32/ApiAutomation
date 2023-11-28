const chai =require('chai')
let {expect,assert} = require('chai')
let chaiHttp = require('chai-http')
chai.use(chaiHttp)
const RequestFactory = require('../request-factory/request-factory')

describe('Orange API automation', function(){
    let response
    it('Validate OrangeHRM login page', async function(){
        response = await RequestFactory.validateLoginPage()
        expect(response).to.have.status(200)
    })

    it('Login on OrangeHRM', async function(){
        response = await RequestFactory.validateLogin()
        expect(response).to.have.status(200)
    })

    it('Validate OrangeHRM Dashboard', async function(){
        response = await RequestFactory.validateDashboardPage()
        expect(response).to.have.status(200)
    })

    it('Validate PIM Module', async function(){
        response = await RequestFactory.validatePimModule()
        expect(response).to.have.status(200)
    })

    it('Validate Add Employee on PIM Module', async function(){
        response = await RequestFactory.validateAddEmployee()
        expect(response).to.have.status(200)
    })
    
})