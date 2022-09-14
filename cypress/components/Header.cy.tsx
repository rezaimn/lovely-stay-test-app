import {mount} from 'cypress/react18'
import Header from "../../src/shared/PresentationalComponents/Header/Header";

describe('<Header>', () => {
    beforeEach(() => {
        mount(<Header searchKey={''} onSearchClick={() => {
        }} updateSearchKey={() => {
        }}/>)
    })
    it('search bar should exists', () => {
        cy.get('.search input').should('have.length', 1);
        cy.get('.search button').should('have.length', 1);
    })
    it('should have a title with text "GitHub User Search" ', () => {
        cy.get('.header__site-info__details__title').should('have.text', 'GitHub User Search');
    })
    it('should have a sub-title with text " Browse users and their profiles" ', () => {
        cy.get('.header').should('exist');
        cy.get('.search').should('exist');
    })
})