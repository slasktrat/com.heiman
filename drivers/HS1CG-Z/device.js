'use strict';

const Homey = require('homey');
const ZwaveDevice = require('homey-meshdriver').ZwaveDevice;
const gasAlarmCancellation = {};

class GasSensorDevice extends ZwaveDevice {

    async onMeshInit() {
		//this.enableDebug();
        //this.printNode();
		this.registerCapability('alarm_gas', 'NOTIFICATION', {
			report: 'NOTIFICATION_REPORT',
	reportParser: report => {
		if (report && report['Notification Type'] === 'Gas Alarm') {

		
			if (report['Notification Status'] === 'On' && report['Event'] != 0) {
this._flowTriggerGasAlarm.trigger(this).catch(this.error)
				return true;
			}
			
			if (report['Notification Status'] === 'On' && report['Event'] == 0) {
	this.gasAlarmTimeout(10);  //reset gas alarm after 10 seconds if test button was pressed
this._flowTriggerGasAlarmTest.trigger(this).catch(this.error)
				return true;
			}


		}
		return null;
	}
});
		

		
	
    this.gasAlarmTimeout = function(timeOut) {
      if (gasAlarmCancellation.hasOwnProperty("GasAlarm")) {
        clearTimeout(gasAlarmCancellation["GasAlarm"]);
				gasAlarmCancellation["GasAlarm"] = null;
      }
      if (timeOut > 0) {
				if (!gasAlarmCancellation.hasOwnProperty("GasAlarm")) gasAlarmCancellation["GasAlarm"];
				gasAlarmCancellation["GasAlarm"] = setTimeout(() => {
					this.setCapabilityValue('alarm_gas', false);
				}, timeOut * 1000);
			}
    }	
	
	
	 this._flowTriggerGasAlarm = new Homey.FlowCardTriggerDevice('gas_alarm_trigger').register();
	 this._flowTriggerGasAlarmTest = new Homey.FlowCardTriggerDevice('gas_alarm_test').register();

	
	let gasAlarmCondition = new Homey.FlowCardCondition("is_gasalarm");
gasAlarmCondition.register().registerRunListener(( args, state ) => {
    let gasAlarm = args.device.getCapabilityValue('alarm_gas');
    return Promise.resolve( gasAlarm );

  })
    }
	}

module.exports = GasSensorDevice;
