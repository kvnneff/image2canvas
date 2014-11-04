var convert = require('../');
var assert = require('component/assert');
var testImageElement;

function isMatch(data1,data2){
    for(var i = 0; i<data1.length; i++){
        if(data1[i] != data2[i]) return false;
    }
    return true;
};

function getCanvas() {
    var canvas = document.createElement('canvas');
    canvas.width = testImageElement.width;
    canvas.height = testImageElement.height;
    return canvas;
};

testImageElement = new Image();
testImageElement.src = '/test/test.png';
testImageElement.className = 'TestImage';

describe('image2canvas(image)', function () {
    it('converts an image to a canvas element', function (done) {
        var originalCanvas = getCanvas();
        var originalCtx = originalCanvas.getContext('2d');
        originalCtx.drawImage(testImageElement, 0, 0);

        var testCanvas = convert(testImageElement);
        var testCtx = testCanvas.getContext('2d');

        var originalData = originalCtx.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
        var testData = testCtx.getImageData(0, 0, testCanvas.width, testCanvas.height);

        assert(isMatch(originalData.data, testData.data));
        done();
    });
});

describe('image2canvas(selector)', function () {
    it('accepts a css selector as its first argument', function (done) {
        var originalCanvas = getCanvas();
        var originalCtx = originalCanvas.getContext('2d');
        originalCtx.drawImage(testImageElement, 0, 0);

        document.body.appendChild(testImageElement);

        var testCanvas = convert('.TestImage');
        var testCtx = testCanvas.getContext('2d');

        var originalData = originalCtx.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
        var testData = testCtx.getImageData(0, 0, testCanvas.width, testCanvas.height);

        assert(isMatch(originalData.data, testData.data));
        testImageElement.parentElement.removeChild(testImageElement);
        done();
    });
});

describe('image2canvas(image, x, y)', function () {
    it('mimics drawImage() API', function (done) {
        var originalCanvas = getCanvas();
        var originalCtx = originalCanvas.getContext('2d');
        originalCtx.drawImage(testImageElement, 0, 0);

        var testCanvas = convert(testImageElement, 0, 0);
        var testCtx = testCanvas.getContext('2d');

        var originalData = originalCtx.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
        var testData = testCtx.getImageData(0, 0, testCanvas.width, testCanvas.height);

        assert(isMatch(originalData.data, testData.data));
        done();
    });
});

describe('image2canvas(image, x, y, width, height)', function () {
    it('mimics drawImage() API', function (done) {
        var originalCanvas = getCanvas();
        var originalCtx = originalCanvas.getContext('2d');
        originalCtx.drawImage(testImageElement, 10, 20, 30, 40);

        var testCanvas = convert(testImageElement, 10, 20, 30, 40);
        var testCtx = testCanvas.getContext('2d');

        var originalData = originalCtx.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
        var testData = testCtx.getImageData(0, 0, testCanvas.width, testCanvas.height);

        assert(isMatch(originalData.data, testData.data));
        done();
    });
});

describe('image2canvas(image, sx, sy, swidth, sheight, x, y, width, height)', function () {
    it('mimics drawImage() API', function (done) {
        var originalCanvas = getCanvas();
        var originalCtx = originalCanvas.getContext('2d');
        originalCtx.drawImage(testImageElement, 10, 20, 30, 40, 50, 60, 70, 80);

        var testCanvas = convert(testImageElement, 10, 20, 30, 40, 50, 60, 70, 80);
        var testCtx = testCanvas.getContext('2d');

        var originalData = originalCtx.getImageData(0, 0, originalCanvas.width, originalCanvas.height);
        var testData = testCtx.getImageData(0, 0, testCanvas.width, testCanvas.height);

        assert(isMatch(originalData.data, testData.data));
        done();
    });
});