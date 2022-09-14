import {mount} from 'cypress/react18'

describe('search user e2e test', () => {
    // iterate recursively until the "Next" link is disabled
    // then assert we are on the last page
    const nextButtonSelector = '[data-cy=next-btn]';
    const currentPageSelector = '[data-cy=current-page]';
    const prevButtonSelector = '[data-cy=prev-btn]';

    beforeEach(()=>{
        cy.intercept('/search/users?q=reza&page=1&per_page=16', { fixture: 'searchUser/searchUser.json' }).as('searchUserJson')
        cy.visit('http://localhost:3000/');
        cy.get('.search__term').type('reza')
        cy.wait('@searchUserJson');
    })
    it('it should redirect from / to /users ', () => {
        cy.url().should('eql', 'http://localhost:3000/users')
    })
    it('should shows ( 2 ) inside paginator current page after user clicked on next button and prev button become enabled', () => {
        cy.get(nextButtonSelector).click();
        cy.intercept('/search/users?q=reza&page=2&per_page=16', { fixture: 'searchUser/searchUser.json' }).as('searchUserJson')
        cy.wait('@searchUserJson');
        cy.get(currentPageSelector).should('have.text', '( 2 )')
        cy.get(prevButtonSelector).should('be.enabled');
    })

    it('should shows  0 user card when remove the text inside the search input', () => {
        cy.get('.search__term').clear();
        cy.intercept('/search/users?q=&page=1&per_page=16', { fixture: 'searchUser/userSearchEmptyResult.json' }).as('searchUserJson')
        cy.wait('@searchUserJson');
        cy.get('.user-card').should('have.length', 0)
    })
    it('it should shows 16 user card  ', () => {
        cy.get('.search__term').type('reza')
        cy.get('.user-card').should('have.length',16);
    })

    it('it should redirect to "/users/reza" after user searched "reza" and clicked on the user card ', () => {
        cy.get('.user-card').should('have.length',16);
        cy.get('.user-card').first().click();
        cy.url().should('eql', 'http://localhost:3000/users/reza')
    })

    it('it should redirect to /users after user clicked on back button inside user details page ', () => {
        cy.get('.user-card').should('have.length',16);
        cy.get('.user-card').first().click();
        cy.url().should('eql', 'http://localhost:3000/users/reza')
        cy.get('.user-details__back-btn').click();
        cy.url().should('eql', 'http://localhost:3000/users')
    })

    it('should shows ( 1 ) in paginator current page after user typed "reza" and clicked next page and then changed the input to "rez" again', () => {
        cy.get(nextButtonSelector).click();
        cy.intercept('/search/users?q=reza&page=2&per_page=16', { fixture: 'searchUser/searchUser.json' }).as('searchUserJson')
        cy.wait('@searchUserJson');
        cy.get('.search__term').clear();
        cy.get('.search__term').type('rez')
        cy.intercept('/search/users?q=rez&page=1&per_page=16', { fixture: 'searchUser/searchUser.json' }).as('searchUserJson')
        cy.wait('@searchUserJson');
        cy.get(currentPageSelector).should('have.text', '( 1 )')
    })
})

describe('describe user returns from user details page', function(){
    beforeEach(function(){
    })
    it('it should shows 16 cards and keep "reza" inside input text after user clicks on the card with name "reza" and inside /users/reza clicks on back button  ', () => {
        cy.intercept('/search/users?q=reza&page=1&per_page=16', { fixture: 'searchUser/searchUser.json' }).as('searchUserJson')
        cy.visit('http://localhost:3000/');
        cy.get('.search__term').type('reza')
        cy.wait('@searchUserJson');
        cy.get('.user-card').should('have.length',16);
        cy.get('.user-card').first().click();
        cy.url().should('eql', 'http://localhost:3000/users/reza')
        cy.get('.user-details__back-btn').click();
        cy.url().should('eql', 'http://localhost:3000/users')
        cy.get('.user-card').should('have.length',16);
        cy.get('.search__term').should('have.value','reza')
    })
})