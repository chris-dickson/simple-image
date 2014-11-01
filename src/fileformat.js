/**
 * Created by cdickson on 10/31/2014.
 */
var fs = require('fs');
var Q = require('Q');

function readJPEG(bytes) {
	return bytes;
}

function readPNG(bytes) {

}

function readBMP(bytes) {

}

function open(path,type) {
	var d = Q.defer();
	fs.readFile(path, function(err,bytes) {
		if (err) {
			d.reject(err);
			return null;
		}
		var img = null;
		switch(type.toUpperCase()) {
			case 'JPEG':
			case 'JPG':
				img = readJPEG(bytes);
				break;
			case 'PNG':
				img =readPNG(bytes);
				break;
			case 'BMP':
				img = readBMP(bytes);
				break;
			default :
				d.reject(new Error('Unsupported file format'));
				return null;
		}
		d.resolve(img);
	});

	return d.promise;
}

exports.open = open;