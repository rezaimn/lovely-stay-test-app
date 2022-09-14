import {mount} from 'cypress/react18'
import UserDetailsCard from "../../src/shared/PresentationalComponents/UserDetailsCard/UserDetailsCard";


const userDetails = {
    avatar_url: 'https://avatars.githubusercontent.com/u/15603060?v=4',
    id: 12345,
    login: 'reza',
    repos_url: 'https://api.github.com/users/re/repos',
    url: 'https://api.github.com/users/reza',
    bio: 'Some bio',
    company: 'test company',
    email: 'test@gmail.com',
    followers: 10,
    following: 10,
    location: 'Iran',
    name: 'Mohammadreza Imani',
    public_repos: 10,
}
describe('<UserDetailsCard>', () => {
    beforeEach(() => {
        mount(<UserDetailsCard userDetails={userDetails}/>)
    })
    it('should shows user avatar and the height and width should be 240 ', () => {
        cy.get('img').should('be.visible').and(($img) => {
            expect($img[0].offsetWidth).to.be.eq(240)
            expect($img[0].offsetHeight).to.be.eq(240)
        });
    })
    it('should have a h2 with Mohammadreza Imani text', () => {
        cy.get('h2')
            .should('have.text', 'Mohammadreza Imani');
    })
    it('should have 4 p tag visible', () => {
        cy.get('p')
            .should('have.length', 4);
    })
    it('should have 4 p tag with {' +
        'p[0]= Bio: Some bio' +
        'p[1]= Email: test@gmail.com' +
        'p[2]= Company: test company' +
        'p[3]= Location: Iran' +
        ' texts }', () => {
        cy.get('p').first()
            .should("have.text", 'Bio: Some bio')
            .next()
            .should("have.text", 'Email: test@gmail.com')
            .next()
            .should("have.text", 'Company: test company')
            .next()
            .should("have.text", 'Location: Iran');
    })
    it('should have 3 h4 tag with {' +
        'h4[0]= Followings: 10' +
        'h4[1]= Followers: 10' +
        'h4[2]= Repositories: 10' +
        ' texts }', () => {
        cy.get('h4').first()
            .should("have.text", 'Followings: 10')
            .next()
            .should("have.text", 'Followers: 10')
            .next()
            .should("have.text", 'Repositories: 10');
    })
})