/**
 * @summary Utils Module's Tests
 */
describe( 'utils files service: ', function() {

    var path1, path2, path3;
    beforeEach(function() {
        module('nocc');
        path1 = '/my/path/cv.pdf';
        path2 = '/my/path/other.doc';
        path3 = '/my/path/cv with spaces.rtf';
    });

    describe('getExtension:', function() {
        it('extensions are extracted', inject(function(files) {
            expect(files.getExtension(path1)).toBe('pdf');
            expect(files.getExtension(path2)).toBe('doc');
            expect(files.getExtension(path3)).toBe('rtf');
        }));
    });

    describe('getFilename:', function() {
        it('filenames extracted from path', inject(function(files) {
            expect(files.getFilename(path1)).toBe('cv.pdf');
            expect(files.getFilename(path2)).toBe('other.doc');
            expect(files.getFilename(path3)).toBe('cv with spaces.rtf');
        }));
    });

});

describe( 'utils filters: ', function() {

    var word1;
    beforeEach(function() {
        module('nocc');
        word1 = 'example';
    });

    it('ucfirst', inject(function($filter) {
        expect($filter('ucfirst')(word1)).toBe('Example');
    }));

});
