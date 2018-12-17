'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class TempHumDevice extends ZwaveDevice {

    async onMeshInit() {

        // print the node's info to the console
        this.printNode();

        this.registerCapability('measure_battery', 'BATTERY');
        this.registerCapability('measure_humidity', 'SENSOR_MULTILEVEL');
        this.registerCapability('measure_temperature', 'SENSOR_MULTILEVEL');
    }
}

module.exports = TempHumDevice;
