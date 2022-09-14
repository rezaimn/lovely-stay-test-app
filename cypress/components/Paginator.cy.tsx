import Paginator from "../../src/shared/PresentationalComponents/Paginator/Paginator";
import { mount } from 'cypress/react18'

describe('<Paginator>', () => {
    const prevButtonSelector = '[data-cy=prev-btn]';
    const nextButtonSelector = '[data-cy=next-btn]';
    beforeEach(()=>{
        mount(<Paginator totalPages={10} currentPage={1} onPreviousClick={()=>{}} onNextClick={()=>{}} />)
    })

    it('should not exist when total page is 0', () => {
        mount(<Paginator totalPages={0} currentPage={1} onPreviousClick={()=>{}} onNextClick={()=>{}} />)
        cy.get('h4').should('not.exist');
        cy.get(nextButtonSelector).should('not.exist');
        cy.get(prevButtonSelector).should('not.exist');
    })

    it('should show ( 1 ) as current page ', () => {
        cy.get('h4').should('have.text','( 1 )');
    })
    it('should disabled the Previous button when the current page is the first page', () => {
        cy.get(prevButtonSelector).should('be.disabled');
    })
    it('should disabled the Next button when the current page is equal to total page', () => {
        mount(<Paginator totalPages={10} currentPage={10} onPreviousClick={()=>{}} onNextClick={()=>{}} />)
        cy.get(nextButtonSelector).should('be.disabled');
    })
})