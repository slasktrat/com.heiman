'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class SmokeSensorDevice extends ZwaveDevice {

    async onMeshInit() {

        // print the node's info to the console
        //this.printNode();

        // enable debugging
        //this.enableDebug();

        this.registerCapability('measure_battery', 'BATTERY');
        this.registerCapability('alarm_smoke', 'NOTIFICATION');

        // Initial value
        this.setCapabilityValue("alarm_smoke", false).catch(this.error);
    }
}

module.exports = SmokeSensorDevice;
