/// <reference types="cypress"/>
import { LoginPage } from "./pages/Login_page";

const loginPage = new LoginPage();

        beforeEach(function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    })

describe('All Login Tests', function(){
    
it('Login With Valid Credentials', function () {

    loginPage.enterUsername('admin');
    loginPage.enterPassword('admin123');
    loginPage.clickLogin();

})

it('Login With InValid Credentials', function () { 

    loginPage.enterUsername('Admin');
    loginPage.enterPassword('admin12');
    loginPage.clickLogin();

})

it.skip('page object model 2', function () {
    
    loginPage.enterUsername('Admin');
    loginPage.enterPassword('Admin123');
    loginPage.clickLogin();

})

})