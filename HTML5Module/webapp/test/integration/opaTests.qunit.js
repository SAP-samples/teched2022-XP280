/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"ns/HTML5Module/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
