
# image2canvas

  Convert an image to a canvas element.  Mimics the `context.drawImage()` method api.

## Installation

  Install with [component(1)](http://component.io):

    $ component install staygrimm/image2canvas

## API

Mimics the [drawImage()](http://www.w3schools.com/tags/canvas_drawimage.asp) api

##Example

  var image2canvas = require('image2canvas');
  var img = document.querySelector('#some-image') || '.OtherImage';

  var canvas1 = image2canvas(img);
  var canvas2 = image2canvas(img, 5, 5);
  var canvas3 = image2canvas(img, 0, 0, 180, 180);
  var canvas4 = image2canvas(img, 0, 0, 180, 180, 0, 0, 360, 360);

## Tests

  git clone https://github.com/staygrimm/image2canvas
  cd image2canvas && make test

## License

  The MIT License (MIT)

  Copyright (c) 2014 <copyright holders>

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.