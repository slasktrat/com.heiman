'use strict';

const Homey = require('homey');

class HeimanApp extends Homey.App {
	
	onInit() {
		this.log('Heiman is running...');
	}
	
}

module.exports = HeimanApp;