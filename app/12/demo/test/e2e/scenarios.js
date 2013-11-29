'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('my app', function() {

    beforeEach(function() {
        browser().navigateTo('/index.html');
    });


    it('should automatically redirect to /menu when location hash/fragment is empty', function() {
        expect(browser().location().url()).toBe("/menu");
    });


    describe('menu', function() {

        beforeEach(function() {
            browser().navigateTo('#/menu');
        });


        it('should render menu when user navigates to /view1', function() {
            expect(element('[ng-view] p:first').text()).
                toMatch(/partial for view 1/);
        });

    });


    describe('view2', function() {

        beforeEach(function() {
            browser().navigateTo('#/view2');
        });


        it('should render view2 when user navigates to /view2', function() {
            expect(element('[ng-view] p:first').text()).
                toMatch(/partial for view 2/);
        });

    });
});/**
 * Created by bonamico on 11/27/13.
 */
