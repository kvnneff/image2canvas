/**
 * Convert `image` element to canvas element
 * @param  {DOM} image Image node
 * @return {DOM} Returns canvas with image rendered
 */
module.exports = function image2Canvas(image, sx, sy, sw, sh, dx, dy, dw, dh) {
    if (typeof document === 'undefined') throw new Error('window.document not available');
    if (typeof image == 'string' || image instanceof String) image = document.querySelector(image);
    if (!image.tagName) throw new Error('No image provided');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    canvas.width = image.width;
    canvas.height = image.height;

    if (arguments.length === 9) {
        ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    } else if (arguments.length === 5) {
        dx = sx;
        dy = sy;
        dw = sw;
        dh = sh;
        ctx.drawImage(image, dx, dy, dw, dh);
    } else if (arguments.length === 3) {
        dx = sx;
        dy = sy;
        ctx.drawImage(image, dx, dy);
    } else {
        ctx.drawImage(image, 0, 0);
    }
    return canvas;
};