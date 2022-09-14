import {mount} from 'cypress/react18'
import SearchBar from "../../src/shared/PresentationalComponents/SearchBar/SearchBar";

describe('<SearchBar>', () => {
    beforeEach(() => {
        mount(<SearchBar searchKey={''} onSearchClick={() => {
        }} updateSearchKey={() => {
        }}/>)
    })
    it('should have one input', () => {
        cy.get('input').should('have.length', 1);
    })
    it('should have one button', () => {
        cy.get('button').should('have.length', 1);
    })

    it('should shows reza inside the input with searchKey = reza ', () => {
        mount(<SearchBar searchKey={'reza'} onSearchClick={() => {
        }} updateSearchKey={() => {
        }}/>)
        cy.get('input').should('have.value', 'reza');
    })

})
