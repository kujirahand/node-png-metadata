# node-png-metadata
PNG metadata read and write

## install

```
$ npm install png-metadata
```

## require

```
var png = require('png-metadata');
```

## how to use

```
// load from file
var s = png.readFileSync('aaa.png');
// split
var list = png.splitChunk(s);
// append
var iend = list.pop(); // remove IEND
var newchunk = png.createChunk("aaAa","test data");
list.push(newchunk);
list.push(iend);
// join
var newpng = png.joinChunk(list);
// save to file
fs.writeFileSync(outfile, newpng, 'binary');

```

