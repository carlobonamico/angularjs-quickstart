'use strict';

/* jasmine-1.3.0 specs for services go here */

describe('service', function() {
    beforeEach(module('myApp.services'));


    describe('version', function() {
        it('should return current version', inject(function(version) {
            expect(version).toEqual('0.1');
        }));
    });
});
/**
 * Created by bonamico on 11/27/13.
 */
