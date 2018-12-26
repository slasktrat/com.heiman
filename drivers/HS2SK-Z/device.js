'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class SmartPlugDevice extends ZwaveDevice {

	async onMeshInit() {

		// print the node's info to the console
		this.printNode();

		// enable debugging
		this.enableDebug();

		this.registerCapability('onoff', 'SWITCH_BINARY');

	}
}

module.exports = SmartPlugDevice;