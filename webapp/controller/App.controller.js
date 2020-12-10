sap.ui.define([
	// parte declarativa
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	// zona restrictiva o privada
	"use strict";

	return Controller.extend("logaligroup.SAPUI5.controller.App", {
		// funciones que la vista que usa éste controlador tendrá acceso

		onInit: function () {

		},

		onOpenHeader: function () {

			//se llama a la funcion openHelloDialog del Component
			this.getOwnerComponent().openHelloDialog();

		}
	});
});