// serial.js
(function(ext) {
    var device = null;
    var _rxBuf = [];

	var values = {};
	var indexs = [];
	var lines = [""];
	var nextID = 0;
	var startTimer = 0;
	var versionIndex = 0xFA;
	var isReceived = false;
	var lastLine = "";
  var potentialDevices = [];

  ext.resetAll = function(){};

  ext.setup = function() {};

  ext.isAvailableAt = function(nextID) {};

  ext.readLine = function(nextID){};

  ext.readLineText= function(nextID){};

  ext.writeLine = function(line) {};

  ext._deviceConnected = function(dev) {};

  function deviceOpened(dev) {};

  ext._deviceRemoved = function(dev) {
      if(device != dev) return;
      device = null;
  };

  ext._shutdown = function() {
      if(device) device.close();
      device = null;
  };

  ext._getStatus = function() {
      if(!device) return {status: 1, msg: 'Serial disconnected'};
      return {status: 2, msg: 'Serial connected'};
  };

  var descriptor = {
  };

	ScratchExtensions.register('Custom Serial', descriptor, ext, {type: 'serial'});
})({});
