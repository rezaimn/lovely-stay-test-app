import {mount} from 'cypress/react18'
import SearchUser from "./SearchUser";
import {Provider} from "react-redux";
import {store} from "../../shared/store";
import {BrowserRouter} from "react-router-dom";

describe('<SearchUser>', () => {
    const nextButtonSelector = '[data-cy=next-btn]';
    const prevButtonSelector = '[data-cy=prev-btn]';

    beforeEach(() => {
        mount(
            <Provider store={store}>
                <BrowserRouter>
                    <SearchUser/>
                </BrowserRouter>
            </Provider>
        )
    })
    it('should shows  No Data To Show when search input is empty', () => {
        cy.get('.search-user__search-results__no-data').find('h1').should('have.text', 'No Data To Show')
    })
    it('search bar should exists', () => {
        cy.get('.search input').should('have.length', 1);
        cy.get('.search button').should('have.length', 1);
    })
    it('should shows "reza" inside search box after user typed reza inside the search input', () => {
        cy.get('.search__term').type('reza').should('have.value', 'reza')
    })

    it('pagination should not exist when no data exists', () => {
        cy.get('h4').should('not.exist');
        cy.get(nextButtonSelector).should('not.exist');
        cy.get(prevButtonSelector).should('not.exist');
    })

    it('Header with searchbar  should exist', () => {
        cy.get('h4').should('not.exist');
        cy.get(nextButtonSelector).should('not.exist');
        cy.get(prevButtonSelector).should('not.exist');
    })

});