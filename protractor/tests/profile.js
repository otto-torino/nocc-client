/**
 * @file profile.js
 *
 * Contains E2E tests for the profile module
 *
 */
describe('Profile page', function() {

    it('Unauthenticated user can\'t access profile page', function() {
        browser.get('http://localhost/nocc/frontend/nocc/build/#/profile');
        expect(browser.getTitle()).toEqual('Home | NOCC');
    });

});
