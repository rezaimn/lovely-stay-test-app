import {mount} from 'cypress/react18'
import UserSearchResultCard from "../../src/shared/PresentationalComponents/UserSearchResultCard/UserSearchResultCard";

const userData = {
    avatar_url: "https://avatars.githubusercontent.com/u/15603060?v=4",
    id: 15603060,
    login: "reza",
    repos_url: "https://api.github.com/users/re/repos",
    url: "https://api.github.com/users/reza"
}
describe('<UserSearchResultCard>', () => {
    beforeEach(() => {
        mount(<UserSearchResultCard user={userData} onUserClicked={() => {}}
        />)
    })

    it('should shows user avatar and the height and width should be 100 ', () => {
            cy.get('img').should('be.visible').and(($img) => {
                expect($img[0].offsetWidth).to.be.eq(100)
                expect($img[0].offsetHeight).to.be.eq(100)
            });
    })

    it('should have title "reza"', () => {
            cy.get('h4').should('have.text', 'reza');
    })
    it('should have url "https://api.github.com/users/reza"', () => {
        cy.get('p').should('have.text', 'https://api.github.com/users/reza');
    })

})