'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class SirenDevice extends ZwaveDevice {

	async onMeshInit() {

		// print the node's info to the console
		this.printNode();

		// enable debugging
		this.enableDebug();

		this.registerCapability('onoff', 'BASIC');

		this.registerCapability('measure_battery', 'BATTERY');

	}
}

module.exports = SirenDevice;