var fs = require('fs');
var ColumnDefinition = require('../../../lib/packets/column_definition.js');
var Packet = require('../../../lib/packets/packet.js');
var fixtureFile = __dirname + '/../fixtures/column_definition';

function prepareFixture() {
  var Packets = require('../../../lib/packets/index.js');
  var packetInd = 0;
  Packets.ColumnDefinition = function(packet) {
    fs.writeFileSync(fixtureFile + packetInd, packet.buffer.slice(packet.start, packet.end));
    packetInd++;
    var c = new ColumnDefinition(packet);
    //console.log('packet', c);
    return c;
  };
  var connection = require('../../../test/common.js').createConnection();
  connection.query('select * from mysql.user', function() {});
  connection.end();
}

//prepareFixture();
//return;

var npackets = 43;
var packets = [];
var packet;

for (var i=0; i < npackets; ++i) {
  var buf = fs.readFileSync(fixtureFile + i);
  packet = new Packet(0, buf, 0, buf.length);
  packets.push(packet);
}

var c;
var repeats = 1000000;

function bench() {
  var start = process.hrtime();
  for (var i=0; i < repeats; ++i) {
    for (var j=0; j < npackets; ++j) {
      packets[j].offset = 0;
      c =new ColumnDefinition(packets[j]);
    }
  }
  var end = process.hrtime(start);
  console.log(1e9*repeats/(end[0]*1000000000 + end[1]));
  setImmediate(bench);
}

bench();

