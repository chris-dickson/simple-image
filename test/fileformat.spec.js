/**
 * Created by cdickson on 10/31/2014.
 */
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
var ff = require('../src/fileformat');
chai.use(chaiAsPromised);

var TEST_CONTENT_ROOT = 'test/content/';

describe('FileFormat', function() {
	it('fails when opening a file that doesn\'t exist', function(done) {
		return assert.isRejected(ff.open('bad/path/to/file','jpeg')).notify(done);
	});

	it('fails when trying to open an unknown filetype',function(done) {
		return assert.isRejected(ff.open('content/camera.jpg','txt')).notify(done);
	});

	it('opens JPEG files that exist', function(done) {
		var promise = ff.open(TEST_CONTENT_ROOT+'camera.jpg','jpg');
		return assert.isFulfilled(promise).notify(done);
	});
});