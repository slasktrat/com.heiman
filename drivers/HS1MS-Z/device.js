'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class MotionDevice extends ZwaveDevice {

	async onMeshInit() {

		// print the node's info to the console
		this.printNode();

		// enable debugging
		this.enableDebug();

		this.registerCapability('alarm_tamper', 'NOTIFICATION');
		this.registerCapability('alarm_motion', 'NOTIFICATION');
		this.registerCapability('measure_battery', 'BATTERY');
	}
}

module.exports = MotionDevice;