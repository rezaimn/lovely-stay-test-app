import {mount} from 'cypress/react18'


describe('search user e2e test', () => {
    // iterate recursively until the "Next" link is disabled
    // then assert we are on the last page
    beforeEach(() => {
        cy.visit('http://localhost:3000/users/rezaim');
        cy.intercept('/users/rezaim/repos?page=1&per_page=1000', { fixture: 'userDetails/userRepositories.json' }).as('userRepositoriesJson')
        cy.intercept('/users/rezaim', { fixture: 'userDetails/userDetails.json' }).as('userDetailsJson')

        cy.wait('@userDetailsJson');
        cy.wait('@userRepositoriesJson');
    })

    it('it should visits http://localhost:3000/users/rezaim ', () => {
        cy.url().should('eql', 'http://localhost:3000/users/rezaim')
    })

    it('should have 4 p tag with {' +
        'p[0]= Bio: Test Bio' +
        'p[1]= Email: test@gmail.com' +
        'p[2]= Company: Test Company' +
        'p[3]= Location: Test Location' +
        ' texts }', () => {
        cy.get('.user-details-card p').first()
            .should("have.text", 'Bio: Test Bio')
            .next()
            .should("have.text", 'Email: test@gmail.com')
            .next()
            .should("have.text", 'Company: Test Company')
            .next()
            .should("have.text", 'Location: Test Location');
    })
    it('should have 3 h4 tag with {' +
        'h4[0]= Followings: 10' +
        'h4[1]= Followers: 10' +
        'h4[2]= Repositories: 10' +
        ' texts }', () => {
        cy.get('.user-details-card h4').first()
            .should("have.text", 'Followings: 2')
            .next()
            .should("have.text", 'Followers: 2')
            .next()
            .should("have.text", 'Repositories: 2');
    })

    it('should shows user avatar and the height and width should be 240 ', () => {
        cy.get('.user-details-card img').should('be.visible').and(($img) => {
            expect($img[0].offsetWidth).to.be.eq(240)
            expect($img[0].offsetHeight).to.be.eq(240)
        });
    })

    it('should exist a back button with text "Back" ', () => {
        cy.get('.user-details__back-btn').should('have.text','Back')
    })

    it('should be two repository cards exist ', () => {
        cy.get('.repo-card').should('have.length',2)
    })

    it('should be a title = repo-1 and description = test desc in the first repo card', () => {
        cy.get('.repo-card').first().find('h4').should('have.text','repo-1')
        cy.get('.repo-card').first().find('p').should('have.text','test desc')
    })

    it('should returns back to /users route after click on Back button', () => {
        cy.get('.user-details__back-btn').click()
        cy.url().should('eql', 'http://localhost:3000/users')
    })
})