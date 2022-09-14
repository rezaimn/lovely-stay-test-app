import {mount} from 'cypress/react18'
import RepositoryCard from "../../src/shared/PresentationalComponents/RepositoryCard/RepositoryCard";

const repoData = {
    name: 'test',
    description: 'this is a test'
}
describe('<RepositoryCard>', () => {
    beforeEach(() => {
        mount(<RepositoryCard repo={repoData}/>)
    })

    it('should show "test" in repo title', () => {
        cy.get('h4').should('have.text', 'test');
    })

    it('should show "this is a test" in repo description', () => {
        cy.get('p').should('have.text', 'this is a test');
    })
})