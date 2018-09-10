// simple test
var png = require('../lib/png-metadata.js');
var assert = require('assert');

describe('test', function () {
  it('stoi', function () {
    var n;
    n = png.stoi(String.fromCharCode(0,0xFF,0xFF));
    assert.equal(n, 0xFFFF, "16bit value");
    n = png.stoi(String.fromCharCode(0,0,0,10));
    assert.equal(n, 10);
  });
  
  it('itos', function () {
    var n;
    n = png.itos(10, 4);
    assert.equal(n, String.fromCharCode(0,0,0,10));
  });

  var s = png.readFileSync(__dirname + '/simple.png');

  it('splitChunk', function () {
    var list = png.splitChunk(s);
    var s2 = png.joinChunk(list);
    // png.writeFileSync(__dirname + '/tmp.png', s2);
    assert.equal(s.length, s2.length);
    assert.equal(s, s2, "simple.png clone");
  });

  // This image has corrupt data at the end,
  // but we should be able to read it anyway
  var scorrupt = png.readFileSync(__dirname + '/garbage_data_after_iend.png');

  it('splitChunkWithGarbageData', function() {
    assert.doesNotThrow(function() {
      png.splitChunk(scorrupt);
    });
  });

});


