'use strict';

const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;

class SmartMeteringPlugDevice extends ZwaveDevice {

	async onMeshInit() {

		// print the node's info to the console
		//this.printNode();

		// enable debugging
		//this.enableDebug();

		this.registerCapability('onoff', 'SWITCH_BINARY');
		this.registerCapability('measure_power', 'METER', {
			reportParserV4: report => {
				if (report &&
					report.hasOwnProperty('Properties1') &&
					report.Properties1.hasOwnProperty('Meter Type') &&
					(report.Properties1['Meter Type'] === 'Electric meter' || report.Properties1['Meter Type'] === 1) &&
					report.Properties1.hasOwnProperty('Scale bit 2') &&
					report.Properties1['Scale bit 2'] === false &&
					report.hasOwnProperty('Properties2') &&
					report.Properties2.hasOwnProperty('Scale bits 10') &&
					report.Properties2['Scale bits 10'] === 2 &&
					(report.hasOwnProperty('Scale 2') === false ||
						report.hasOwnProperty('Scale 2') &&
						report['Scale 2'] === 0)) {
					return report['Meter Value (Parsed)'];
				}
				return null;
			},
		});
		this.registerCapability('meter_power', 'METER', {
			reportParserV4: report => {
				if (report &&
					report.hasOwnProperty('Properties1') &&
					report.Properties1.hasOwnProperty('Meter Type') &&
					(report.Properties1['Meter Type'] === 'Electric meter' || report.Properties1['Meter Type'] === 1) &&
					report.Properties1.hasOwnProperty('Scale bit 2') &&
					report.Properties1['Scale bit 2'] === false &&
					report.hasOwnProperty('Properties2') &&
					report.Properties2.hasOwnProperty('Scale bits 10') &&
					report.Properties2['Scale bits 10'] === 0 &&
					(report.hasOwnProperty('Scale 2') === false ||
						report.hasOwnProperty('Scale 2') &&
						report['Scale 2'] === 0)) {
					return report['Meter Value (Parsed)'];
				}
				return null;
			},
		});
	}
}

module.exports = SmartMeteringPlugDevice;